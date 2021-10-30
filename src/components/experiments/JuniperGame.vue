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
        <br />
        <p class="title">Aktueller Highscore: {{ highscore }} von 5 Punkte!</p>
        <br />
        <b-button type="is-success" outlined @click="reload">
          Level neu laden
        </b-button>
      </div>
      <div class="column is-two-thirds">
        <div id="juniper-container" />
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
    // Use these parameters for scaling the board
    const boardSizeJuniper = 600; // Board size

    const backgroundColorJuniper = 0x444444; // Background Color
    const cardColor = 0x00aa00;
    const previousColor = [0xaa0000, 0x0000aa];

    const scaling = boardSizeJuniper / 600;

    // Returns a random integer in the interval [min,max)
    function randRange(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }

    class SceneJuniper extends Phaser.Scene {
      constructor() {
        super("SceneMain");
      }

      // Resets/ Initializes the game
      reset() {
        if (this.resetting) {
          return;
        }
        for (const [key, val] of this.rectangles) val.destroy();
        for (var i = 0; i < this.textnums.length; i++)
          this.textnums[i].destroy();

        this.winText.setText("");
        this.rectangles = new Map();

        this.player = 0;
        this.numbers = [];
        this.textnums = [];
        this.score = this.setScore(0);
        this.maxSqrtNum = 3;
        this.lastNumber = -1;

        this.drawBoard();
        this.allow_clicking = true;
      }

      retry() {
        if (this.resetting) {
          return;
        }
        for (const [key, val] of this.rectangles) val.destroy();
        for (var i = 0; i < this.textnums.length; i++)
          this.textnums[i].destroy();

        this.winText.setText("");
        this.rectangles = new Map();

        this.player = 0;
        this.numbers = [];
        this.textnums = [];
        this.lastNumber = -1;

        this.drawBoard();
        this.allow_clicking = true;
      }

      drawBoard() {
        var spacing = boardSizeJuniper / (this.maxSqrtNum + 1);

        for (var i = 1; i <= this.maxSqrtNum; i++) {
          for (var j = 1; j <= this.maxSqrtNum; j++) {
            this.rectangles.set(
              i * this.maxSqrtNum + j,
              this.add
                .rectangle(
                  j * spacing,
                  i * spacing,
                  0.8 * spacing,
                  0.8 * spacing,
                  cardColor
                )
                .setStrokeStyle(2, 0x000000)
                .setInteractive()
                .on("pointerover", this.pointerIn, this)
                .on("pointerout", this.pointerOut, this)
            );

            var s = this.add
              .text(
                j * spacing,
                i * spacing,
                (i - 1) * this.maxSqrtNum + (j - 1) + 1,
                { fontSize: Math.floor(spacing / 2.5) + "px" }
              )
              .setOrigin(0.5);
            this.textnums.push(s);
          }
        }

        for (var i = 1; i <= this.maxSqrtNum * this.maxSqrtNum; i++) {
          this.numbers.push(i);
        }
      }

      onMouseDown(pointer, targets) {
        if (targets.length == 0 || !this.allow_clicking) {
          return;
        }
        this.allow_clicking = false;
        var k = -1;
        for (const [key, val] of this.rectangles) {
          if (val == targets[0]) {
            k = key - this.maxSqrtNum;
            break;
          }
        }

        var valid = false;
        if (this.lastNumber == -1 && k % 2 == 0) {
          valid = true;
          this.lastNumber = k;
          this.lastrect = targets[0];
          targets[0].fillColor = previousColor[this.player];
          this.numbers.splice(this.numbers.indexOf(k), 1);
          this.player = (this.player + 1) % 2;
        } else if (
          this.lastNumber != -1 &&
          k != this.lastNumber &&
          (k % this.lastNumber == 0 || this.lastNumber % k == 0)
        ) {
          valid = true;
          this.textnums[this.lastNumber - 1].destroy();
          this.lastrect.destroy();
          this.lastrect = targets[0];
          this.lastNumber = k;
          targets[0].fillColor = previousColor[this.player];
          this.numbers.splice(this.numbers.indexOf(k), 1);
          this.player = (this.player + 1) % 2;
        }

        var possibleMoves = this.getPossibleMoves();
        // console.log(possibleMoves);
        if (possibleMoves && possibleMoves.length == 0) {
          // console.log("Player " + (this.player + 1) + " won.");
          this.next();
          return;
        } else if (valid) {
          var rdmNum;
          switch (this.maxSqrtNum) {
            case 3:
              rdmNum = possibleMoves[randRange(0, possibleMoves.length)];
              break;
            case 4:
              if (possibleMoves.length > 1) {
                rdmNum = possibleMoves[1];
              } else {
                rdmNum = possibleMoves[0];
              }
              break;
            case 5:
              rdmNum = possibleMoves[possibleMoves.length - 1];
              break;
            case 6:
              rdmNum = possibleMoves[possibleMoves.length - 1];
              break;
            case 10:
              rdmNum = possibleMoves[possibleMoves.length - 1];
              var filtered = [58, 93, 57, 95, 65, 91, 77, 55].filter((value) =>
                possibleMoves.includes(value)
              );
              if (filtered && filtered.length > 0) {
                rdmNum = filtered[0];
              }
          }
          if (this.lastNumber == 1) {
            rdmNum = possibleMoves[possibleMoves.length - 1];
            for (var i = 0; i < possibleMoves.length; i++) {
              var prime = true;
              for (var j = 2; j <= possibleMoves[i] - 1; j++) {
                if (possibleMoves[i] % j == 0) {
                  prime = false;
                  break;
                }
              }
              if (prime) {
                rdmNum = possibleMoves[i];
              }
            }
          }
          this.time.delayedCall(
            2000,
            function () {
              if (this.player == 0) {
                return;
              }
              this.textnums[this.lastNumber - 1].destroy();
              this.lastrect.destroy();
              this.lastrect = this.rectangles.get(rdmNum + this.maxSqrtNum);
              this.lastNumber = rdmNum;
              this.lastrect.fillColor = previousColor[this.player];
              this.numbers.splice(this.numbers.indexOf(rdmNum), 1);
              this.player = (this.player + 1) % 2;
              if (this.getPossibleMoves() == 0) {
                // console.log("Player " + (this.player + 1) + " won.");
                this.winText.setText(
                  "Leider verloren!\nProbier es noch einmal!"
                );
                this.resetting = true;
                this.time.delayedCall(
                  5000,
                  function () {
                    this.winText.setText("");
                    this.resetting = false;
                    this.retry();
                    this.allow_clicking = true;
                  },
                  [],
                  this
                );
              } else {
                this.allow_clicking = true;
              }
            },
            [],
            this
          );
        } else {
          this.allow_clicking = true;
        }
      }

      // TODO: RETRY/RESET DURING AI TURN THROWS ERROR

      next() {
        if (this.maxSqrtNum == 10) {
          this.winText.setText(
            "Glückwunsch! Du hast den letzten Level geschafft!\nDu kannst es jetzt gerne nochmal probieren."
          );
        } else {
          this.winText.setText(
            "Du hast gewonnen!\nGleich geht's zum nächsten Level!"
          );
        }
        this.resetting = true;
        this.time.delayedCall(
          5000,
          function () {
            for (const [key, val] of this.rectangles) val.destroy();
            for (var i = 0; i < this.textnums.length; i++)
              this.textnums[i].destroy();

            this.rectangles = new Map();

            this.player = 0;
            this.numbers = [];
            this.textnums = [];
            switch (this.maxSqrtNum) {
              case 3:
                this.maxSqrtNum = 4;
                this.score = this.setScore(Math.max(1, this.score));
                break;
              case 4:
                this.maxSqrtNum = 5;
                this.score = this.setScore(Math.max(2, this.score));
                break;
              case 5:
                this.maxSqrtNum = 6;
                this.score = this.setScore(Math.max(3, this.score));
                break;
              case 6:
                this.maxSqrtNum = 10;
                this.score = this.setScore(Math.max(4, this.score));
                break;
              case 10:
                this.score = this.setScore(Math.max(5, this.score));
                break;
            }
            this.lastNumber = -1;

            this.winText.setText("");
            this.drawBoard();
            this.allow_clicking = true;
            this.resetting = false;
          },
          [],
          this
        );
      }

      preload() {}
      // Called once to initialize the game
      create() {
        this.score = this.setScore(0);
        this.resetting = true;
        this.allow_clicking = false;
        this.textnums = [];
        this.rectangles = new Map();
        this.winText = this.add
          .text(boardSizeJuniper / 2, scaling * 30, "", {
            fontSize: scaling * 20 + "px",
            align: "center",
          })
          .setOrigin(0.5);
        this.resetting = false;
        this.reset();
        this.input.on("pointerdown", this.onMouseDown, this);
      }
      // Called regularly for a continuous game.
      // Not necessary for "Beat the Chimp", since we're only acting once the user acts.
      update() {}

      getPossibleMoves() {
        var possibleMoves = [];
        for (var i = 0; i < this.numbers.length; i++) {
          if (
            this.numbers[i] != this.lastNumber &&
            (this.numbers[i] % this.lastNumber == 0 ||
              this.lastNumber % this.numbers[i] == 0)
          ) {
            possibleMoves.push(this.numbers[i]);
          }
        }
        return possibleMoves;
      }

      pointerIn() {
        document.body.style.cursor = "pointer";
      }

      pointerOut() {
        document.body.style.cursor = "default";
      }

      setScore(score) {
        localStorage.setItem("juniper", score);
        this.score = score;
        return score;
      }
    }

    // Game config
    var configJuniper = {
      type: Phaser.AUTO,
      // Looks for a 'div' with 'id=<parent>' and places the game inside it
      parent: "juniper-container",
      // Dimensions of the game
      width: boardSizeJuniper,
      height: boardSizeJuniper,
      // Which game to show, SceneMain is the class I implemented above
      scene: SceneJuniper,
      backgroundColor: backgroundColorJuniper,
      // And more...
    };

    // Create the game, and that's it.
    this.game = new Phaser.Game(configJuniper);
  },
  methods: {
    reload() {
      this.game.scene.scenes[0].retry();
    },
  },
  computed: {
    highscore() {
      return localStorage.getItem("juniper");
    },
  },
};
</script>
