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
          Level neuladen
        </b-button>
      </div>
      <div class="column is-two-thirds">
        <div id="salat-container" />
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
    const boardSizeSalat = 600;

    // Styling
    const gridColorFill = 0x444444;
    const selectedColor = 0xaa2222;
    const gridColorStrokes = 0xdddddd;

    function shuffleArray(arr) {
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    }

    class SceneSalat extends Phaser.Scene {
      constructor() {
        super("SceneMain");
      }
      // Called once to load necessary assets etc.
      preload() {}

      clear() {
        this.selected_xy = null;
        this.correct_text.setText("");
        if (this.selected_rect != null) this.selected_rect.destroy();
        this.selected_rect = null;
        if (this.grid != null) this.grid.destroy();
        this.grid = null;
        for (var i = 0; i < this.labels.length; i++) this.labels[i].destroy();
        this.labels = [];
      }

      reset(onlyOneLevel = false, retry = false) {
        if (this.resetting) {
          return;
        }
        this.clear();
        this.solved = false;
        if (!retry) {
          if (onlyOneLevel) {
            this.level = Math.max(0, this.level - 1);
          } else {
            this.level = 0;
          }
        }
        this.setLevelParams();
        this.makegrid();
        this.allow_clicking = true;
        if (!this.time_running) {
          this.time.delayedCall(1000, this.timeCounter, [], this);
          this.time_running = true;
        }
      }

      retry() {
        this.reset(true, true);
      }

      next() {
        this.score = Math.max(this.score, Math.min(5, this.level + 1));
        this.level = Math.min(5, this.level + 1);
        this.solved = false;

        this.setLevelParams();
        this.makegrid();

        this.allow_clicking = true;
        if (!this.time_running) {
          this.time.delayedCall(1000, this.timeCounter, [], this);
          this.time_running = true;
        }
      }

      timeCounter() {
        if (this.solved) {
          this.time_running = false;
          return;
        }
        this.time_left = this.time_left - 1000;
        if (this.time_left <= 5000) {
          this.time_text.setText(this.time_left / 1000).setColor("red");
        } else {
          this.time_text.setText(this.time_left / 1000).setColor("white");
        }

        if (this.time_left <= 0) {
          this.time_running = false;
          this.resetting = true;
          this.clear();
          this.solved = true;
          this.allow_clicking = false;
          this.correct_text.setText("Zeit abgelaufen!");
          this.time.delayedCall(
            3000,
            function () {
              this.correct_text.setText("");
              this.resetting = false;
              this.retry();
            },
            [],
            this
          );
        } else {
          this.time.delayedCall(1000, this.timeCounter, [], this);
          this.time_running = true;
        }
      }

      // Called once to initialize the game
      create() {
        this.allow_clicking = true;
        this.resetting = true;
        this.time_running = false;
        this.selected_rect = null;
        this.time_text = this.add
          .text(boardSizeSalat, 0, 0, { font: "32px Arial" })
          .setOrigin(1, 0)
          .setDepth(15);
        this.correct_text = this.add
          .text(boardSizeSalat / 2, boardSizeSalat / 2, "", {
            font: "48px Arial",
          })
          .setOrigin(0.5, 0.5);
        this.labels = [];
        this.score = 0;
        this.level = 0;

        this.setLevelParams();
        this.makegrid();

        this.input.on("pointerdown", this.onMouseDown, this);
        this.time.delayedCall(1000, this.timeCounter, [], this);
        this.time_running = true;
        this.resetting = false;
      }

      setLevelParams() {
        switch (this.level) {
          case 0:
            this.cols = 4;
            this.rows = 4;
            this.time_left = 60000;
            this.time_text.setText("\u221e");
            this.symbols = ["p", "q", "d", "b", "u", "v", "m", "n", "l", "i"];
            break;
          case 1:
            this.cols = 4;
            this.rows = 4;
            this.time_left = 40000;
            this.symbols = ["p", "q", "d", "b", "u", "v", "m", "n", "l", "i"];
            break;
          case 2:
            this.cols = 4;
            this.rows = 4;
            this.time_left = 20000;
            this.symbols = [
              "p",
              "q",
              "d",
              "b",
              "u",
              "v",
              "m",
              "n",
              "l",
              "i",
              "k",
              "h",
              "j",
              "a",
              "y",
              "x",
              "f",
              "ö",
              "ä",
              "ü",
            ];
            break;
          case 3:
            this.cols = 6;
            this.rows = 6;
            this.time_left = 120000;
            this.symbols = [
              "p",
              "q",
              "d",
              "b",
              "u",
              "v",
              "m",
              "n",
              "l",
              "i",
              "k",
              "h",
              "j",
              "a",
              "y",
              "x",
              "f",
              "ö",
              "ä",
              "ü",
            ];
            break;
          case 4:
          default:
            this.cols = 6;
            this.rows = 6;
            this.time_left = 60000;
            this.symbols = [
              "\u30aa",
              "\u30e9",
              "\u30f2",
              "\u30ea",
              "\u30eb",
              "\u30ef",
              "\u30d5",
              "\u30e1",
              "\u30c1",
              "\u30c6",
              "\u30cc",
              "\u30b9",
              "\u30a2",
              "\u30e8",
              "\u30ed",
              "\u30a4",
              "\u30a8",
              "\u30af",
              "\u30e0",
            ];
            break;
        }
        this.time_text.setText(this.time_left / 1000).setColor("white");
      }

      gen_pairs() {
        var pairs = [];
        for (var i = 0; i < this.cols; i++) {
          for (var j = 0; j < this.rows; j++) {
            pairs.push([i, j]);
          }
        }
        shuffleArray(pairs);
        return pairs;
      }

      makegrid() {
        this.grid = this.add
          .grid(
            0,
            0,
            boardSizeSalat,
            boardSizeSalat,
            boardSizeSalat / this.cols,
            boardSizeSalat / this.rows,
            gridColorFill,
            0,
            gridColorStrokes,
            1
          )
          .setOrigin(0, 0)
          .setDepth(4);
        this.labels = Array(this.rows * this.cols);
        this.nonpair = Array(2);

        var pairs = this.gen_pairs();
        this.symbols = shuffleArray(this.symbols);

        // The non-pair
        var el = pairs[0];
        this.nonpair[0] = this.symbols[0];
        this.labels[el[1] * this.cols + el[0]] = this.add
          .text(
            (el[0] + 0.5) * (boardSizeSalat / this.cols),
            (el[1] + 0.5) * (boardSizeSalat / this.cols),
            this.nonpair[0],
            { font: "32px Arial" }
          )
          .setOrigin(0.5)
          .setDepth(5);

        el = pairs[1];
        this.nonpair[1] = this.symbols[1];
        this.labels[el[1] * this.cols + el[0]] = this.add
          .text(
            (el[0] + 0.5) * (boardSizeSalat / this.cols),
            (el[1] + 0.5) * (boardSizeSalat / this.cols),
            this.nonpair[1],
            { font: "32px Arial" }
          )
          .setOrigin(0.5)
          .setDepth(5);

        for (var i = 2; i < pairs.length; i++) {
          el = pairs[i];
          var symbol = this.symbols[Math.floor(i / 2) + 1];
          this.labels[el[1] * this.cols + el[0]] = this.add
            .text(
              (el[0] + 0.5) * (boardSizeSalat / this.cols),
              (el[1] + 0.5) * (boardSizeSalat / this.rows),
              symbol,
              { font: "32px Arial" }
            )
            .setOrigin(0.5)
            .setDepth(5);
        }
      }

      onMouseDown(pointer, target) {
        if (!this.allow_clicking) {
          return;
        }
        var x_y = this.clickToIdx(pointer.x, pointer.y);
        // console.log(this.getLabelByIdx(x_y.x, x_y.y));
        // console.log(this.score);

        if (this.selected_rect == null) {
          // Choosing first rect
          this.selected_xy = x_y;
          this.selected_rect = this.add.rectangle(
            (x_y.x + 0.5) * (boardSizeSalat / this.cols),
            (x_y.y + 0.5) * (boardSizeSalat / this.rows),
            boardSizeSalat / this.rows,
            boardSizeSalat / this.rows,
            selectedColor
          );
        } else if (this.selected_xy.x == x_y.x && this.selected_xy.y == x_y.y) {
          // If selected same rect again, just remove it
          this.selected_xy = null;
          this.selected_rect.destroy();
          this.selected_rect = null;
        } else {
          this.allow_clicking = false;
          // Choosing second rect
          var lab1 = this.getLabelByIdx(x_y.x, x_y.y);
          var lab2 = this.getLabelByIdx(this.selected_xy.x, this.selected_xy.y);

          if (
            (lab1 == this.nonpair[0] && lab2 == this.nonpair[1]) ||
            (lab1 == this.nonpair[1] && lab2 == this.nonpair[0])
          ) {
            // Wrong pair correctly chosen
            this.clear();
            this.resetting = true;
            this.solved = true;
            this.correct_text.setText("Richtig!");
            this.time.delayedCall(
              3000,
              function () {
                this.correct_text.setText("");
                this.resetting = false;
                this.next();
              },
              [],
              this
            );
          } else {
            // Wrong selection, restart from zero
            this.clear();
            this.resetting = true;
            this.solved = true;
            this.correct_text.setText("Falsch!");
            this.time.delayedCall(
              3000,
              function () {
                this.correct_text.setText("");
                this.resetting = false;
                this.retry();
              },
              [],
              this
            );
          }
        }
      }

      getLabelByIdx(x, y) {
        return this.labels[y * this.cols + x].text;
      }

      clickToIdx(x, y) {
        // Calc nearest grid position
        var xx = Math.floor(x / (boardSizeSalat / this.cols));
        var yy = Math.floor(y / (boardSizeSalat / this.rows));

        return { x: xx, y: yy };
      }

      tryLevel(n) {
        this.allow_clicking = false;
        this.clear();
        this.level = n - 2;
        this.next();
      }

      // Called regularly for a continuous game.
      // Not necessary for Peg Solitaire, since we're only acting once the user acts.
      update() {}
    }

    // Game config
    var configSalat = {
      type: Phaser.AUTO,
      // Looks for a 'div' with 'id=<parent>' and places the game inside it
      parent: "salat-container",
      // Dimensions of the game
      width: boardSizeSalat,
      height: boardSizeSalat,
      // Which game to show, SceneMain is the class I implemented above
      scene: SceneSalat,
      backgroundColor: gridColorFill,
      // And more...
    };

    // Create the game, and that's it.
    this.game = new Phaser.Game(configSalat);
  },
  methods: {
    reload() {
      this.game.scene.scenes[0].retry();
    },
  },
  computed: {
    highscore() {
      return 0;
    },
  },
};
</script>
