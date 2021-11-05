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
        <br />
        <p class="title">Aktueller Highscore: {{ highscore }} von 5 Punkte!</p>
        <br />
        <b-button type="is-success" outlined @click="reload">
          Level neu laden
        </b-button>
      </div>
      <div class="column is-two-thirds">
        <div id="memory-container" />
      </div>
    </div>
  </div>
</template>
<script>
import Phaser from "phaser";

export default {
  data() {
    return {
      game: null,
    };
  },
  mounted() {
    // Use these parameters to scale the game
    const boardSizeMem = 600;

    // Color & sprite definitions
    const cardbackPathMem = require("~/assets/experiments/memory/cardback.png"); // Piece sprite
    const backgroundColorMem = 0x444444; // Background color
    const pngSize = 128;

    // Game logic definitions
    const duration = 5000; // Animation duration
    const numOfRandomControlPoints = 1;

    // Do not change
    const gameScale = boardSizeMem / 600;
    const effectiveGridMin = 50 * gameScale;
    const effectiveGridMax = boardSizeMem - 50 * gameScale;

    function shuffleArray(arr) {
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    }

    function randRange(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }

    class ScenePeg extends Phaser.Scene {
      constructor() {
        super("SceneMain");
      }
      // Called once to load necessary assets etc.
      preload() {
        this.load.image("cardback", cardbackPathMem);
        this.load.image("1", require("~/assets/experiments/memory/1.png"));
        this.load.image("2", require("~/assets/experiments/memory/2.png"));
        this.load.image("3", require("~/assets/experiments/memory/3.png"));
        this.load.image("4", require("~/assets/experiments/memory/4.png"));
        this.load.image("5", require("~/assets/experiments/memory/5.png"));
        this.load.image("6", require("~/assets/experiments/memory/6.png"));
        this.load.image("7", require("~/assets/experiments/memory/7.png"));
        this.load.image("8", require("~/assets/experiments/memory/8.png"));
      }

      retry() {
        if (this.resetting || this.startTime != -1) {
          return;
        }

        this.pairsDone = 0;
        this.state = 0;
        this.startTime = -1;
        this.firstRect = null;

        // Reset lists and destroy drawn elements
        for (var i = 0; i < this.textnums.length; i++)
          this.textnums[i].destroy();
        for (const [key, val] of this.rectangles) val.destroy();
        this.textnums = [];
        this.splines = [];
        this.rectangles = new Map();
        this.drawPairs();
      }

      reset() {
        if (this.resetting || this.startTime != -1) {
          return;
        }
        this.pointerOut();
        this.numOfPairs = 2;
        this.state = 0;
        this.started = false;
        this.startTime = -1;
        this.pairsDone = 0;
        this.firstRect = null;

        // Reset lists and destroy drawn elements
        for (var i = 0; i < this.textnums.length; i++)
          this.textnums[i].destroy();
        for (const [key, val] of this.rectangles) val.destroy();
        this.textnums = [];
        this.splines = [];
        this.rectangles = new Map();
        this.drawPairs();
      }

      // Called once to initialize the game
      create() {
        this.allow_clicking = false;
        this.started = false;
        this.startTime = -1;
        this.rectangles = new Map();
        this.textnums = [];
        this.splines = [];
        this.score = 2;
        this.reset();
        this.input.on("pointerdown", this.start, this);
        this.input.on("pointerdown", this.onMouseDown, this);
      }

      onMouseDown(pointer, targets) {
        if (targets.length == 0 || !this.allow_clicking) {
          return;
        }

        if (this.state == 0) {
          // Selecting first card
          this.firstRect = targets[0];

          var rx1 = this.firstRect.x;
          var ry1 = this.firstRect.y;
          var x1 = this.gridFromRect(rx1);
          var y1 = this.gridFromRect(ry1);

          this.rectangles.get(this.internState[x1][y1]).destroy();
          var blockSize =
            (effectiveGridMax - effectiveGridMin) / this.gridSize / 1.5;
          this.textnums.push(
            this.add
              .image(
                rx1,
                ry1,
                parseInt(this.internState[x1][y1] / 2 + 1).toString()
              )
              .setScale((blockSize * Math.sqrt(gameScale)) / pngSize)
          );

          this.pointerOut();
          this.state = 1;
        } else {
          // If selecting the same card again unselect it
          // Selecting second card
          var rx1 = this.firstRect.x;
          var ry1 = this.firstRect.y;
          var rx2 = targets[0].x;
          var ry2 = targets[0].y;

          // Calculate grid coordinates from rectangle coordinates
          var x1 = this.gridFromRect(rx1);
          var y1 = this.gridFromRect(ry1);
          var x2 = this.gridFromRect(rx2);
          var y2 = this.gridFromRect(ry2);

          this.rectangles.get(this.internState[x2][y2]).destroy();
          var blockSize =
            (effectiveGridMax - effectiveGridMin) / this.gridSize / 1.5;
          this.textnums.push(
            this.add
              .image(
                rx2,
                ry2,
                parseInt(this.internState[x2][y2] / 2 + 1).toString()
              )
              .setScale((blockSize * Math.sqrt(gameScale)) / pngSize)
          );

          // Check if the value below the cards is the same
          if (
            parseInt(this.internState[x1][y1] / 2) ==
            parseInt(this.internState[x2][y2] / 2)
          ) {
            this.internState[x1][y1] = -1;
            this.internState[x2][y2] = -1;
            this.pairsDone++;

            if (this.pairsDone == this.numOfPairs) {
              this.next();
              return;
            }
          } else {
            this.resetting = true;
            this.allow_clicking = false;
            this.time.delayedCall(
              1500,
              function () {
                this.resetting = false;
                this.retry();
              },
              [],
              this
            );
          }
          this.state = 0;
          // this.firstRect = null;
        }
      }

      // Draws a grid with numOfPairs many pairs
      drawPairs() {
        // Calculate grid size
        var numOfTiles = 2 * this.numOfPairs;
        this.gridSize = Math.ceil(Math.sqrt(numOfTiles));

        // Initialize new intern game state
        this.internState = new Array(this.gridSize);
        for (var i = 0; i < this.gridSize; i++) {
          this.internState[i] = new Array(this.gridSize);
        }
        for (var i = 0; i < this.gridSize; i++) {
          for (var j = 0; j < this.gridSize; j++) {
            this.internState[i][j] = -1;
          }
        }

        // Randomly pick 2 * numOfPairs positions
        var arr = [];
        for (var i = 0; i < this.gridSize * this.gridSize; i++) {
          arr.push(i);
        }
        arr = shuffleArray(arr);
        var blockSize =
          (effectiveGridMax - effectiveGridMin) / this.gridSize / 1.5;

        // Set intern game state accordingly & draw the game state
        for (var i = 0; i < this.numOfPairs; i++) {
          var x1 = arr[2 * i] % this.gridSize;
          var x2 = arr[2 * i + 1] % this.gridSize;
          var y1 = Math.floor(arr[2 * i] / this.gridSize);
          var y2 = Math.floor(arr[2 * i + 1] / this.gridSize);

          this.internState[x1][y1] = 2 * i;
          this.internState[x2][y2] = 2 * i + 1;

          this.textnums.push(
            this.add
              .image(
                this.calcGridPos(x1),
                this.calcGridPos(y1),
                (i + 1).toString()
              )
              .setScale((blockSize * Math.sqrt(gameScale)) / pngSize)
          );
          this.textnums.push(
            this.add
              .image(
                this.calcGridPos(x2),
                this.calcGridPos(y2),
                (i + 1).toString()
              )
              .setScale((blockSize * Math.sqrt(gameScale)) / pngSize)
          );
        }
        this.started = false;
      }

      // Replaces the numbers with tiles
      start() {
        if (this.started) {
          return;
        }
        this.allow_clicking = false;
        this.started = true;
        var blockSize =
          (effectiveGridMax - effectiveGridMin) / this.gridSize / 1.5;
        for (var i = 0; i < this.gridSize; i++) {
          for (var j = 0; j < this.gridSize; j++) {
            if (this.internState[i][j] != -1) {
              this.rectangles.set(
                this.internState[i][j],
                this.add
                  .image(this.calcGridPos(i), this.calcGridPos(j), "cardback")
                  .setScale((blockSize * Math.sqrt(gameScale)) / pngSize)
                  .setInteractive()
                  .on("pointerover", this.pointerIn, this)
                  .on("pointerout", this.pointerOut, this)
              );
            }
          }
        }
        // Comment this to reveal numbers when clicking a square
        for (var i = 0; i < this.textnums.length; i++) {
          this.textnums[i].destroy();
        }
        this.time.delayedCall(
          1500,
          function () {
            this.shuffle();
          },
          [],
          this
        );
      }

      // Shuffles the tiles on the grid
      shuffle() {
        // Initialize new intern game state
        var newInternState = new Array(this.gridSize);
        for (var i = 0; i < this.gridSize; i++) {
          newInternState[i] = new Array(this.gridSize);
        }
        for (var i = 0; i < this.gridSize; i++) {
          for (var j = 0; j < this.gridSize; j++) {
            newInternState[i][j] = -1;
          }
        }

        // Randomly pick 2 * numOfPairs positions
        var arr = [];
        for (var i = 0; i < this.gridSize * this.gridSize; i++) {
          arr.push(i);
        }
        arr = shuffleArray(arr);

        for (var i = 0; i < this.numOfPairs; i++) {
          var x1 = arr[2 * i] % this.gridSize;
          var x2 = arr[2 * i + 1] % this.gridSize;
          var y1 = Math.floor(arr[2 * i] / this.gridSize);
          var y2 = Math.floor(arr[2 * i + 1] / this.gridSize);

          newInternState[x1][y1] = 2 * i;
          newInternState[x2][y2] = 2 * i + 1;
        }

        this.splines = new Array(2 * this.numOfPairs);
        for (var i = 0; i < this.splines.length; i++) {
          var points = [];
          for (var y = 0; y < this.gridSize; y++) {
            for (var x = 0; x < this.gridSize; x++) {
              if (newInternState[x][y] == i) {
                // Spline control points
                points.push(
                  new Phaser.Math.Vector2(
                    this.rectangles.get(i).x,
                    this.rectangles.get(i).y
                  )
                );

                for (var k = 0; k < numOfRandomControlPoints; k++) {
                  points.push(
                    new Phaser.Math.Vector2(
                      randRange(effectiveGridMin, effectiveGridMax),
                      randRange(effectiveGridMin, effectiveGridMax)
                    )
                  );
                }

                points.push(
                  new Phaser.Math.Vector2(
                    this.calcGridPos(x),
                    this.calcGridPos(y)
                  )
                );
              }
            }
          }
          this.splines[i] = new Phaser.Curves.Spline(points);
        }
        this.internState = newInternState;

        this.startTime = Date.now();
      }

      next() {
        this.pointerOut();
        this.allow_clicking = false;
        this.resetting = true;
        this.time.delayedCall(
          2000,
          function () {
            this.numOfPairs = Math.max(0, Math.min(8, this.numOfPairs + 1));
            this.score = this.setScore(
              Math.max(this.score, Math.min(5, this.numOfPairs - 2))
            );
            this.pairsDone = 0;
            this.state = 0;
            this.startTime = -1;
            this.firstRect = null;

            // Reset lists and destroy drawn elements
            for (var i = 0; i < this.textnums.length; i++)
              this.textnums[i].destroy();
            for (const [key, val] of this.rectangles) val.destroy();
            this.textnums = [];
            this.splines = [];
            this.rectangles = new Map();
            this.drawPairs();
            this.resetting = false;
          },
          [],
          this
        );
      }

      // Called regularly for a continuous game.
      update() {
        // If we are not animating right now we can instantly return
        if (this.startTime == -1) {
          return;
        }
        var currentTime = Date.now();

        // Animate the splines for duration time
        if (currentTime - this.startTime < duration) {
          for (var i = 0; i < this.splines.length; i++) {
            var out = new Phaser.Math.Vector2();
            this.splines[i].getPoint(
              (currentTime - this.startTime) / duration,
              out
            );

            this.rectangles.get(i).x = out.x;
            this.rectangles.get(i).y = out.y;
          }
        } else {
          this.startTime = -1;
          this.allow_clicking = true;
        }
      }

      pointerIn() {
        document.body.style.cursor = "pointer";
      }

      pointerOut() {
        document.body.style.cursor = "default";
      }

      onHover(pointer) {
        for (const [key, val] of this.rectangles) {
          if (this.firstRect != val) {
            if (
              Math.abs(val.x - pointer.x) < val.width / 2 &&
              Math.abs(val.y - pointer.y) < val.height / 2
            ) {
              document.body.style.cursor = "pointer";
              break;
            } else {
              document.body.style.cursor = "default";
            }
          }
        }
      }

      calcGridPos(v) {
        return (
          effectiveGridMin +
          (v + 0.5) * ((effectiveGridMax - effectiveGridMin) / this.gridSize)
        );
      }

      setScore(score) {
        const currentScore = localStorage.getItem("memory") || 0;
        if (score > currentScore) {
          localStorage.setItem("memory", score);
        }
        this.score = score;
        return score;
      }

      gridFromRect(r) {
        return Math.round(
          ((r - effectiveGridMin) * this.gridSize) /
            (effectiveGridMax - effectiveGridMin) -
            0.5
        );
      }
    }

    // Game config
    var configMem = {
      type: Phaser.AUTO,
      // Looks for a 'div' with 'id=<parent>' and places the game inside it
      parent: "memory-container",
      // Dimensions of the game
      width: boardSizeMem,
      height: boardSizeMem,
      // Which game to show, SceneMain is the class I implemented above
      scene: ScenePeg,
      backgroundColor: backgroundColorMem,
      // And more...
    };

    // Create the game, and that's it.
    this.game = new Phaser.Game(configMem);
  },
  methods: {
    reload() {
      this.game.scene.scenes[0].retry();
    },
  },
  computed: {
    highscore() {
      return localStorage.getItem("memory") || 0;
    },
  },
};
</script>
