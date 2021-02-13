<template>
  <div style="text-align: left">
    <div class="columns is-vcentered">
      <div class="column is-offset-1">
        <p>
          Die 12 Spielsteine sind zu Beginn falsch sortiert. Sie müssen in die
          gleiche Reihenfolge wie auf dem unten links stehenden Bild sortiert
          werden. Zum Sortieren kannst du bis zu vier Steine in einer Reihe
          übereinander stapeln. Zusätzlich sind zwei Felder oben links und
          rechts, wo Steine abgelegt werden können. Du kannst immer nur den
          obersten Stein einer Reihe bewegen. Jeder Zug zählt!
        </p>
      </div>
      <div class="column is-two-thirds">
        <div id="Schiebepuzzle" />
      </div>
    </div>
  </div>
</template>
<script>
import Phaser from 'phaser'

export default {
  mounted () {
    const red = 0xFF0000
    const blue = 0x0000FF
    const green = 0x00FF00
    const yellow = 0xFFFF00
    const startY = 200
    const cardColor = 0xCCCCCC
    const boardsizePuzzle = 600
    const spacing = Math.floor(boardsizePuzzle / 5)
    const radiusPuzzle = 30

    const configs = [
      [
        yellow,
        green,
        blue,
        yellow,
        yellow,
        blue,
        green,
        blue,
        green,
        red,
        red,
        red
      ],
      [
        green,
        blue,
        yellow,
        red,
        red,
        green,
        green,
        blue,
        red,
        yellow,
        yellow,
        blue
      ]
    ]

    class ScenePuzzle extends Phaser.Scene {
      constructor () {
        super('SceneMain')
      }

      // Called once to load necessary assets etc.
      preload () {
        this.load.image(
          'bg',
          require('~/assets/experiments/Schiebepuzzle_hg.svg')
        )
      }

      reset () {
        this.input.off('pointerdown', this.startDrag, this)
        this.input.on('pointerdown', this.startDrag, this)
        this.turns = 0
        if (this.left != null) {
          this.left.destroy()
        }
        if (this.right != null) {
          this.right.destroy()
        }
        if (this.goalText != null) {
          this.goalText.destroy()
        }
        if (this.turnsText != null) {
          this.turnsText.destroy()
        }
        this.left = null
        this.right = null
        this.goalText = null
        this.turnsText = this.add.text(400, 400, '# Züge: ' + this.turns, {
          font: '36px Arial'
        })
        this.currentCardCircles.forEach((element) => {
          element.destroy()
        })
        this.currentCardCircles = []
        for (let i = 0; i < this.internGameState.length; i++) {
          for (let j = 0; j < this.internGameState[i].length; j++) {
            this.internGameState[i][j].destroy()
          }
        }
        this.addCircles(
          configs[0],
          0,
          startY,
          radiusPuzzle,
          Math.floor(boardsizePuzzle / 5),
          true
        )
        this.internGameState = [
          [
            this.currentCardCircles[0],
            this.currentCardCircles[4],
            this.currentCardCircles[8]
          ],
          [
            this.currentCardCircles[1],
            this.currentCardCircles[5],
            this.currentCardCircles[9]
          ],
          [
            this.currentCardCircles[2],
            this.currentCardCircles[6],
            this.currentCardCircles[10]
          ],
          [
            this.currentCardCircles[3],
            this.currentCardCircles[7],
            this.currentCardCircles[11]
          ]
        ]
        this.currentCardCircles = []
        this.addCard(configs[1])
      }

      // Called once to initialize the game
      create () {
        this.add.image(0, 0, 'bg').setOrigin(0, 0)
        this.turnsText = null
        this.goalText = null
        this.left = null
        this.right = null
        this.score = 0
        this.turns = 0
        // this.add.circle(60, 60, 10, 0xffffff);
        // this.add.circle(boardsizePuzzle - 60, 60, 10, 0xffffff);
        this.currentCardCircles = []
        this.internGameState = []
        this.currentCard = this.add
          .rectangle(50, boardsizePuzzle - 200, 300, 150, cardColor)
          .setOrigin(0, 0)
        this.reset()
        // this.input.on('pointerdown', this.startDrag, this);
      }

      addCircles (
        colorArr = configs[0],
        off = 0,
        y = startY,
        radiusPuzzle = 30,
        spacing = Math.floor(boardsizePuzzle / 5),
        interactive = false
      ) {
        for (let i = 0; i < 3; i++) {
          for (let x = 1; x < 5; x++) {
            const c = this.add.circle(
              off + x * spacing,
              y,
              radiusPuzzle,
              colorArr[4 * i + x - 1]
            )
            if (interactive) {
              c.setInteractive()
            }
            this.currentCardCircles.push(c)
          }
          y += 2 * radiusPuzzle
        }
      }

      addCard (config = configs[0]) {
        for (let i = 0; i < this.currentCardCircles.length; i++) {
          this.currentCardCircles[i].destroy()
        }
        this.addCircles(config, 50, 435, 20, Math.floor(300 / 5), false)
      }

      // Start dragging the object
      startDrag (pointer, targets) {
        // Choose the first possible target to drag
        this.dragObj = targets[0]
        // Remember old position to place the piece back to where it was, in case the user's move is illegal
        // undefined check here and later only means, that dragging is only legal if there is a target to be dragged, i.e. a piece is below the cursor
        if (typeof this.dragObj !== 'undefined') {
          this.input.off('pointerdown', this.startDrag, this)
          this.oldX = this.dragObj.x
          this.oldY = this.dragObj.y
          this.input.on('pointermove', this.doDrag, this)
          this.input.on('pointerup', this.stopDrag, this)
        }
      }

      doDrag (pointer) {
        if (typeof this.dragObj !== 'undefined') {
          this.dragObj.x = pointer.x
          this.dragObj.y = pointer.y
        }
      }

      stopDrag (pointer, targets) {
        // Called on mouse up. Clips the dragged object to the grid and enables dragging for another object again.
        // Also adds the piece back to the piece collection
        if (typeof this.dragObj !== 'undefined') {
          this.clipToGrid(this.dragObj)
          this.turns++
        }
        if (this.checkWon()) {
          if (this.turns <= 19) {
            this.score = Math.max(5, this.score)
          } else if (this.turns <= 23) {
            this.score = Math.max(4, this.score)
          } else if (this.turns <= 27) {
            this.score = Math.max(3, this.score)
          } else if (this.turns <= 31) {
            this.score = Math.max(2, this.score)
          } else if (this.turns <= 35) {
            this.score = Math.max(1, this.score)
          } else {
            this.score = Math.max(0, this.score)
          }
          this.goalText = this.goalText = this.add.text(
            boardsizePuzzle / 2 - 24 - 48,
            10,
            'Richtig!',
            {
              font: '48px Arial'
            }
          )
        } else {
          this.input.on('pointerdown', this.startDrag, this)
        }
        if (this.turnsText != null) {
          this.turnsText.destroy()
        }
        this.turnsText = this.add.text(400, 400, '# Züge: ' + this.turns, {
          font: '36px Arial'
        })
        // activates pointerdown control, deactivates pointermove and pointerup control.
        this.input.off('pointermove', this.doDrag, this)
        this.input.off('pointerup', this.stopDrag, this)
      }

      removeOld () {
        if (this.oldX === spacing) {
          this.internGameState[0].shift()
        } else if (this.oldX === 2 * spacing) {
          this.internGameState[1].shift()
        } else if (this.oldX === 3 * spacing) {
          this.internGameState[2].shift()
        } else if (this.oldX === 4 * spacing) {
          this.internGameState[3].shift()
        }
      }

      clipToGrid (obj, radiusPuzzle = 30) {
        if (
          !(
            this.dragObj === this.internGameState[0][0] ||
            this.dragObj === this.internGameState[1][0] ||
            this.dragObj === this.internGameState[2][0] ||
            this.dragObj === this.internGameState[3][0] ||
            this.dragObj === this.left ||
            this.dragObj === this.right
          )
        ) {
          obj.x = this.oldX
          obj.y = this.oldY
          this.turns--
          return
        }
        let tookFrom = 0
        if (this.oldY === 60) {
          if (this.oldX === 60) {
            this.left = null
            tookFrom = -1
          } else {
            tookFrom = 1
            this.right = null
          }
        }

        if (obj.getBounds().contains(60, 60)) {
          if (this.left == null) {
            this.left = this.dragObj
            obj.x = 60
            obj.y = 60
            this.removeOld()
            if (tookFrom === -1) {
              this.turns--
            }
            return
          }
        } else if (obj.getBounds().contains(boardsizePuzzle - 60, 60)) {
          if (this.right == null) {
            this.right = this.dragObj
            obj.x = boardsizePuzzle - 60
            obj.y = 60
            this.removeOld()
            if (tookFrom === 1) {
              this.turns--
            }
            return
          }
        }
        let newY
        for (let i = 1; i < 5; i++) {
          if (obj.x < (i + 0.5) * spacing) {
            const newX = i * spacing
            if (newX === this.oldX) {
              obj.x = this.oldX
              obj.y = this.oldY
              this.turns--
              return
            }
            if (this.internGameState[i - 1].length === 0) {
              newY = startY + 4 * radiusPuzzle
            } else if (this.internGameState[i - 1].length === 1) {
              newY = startY + 2 * radiusPuzzle
            } else if (this.internGameState[i - 1].length === 2) {
              newY = startY
            } else if (this.internGameState[i - 1].length === 3) {
              newY = startY - 2 * radiusPuzzle
            } else {
              obj.x = this.oldX
              obj.y = this.oldY
              this.turns--
              return
            }
            obj.y = newY
            obj.x = newX
            this.removeOld()
            this.internGameState[i - 1].unshift(obj)
            return
          }
        }
        const i = 4
        const newX = i * spacing
        if (newX === this.oldX) {
          obj.x = this.oldX
          obj.y = this.oldY
          this.turns--
          return
        }
        if (this.internGameState[i - 1].length === 0) {
          newY = startY + 4 * radiusPuzzle
        } else if (this.internGameState[i - 1].length === 1) {
          newY = startY + 2 * radiusPuzzle
        } else if (this.internGameState[i - 1].length === 2) {
          newY = startY
        } else if (this.internGameState[i - 1].length === 3) {
          newY = startY - 2 * radiusPuzzle
        } else {
          obj.x = this.oldX
          obj.y = this.oldY
          this.turns--
          return
        }
        obj.y = newY
        obj.x = newX
        this.removeOld()
        this.internGameState[i - 1].unshift(this.dragObj)
      }

      checkWon () {
        for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 3; j++) {
            if (
              typeof this.internGameState[i][j] === 'undefined' ||
              this.internGameState[i][j].fillColor !==
                this.currentCardCircles[4 * j + i].fillColor
            ) {
              return false
            }
          }
        }
        return true
      }
    }

    // Game config
    const configPuzzle = {
      type: Phaser.AUTO,
      // Looks for a 'div' with 'id=<parent>' and places the game inside it
      parent: 'Schiebepuzzle',
      // Dimensions of the game
      width: boardsizePuzzle,
      height: boardsizePuzzle,
      // Which game to show, SceneMain is the class I implemented above
      scene: ScenePuzzle,
      backgroundColor: 0x444444
      // And more...
    }

    // Create the game, and that's it.
    const gamePuzzle = new Phaser.Game(configPuzzle)
  }
}
</script>
