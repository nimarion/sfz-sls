<template>
  <div style="text-align: left">
    <div class="columns is-vcentered">
      <div class="column is-offset-1">
        <p>
          Ziel ist es, alle Zahlen von 1 an in der richtigen Reihenfolge
          nacheinander anzuklicken. Nachdem du die 1 angeklickt hast, werden
          aber die anderen Zahlen durch weiße Rechtecke verdeckt. Ein
          trainierter Schimpanse schafft ein Spielfeld mit den Zahlen von 1 bis
          9 in 90% der Fälle
        </p>
      </div>
      <div class="column is-two-thirds">
        <div id="chimp" />
      </div>
    </div>
  </div>
</template>
<script>
import Phaser from 'phaser'

export default {
  mounted () {
    const numColorChimp = 0xFFFFFF
    const boardSizeChimp = getSizeChimp()
    const numSizeChimp = getSizeChimp() / 8
    const coordMaxChimp = boardSizeChimp / numSizeChimp

    function getSizeChimp () {
      let boardSize = window.innerWidth / 3

      if (boardSize > 600) {
        boardSize = 600
      }
      boardSize = Math.round(boardSize / 8)
      boardSize = boardSize * 8
      return boardSize
    }

    // Returns a random integer in the interval [min,max)
    function randRange (min, max) {
      return Math.floor(Math.random() * (max - min) + min)
    }

    class SceneChimp extends Phaser.Scene {
      constructor () {
        super('SceneMain')
      }

      // Resets/ Initializes the game
      reset () {
        // Remove all rectangles
        for (let i = 0; i < this.rectangles.length; i++) {
          this.rectangles[i].destroy()
        }
        this.rectangles = []

        // Removes all numbers that are shown
        for (let i = 0; i < this.textnums.length; i++) { this.textnums[i].destroy() }
        this.textnums = []
        // Resets the intern game state
        for (let i = 0; i < coordMaxChimp; i++) { for (let j = 0; j < coordMaxChimp; j++) { this.occupied[i][j] = -1 } }

        // Chooses (randomly) numcount many coordinates many coordinates where the numbers are to be placed
        for (let i = 0; i < this.numcount; i++) {
          do {
            var x = randRange(0, coordMaxChimp)
            var y = randRange(0, coordMaxChimp)
          } while (this.occupied[x][y] !== -1)
          this.occupied[x][y] = i + 1
          this.textnums.push(
            this.add.text(
              x * numSizeChimp + numSizeChimp / 4,
              y * numSizeChimp + numSizeChimp / 4,
              i + 1,
              {
                fontSize: numSizeChimp / 2 + 'px'
              }
            )
          )
        }
        this.gameStarted = false
        this.curNum = 1
      }

      // Is called on mouse down
      onMouseDown (pointer) {
        // Calculate (x,y) from pointer
        const pointX = Math.floor(pointer.downX / numSizeChimp)
        const pointY = Math.floor(pointer.downY / numSizeChimp)

        // If the numbers have not been replaced by white squares yet
        if (!this.gameStarted) {
          this.gameStarted = true
          this.replaceNumbers()
        }
        // Handle the rest here
        this.clicked(pointX, pointY)
      }

      clicked (x, y) {
        // If there is no number on the clicked position -> ignore
        if (this.occupied[x][y] === -1) { return }
        // If the clicked square is not in the correct order -> gameOver into reset
        if (this.occupied[x][y] !== this.curNum) {
          this.gameOver()
          return
        }
        // Clicked the right square
        // -> look in square list which square is to be destroyed
        for (let i = 0; i < this.rectangles.length; i++) {
          // If square at i-th position is clicked -> remove it
          if (
            this.contains(
              this.rectangles[i],
              x * numSizeChimp + numSizeChimp / 2,
              y * numSizeChimp + numSizeChimp / 2
            )
          ) {
            // Undraw, remove from list, remove from 2D array
            this.rectangles[i].destroy()
            this.rectangles.splice(i, 1)
            this.occupied[x][y] = -1
            // Next number should be one higher
            this.curNum++
            // If no rectangles left -> level done, restart with one number more
            if (this.rectangles.length === 0) {
              this.numcount++
              this.score = Math.max(
                this.score,
                Math.floor(Math.min((this.numcount - 2) / 2, 5))
              )
              this.reset()
            }
            return
          }
        }
      }

      // Returns true if the given rectangle contains the point (x,y)
      contains (rect, x, y) {
        return (
          rect.x - rect.width / 2 <= x &&
          rect.x + rect.width / 2 >= x &&
          rect.y - rect.height / 2 <= y &&
          rect.y + rect.height / 2 >= y
        )
      }

      // Is called whenever a number is clicked in the wrong order
      gameOver () {
        // Destroys all rectangles
        for (let i = 0; i < this.rectangles.length; i++) {
          this.rectangles[i].destroy()
        }
        this.rectangles = []
        // Resets the number of numbers to 3
        this.numcount = 3
        // Resets the game
        this.reset()
      }

      // Replaces numbers with squares.
      replaceNumbers () {
        this.rectangles = []
        for (let i = 0; i < coordMaxChimp; i++) {
          for (let j = 0; j < coordMaxChimp; j++) {
            if (this.occupied[i][j] !== -1) {
              this.rectangles.push(
                this.add.rectangle(
                  i * numSizeChimp + numSizeChimp / 2,
                  j * numSizeChimp + numSizeChimp / 2,
                  numSizeChimp,
                  numSizeChimp,
                  numColorChimp
                )
              )
            }
          }
        }
        // Comment this to reveal numbers when clicking a square
        for (let i = 0; i < this.textnums.length; i++) {
          this.textnums[i].destroy()
        }
      }

      // Called once to load necessary assets etc.
      preload () {}
      // Called once to initialize the game
      create () {
        this.score = 0
        this.rectangles = []
        this.textnums = []
        this.numcount = 3
        this.occupied = new Array(coordMaxChimp)
        for (let i = 0; i < coordMaxChimp; i++) {
          this.occupied[i] = new Array(coordMaxChimp)
        }
        this.reset()
        this.input.on('pointerdown', this.onMouseDown, this)
      }

      // Called regularly for a continuous game.
      // Not necessary for "Beat the Chimp", since we're only acting once the user acts.
      update () {}
    }

    // Game config
    const configChimp = {
      type: Phaser.AUTO,
      // Looks for a 'div' with 'id=<parent>' and places the game inside it
      parent: 'chimp',
      // Dimensions of the game
      width: boardSizeChimp,
      height: boardSizeChimp,
      // Which game to show, SceneMain is the class I implemented above
      scene: SceneChimp,
      backgroundColor: 0x444444
      // And more...
    }

    // Create the game, and that's it.
    const gameChimp = new Phaser.Game(configChimp)
  }
}
</script>
