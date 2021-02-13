<template>
  <div style="text-align: left">
    <div class="columns is-vcentered">
      <div class="column is-offset-1">
        <p>
          In diesem Spiel überspringt man mit einem Spielstein einen anderen
          waagerecht oder senkrecht und landet auf einem freien Feld. Dann wird
          der übersprungene Spielstein entfernt. Ziel ist es, dass möglichst
          wenige Steine übrig bleiben.
        </p>
      </div>
      <div class="column is-two-thirds">
        <div id="peg-solitaire" />
      </div>
    </div>
  </div>
</template>
<script>
import Phaser from 'phaser'

export default {
  mounted () {
    const assetPathPeg = require('~/assets/experiments/circle.svg')
    const gridColor1Peg = 0x00B9F2
    const gridColor2Peg = 0x016FCE
    const localStorageName = 'pegsol'
    let highScore = 0

    // circle.png (asset for pieces for now) is 128x128 pixels
    // This just handles the size of everything.
    const scaling = getSizePeg() / 128
    const blocksize = scaling * 128

    function getSizePeg () {
      // if (window.innerWidth > 1200) {
      //   boardSize = 600;
      // }
      let boardSize = window.innerWidth / 3

      if (boardSize > 600) {
        boardSize = 600
      }
      boardSize = Math.round(boardSize / 7)
      return boardSize
    }

    // Function to check if x, y coordinates are legal, not out of the board.
    // Not necessary to be positioned here, but can more easily be changed here.
    function inBoardBoundaries (x, y) {
      return (
        (x > blocksize * 2 &&
          y > 0 &&
          x < blocksize * 5 &&
          y < blocksize * 7) ||
        (x > 0 && y > blocksize * 2 && x < blocksize * 7 && y < blocksize * 5)
      )
    }

    class ScenePeg extends Phaser.Scene {
      constructor () {
        super('SceneMain')
      }

      // Called once to load necessary assets etc.
      preload () {
        this.load.image('circle', assetPathPeg)
      }

      reset () {
        highScore =
          localStorage.getItem(localStorageName) == null
            ? 0
            : localStorage.getItem(localStorageName)
        this.dragObj = null
        this.pieceCollection = []
        this.registry.destroy()
        this.events.off()
        this.scene.restart()
        this.removed = 0
        this.score = highScore
      }

      // Called once to initialize the game
      create () {
        this.dragObj = null
        this.pieceCollection = []
        this.oldX = 0
        this.oldY = 0
        this.score = Math.max(0, highScore)
        this.removed = 0
        // Draw the chessboard grid
        let grid = this.add
          .grid(
            blocksize * 2,
            0,
            blocksize * 3,
            blocksize * 2,
            blocksize,
            blocksize,
            gridColor1Peg
          )
          .setAltFillStyle(gridColor2Peg)
          .setOutlineStyle()
          .setOrigin(0, 0)
        grid = this.add
          .grid(
            0,
            blocksize * 2,
            blocksize * 7,
            blocksize * 3,
            blocksize,
            blocksize,
            gridColor1Peg
          )
          .setAltFillStyle(gridColor2Peg)
          .setOutlineStyle()
          .setOrigin(0, 0)
        grid = this.add
          .grid(
            blocksize * 2,
            blocksize * 5,
            blocksize * 3,
            blocksize * 2,
            blocksize,
            blocksize,
            gridColor2Peg
          )
          .setAltFillStyle(gridColor1Peg)
          .setOutlineStyle()
          .setOrigin(0, 0)

        // Place the initial pieces
        this.placePieces()

        // Call startDrag() on mouse down
        this.input.on('pointerdown', this.startDrag, this)
      }

      // Start dragging the object
      startDrag (pointer, targets) {
        this.input.off('pointerdown', this.startDrag, this)
        // Choose the first possible target to drag
        this.dragObj = targets[0]
        // Remember old position to place the piece back to where it was, in case the user's move is illegal
        // undefined check here and later only means, that dragging is only legal if there is a target to be dragged, i.e. a piece is below the cursor
        if (typeof this.dragObj !== 'undefined') {
          this.oldX = this.dragObj.x
          this.oldY = this.dragObj.y
          // Remove piece from piece collection, so it is not counting as set piece anymore -> not occupying anything
          this.pieceCollection.splice(
            this.pieceCollection.indexOf(this.dragObj),
            1
          )
        }
        this.input.on('pointermove', this.doDrag, this)
        this.input.on('pointerup', this.stopDrag, this)
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
          this.clipToGrid(this.dragObj, false)
          this.pieceCollection.push(this.dragObj)
          this.checkWon()
        }
        this.dragObj = null

        switch (this.removed) {
          case 14:
            this.score = Math.max(1, this.score)
            break
          case 18:
            this.score = Math.max(2, this.score)
            break
          case 22:
            this.score = Math.max(3, this.score)
            break
          case 26:
            this.score = Math.max(4, this.score)
            break
          case 30:
            this.score = Math.max(5, this.score)
            break
        }
        highScore = Math.max(this.score, highScore)
        localStorage.setItem(localStorageName, highScore)

        // activates pointerdown control, deactivates pointermove and pointerup control.
        this.input.on('pointerdown', this.startDrag, this)
        this.input.off('pointermove', this.doDrag, this)
        this.input.off('pointerup', this.stopDrag, this)
      }

      // Game is won, if only one piece left, and middle space occupied.
      checkWon () {
        if (
          this.pieceCollection.length === 1 &&
          this.isOccupied(blocksize * 3.5, blocksize * 3.5)
        ) {
          // Win message needs to be shown here etc. Currently only printing won on the console.
          // console.log("won");
          this.score = 10
        }
      }

      // Game Logic happens in here somehow
      // obj is the piece to clip to the grid.
      // placeWOCheck needs to be true when setting pieces initially. The check refers to jumping exactly 2 tiles and only if jumping over another piece.
      clipToGrid (obj, placeWOCheck) {
        if (placeWOCheck) {
          const newX =
            Math.round((obj.x + blocksize / 2) / blocksize) * blocksize -
            blocksize / 2
          const newY =
            Math.round((obj.y + blocksize / 2) / blocksize) * blocksize -
            blocksize / 2
          obj.x = newX
          obj.y = newY
          return
        }
        if (typeof obj !== 'undefined') {
          const newX =
            Math.round((obj.x + blocksize / 2) / blocksize) * blocksize -
            blocksize / 2
          const newY =
            Math.round((obj.y + blocksize / 2) / blocksize) * blocksize -
            blocksize / 2
          // Calculate new position for the object being currently dragged
          // Check if new coordinates are legal coordinates. I.e. in the board and not occupied yet
          // If not place back on old coordinates
          if (inBoardBoundaries(newX, newY) && !this.isOccupied(newX, newY)) {
            // Game Logic is hidden in here:
            // New coordinates only legal if Y (X) coordinate stays the same and the distance between the old Y (X) and the new one is two tiles
            // Also removes the piece that's being jumped over
            let checkPassed
            if (
              Math.abs(newX - this.oldX) === blocksize * 2 &&
              newY === this.oldY
            ) {
              if (newX > this.oldX) { checkPassed = this.removePiece(newX - blocksize, newY) } else { checkPassed = this.removePiece(newX + blocksize, newY) }
            } else if (
              Math.abs(newY - this.oldY) === blocksize * 2 &&
              newX === this.oldX
            ) {
              if (newY > this.oldY) { checkPassed = this.removePiece(newX, newY - blocksize) } else { checkPassed = this.removePiece(newX, newY + blocksize) }
            }
            // If no check necessary or check passed, place the piece at the new position. Otherwise move it back.
            if (checkPassed) {
              obj.x = newX
              obj.y = newY
            } else {
              obj.x = this.oldX
              obj.y = this.oldY
            }
          } else {
            obj.x = this.oldX
            obj.y = this.oldY
          }
        }
      }

      // Remove a piece from the piece collection that is touching the given x y coordinates
      // Returns true if a piece was removed
      removePiece (x, y) {
        // Look at all pieces in the collection and remove the one which contains given coordinates.
        for (let i = 0; i < this.pieceCollection.length; i++) {
          if (this.pieceCollection[i].getBounds().contains(x, y)) {
            // 'Undraw' piece
            this.pieceCollection[i].destroy()
            // Remove piece from collection
            this.pieceCollection.splice(i, 1)
            this.removed++
            return true
          }
        }
        return false
      }

      placePieces () {
        this.pieceCollection.forEach((element) => {
          element.destroy()
        })
        this.pieceCollection = []
        // Upper 6 pieces
        for (let i = 0; i < 6; i++) {
          const p = this.add.image(
            blocksize * (2 + (i % 3)),
            Math.floor(i / 3) * blocksize,
            'circle'
          )
          this.clipToGrid(p, true)
          p.setScale(scaling)
          p.setInteractive()
          this.pieceCollection.push(p)
        }
        // Middle Pieces
        for (let i = 0; i < 10; i++) {
          const p = this.add.image(
            blocksize * (i % 7),
            Math.floor(i / 7) * blocksize + blocksize * 2,
            'circle'
          )
          this.clipToGrid(p, true)
          p.setScale(scaling)
          p.setInteractive()
          this.pieceCollection.push(p)
        }
        // i = 10 is middle of board
        for (let i = 11; i < 21; i++) {
          const p = this.add.image(
            blocksize * (i % 7),
            Math.floor(i / 7) * blocksize + blocksize * 2,
            'circle'
          )
          this.clipToGrid(p, true)
          p.setScale(scaling)
          p.setInteractive()
          this.pieceCollection.push(p)
        }
        // Lower 6 pieces
        for (let i = 0; i < 6; i++) {
          const p = this.add.image(
            blocksize * (2 + (i % 3)),
            Math.floor(i / 3) * blocksize + blocksize * 5,
            'circle'
          )
          this.clipToGrid(p, true)
          p.setScale(scaling)
          p.setInteractive()
          this.pieceCollection.push(p)
        }
      }

      // Check if given x, y Coordinates are occupied by an object that is NOT currently being dragged
      isOccupied (x, y) {
        let occ = false
        this.pieceCollection.forEach((element) => {
          occ = occ || element.getBounds().contains(x, y)
        })
        return occ
      }

      // Called regularly for a continuous game.
      // Not necessary for Peg Solitaire, since we're only acting once the user acts.
      update () {}
    }
    // Game config
    const configPeg = {
      type: Phaser.AUTO,
      // Looks for a 'div' with 'id=<parent>' and places the game inside it
      parent: 'peg-solitaire',
      // Dimensions of the game
      width: blocksize * 7,
      height: blocksize * 7,
      // Which game to show, SceneMain is the class I implemented above
      scene: ScenePeg,
      backgroundColor: 0x444444
      // And more...
    }

    // Create the game, and that's it.
    const gamePeg = new Phaser.Game(configPeg)
  }
}
</script>
