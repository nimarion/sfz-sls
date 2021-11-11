<template>
  <div style="text-align: left">
    <div class="columns is-vcentered">
      <div class="column is-offset-1">
        <p>
          Beim Spiel Drips gewinnt derjenige, der den letzten Stein vom
          Spielfeld nimmt. Man darf aber immer nur Steine aus einer Spalte
          nehmen. Zunächst musst du entscheiden, ob du anfängst oder der
          Computer. Durch einen Klick auf einen Stein nimmst du ihn weg, dann
          spielt der Computer. Wenn mehrere Steine in einer Spalte liegen,
          kannst du einen, mehrere oder alle Steine wegnehmen. Klickst du auf
          den untersten Stein der Spalte, wird nur der weggenommen. Klickst du
          auf den obersten, werden alle weggenommen. Klickst du auf einen Stein
          dazwischen, werden dieser Stein und alle darunter weggenommen. Mit
          jedem Level kommen mehr Steine in den Spalten dazu. Für jeden
          gewonnenen Level erhältst du einen Punkt.
        </p>
        <br />
        <p class="title">Aktueller Highscore: {{ highscore }} von 5 Punkte!</p>
        <br />
        <b-button type="is-success" outlined @click="reload">
          Level neu laden
        </b-button>
      </div>
      <div class="column is-two-thirds">
        <div id="drips-container" />
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
    const boardSizeDrips = 600;

    // Color & sprite definitions
    const backgroundColorDrips = 0x444444;
    const currentColorDrips = 0xaa4444;
    const hoverRectColorDrips = 0xaa4444;
    const waitingColorDrips = 0x664444;
    const infoSepLineColorDrips = 0x000000;
    const circleColorDrips = 0x000000;
    const hoverColorDrips = 0x4444bb;

    // Game logic definitions
    const scale = boardSizeDrips / 600;
    const info_h = 75 * scale;
    const numLines = 10;
    const circleRadius = 15 * scale;

    function randRange(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }

    function shuffleArray(arr) {
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    }

    class SceneDrips extends Phaser.Scene {
      constructor() {
        super("SceneMain");
      }

      // Called once to load necessary assets etc.
      preload() {}

      reset() {
        this.level = 0;
        this.retry();
      }

      retry() {
        for (var i = 0; i < this.board_arr.length; i++) {
          for (var j = 0; j < this.board_arr[i].length; j++) {
            this.board_arr[i][j].destroy();
          }
        }
        this.notification_text.setText("");
        this.board_arr = [];

        this.levelSwapped = true;
        this.turn = 1;

        this.playerText.setText("Spieler start");
        this.aiText.setText("Computer startet");
        this.ai_turn.fillColor = waitingColorDrips;
        this.pl_turn.fillColor = waitingColorDrips;

        this.fillBoard();
        this.input.on("pointerdown", this.choose_start, this);
      }

      next() {
        this.score = this.setScore(
          Math.max(this.score, Math.min(this.level + 1, 5))
        );
        this.level = Math.min(this.level + 1, 4);

        this.retry();
      }

      fillBoard() {
        this.board_arr = Array(numLines);
        switch (this.level) {
          case 0:
            // All with only 1 piece
            var rdm = randRange(3, 7);
            for (var i = 0; i < numLines; i++) {
              var linePos = ((i + 1) * boardSizeDrips) / (numLines + 2);
              if (i < rdm) {
                this.board_arr[i] = [];
                for (var j = 0; j < 1; j++) {
                  var tmp = this.add
                    .circle(
                      linePos,
                      info_h * 1.5 + circleRadius * 2.5 * j,
                      circleRadius,
                      circleColorDrips
                    )
                    .setInteractive();
                  this.board_arr[i].push(tmp);
                }
              } else {
                this.board_arr[i] = [];
              }
            }
            break;
          case 1:
            // All with only 1 piece, one with two
            var rdm = randRange(6, numLines);
            var linePos = boardSizeDrips / (numLines + 2);
            this.board_arr[0] = [];
            for (var j = 0; j < 2; j++) {
              var tmp = this.add
                .circle(
                  linePos,
                  info_h * 1.5 + circleRadius * 2.5 * j,
                  circleRadius,
                  circleColorDrips
                )
                .setInteractive();
              this.board_arr[0].push(tmp);
            }
            for (var i = 1; i < numLines; i++) {
              var linePos = ((i + 1) * boardSizeDrips) / (numLines + 2);
              if (i < rdm) {
                this.board_arr[i] = [];
                for (var j = 0; j < 1; j++) {
                  var tmp = this.add
                    .circle(
                      linePos,
                      info_h * 1.5 + circleRadius * 2.5 * j,
                      circleRadius,
                      circleColorDrips
                    )
                    .setInteractive();
                  this.board_arr[i].push(tmp);
                }
              } else {
                this.board_arr[i] = [];
              }
            }
            break;
          case 2:
            // All randomly with up to 4 pieces
            var rdm = randRange(6, numLines);
            var more1 = randRange(0, rdm);
            var more2 = randRange(0, rdm);
            while (more2 == more1) {
              more2 = randRange(0, rdm);
            }
            for (var i = 0; i < numLines; i++) {
              var linePos = ((i + 1) * boardSizeDrips) / (numLines + 2);
              if (i < rdm) {
                this.board_arr[i] = [];
                if (i == more1 || i == more2) {
                  for (var j = 0; j < randRange(3, 5); j++) {
                    var tmp = this.add
                      .circle(
                        linePos,
                        info_h * 1.5 + circleRadius * 2.5 * j,
                        circleRadius,
                        circleColorDrips
                      )
                      .setInteractive();
                    this.board_arr[i].push(tmp);
                  }
                } else {
                  for (var j = 0; j < 1; j++) {
                    var tmp = this.add
                      .circle(
                        linePos,
                        info_h * 1.5 + circleRadius * 2.5 * j,
                        circleRadius,
                        circleColorDrips
                      )
                      .setInteractive();
                    this.board_arr[i].push(tmp);
                  }
                }
              } else {
                this.board_arr[i] = [];
              }
            }
            break;
          case 3:
            // All randomly with up to 8 pieces
            var rdm = randRange(6, numLines);
            var more1 = randRange(0, rdm);
            var more2 = randRange(0, rdm);
            var more3 = randRange(0, rdm);
            while (more2 == more1) {
              more2 = randRange(0, rdm);
            }
            while (more3 == more1 || more3 == more2) {
              more3 = randRange(0, rdm);
            }
            for (var i = 0; i < numLines; i++) {
              var linePos = ((i + 1) * boardSizeDrips) / (numLines + 2);
              if (i < rdm) {
                this.board_arr[i] = [];
                if (i == more1 || i == more2 || i == more3) {
                  for (var j = 0; j < randRange(2, 5); j++) {
                    var tmp = this.add
                      .circle(
                        linePos,
                        info_h * 1.5 + circleRadius * 2.5 * j,
                        circleRadius,
                        circleColorDrips
                      )
                      .setInteractive();
                    this.board_arr[i].push(tmp);
                  }
                } else {
                  for (var j = 0; j < 1; j++) {
                    var tmp = this.add
                      .circle(
                        linePos,
                        info_h * 1.5 + circleRadius * 2.5 * j,
                        circleRadius,
                        circleColorDrips
                      )
                      .setInteractive();
                    this.board_arr[i].push(tmp);
                  }
                }
              } else {
                this.board_arr[i] = [];
              }
            }
            break;
          default:
          case 4:
            // All randomly with up to 4 pieces
            var rdm = randRange(6, numLines);
            for (var i = 0; i < numLines; i++) {
              var linePos = ((i + 1) * boardSizeDrips) / (numLines + 2);
              if (i < rdm) {
                this.board_arr[i] = [];
                for (var j = 0; j < randRange(0, 5); j++) {
                  var tmp = this.add
                    .circle(
                      linePos,
                      info_h * 1.5 + circleRadius * 2.5 * j,
                      circleRadius,
                      circleColorDrips
                    )
                    .setInteractive();
                  this.board_arr[i].push(tmp);
                }
              } else {
                this.board_arr[i] = [];
              }
            }
            break;
        }
      }

      // Called once to initialize the game
      create() {
        this.board_arr = [];
        this.levelSwapped = true;
        this.level = 0;
        this.score = this.setScore(0);
        this.turn = 1; // 0 = player, else ai
        this.pl_turn = this.add
          .rectangle(0, 0, boardSizeDrips / 2, info_h, waitingColorDrips)
          .setOrigin(0);
        this.ai_turn = this.add
          .rectangle(0, 0, boardSizeDrips / 2, info_h, waitingColorDrips)
          .setOrigin(-1, 0);
        this.add
          .rectangle(
            boardSizeDrips / 2 - 2,
            0,
            4,
            info_h,
            infoSepLineColorDrips
          )
          .setDepth(1)
          .setOrigin(0);

        this.playerText = this.add
          .text(boardSizeDrips / 4, info_h / 2, "Spieler startet", {
            font: "32px Arial",
          })
          .setOrigin(0.5)
          .setDepth(1);
        this.aiText = this.add
          .text((boardSizeDrips * 3) / 4, info_h / 2, "Computer startet", {
            font: "32px Arial",
          })
          .setOrigin(0.5)
          .setDepth(1);

        this.fillBoard();
        this.notification_text = this.add
          .text(boardSizeDrips / 2, boardSizeDrips / 2, "", {
            font: "32px Arial",
          })
          .setOrigin(0.5)
          .setDepth(1);

        this.input.on("pointerdown", this.choose_start, this);
        this.input.on("pointerdown", this.onMouseDown, this);
        this.input.on("pointermove", this.onMouseMove, this);
      }

      choose_start(pointer, target) {
        if (pointer.y > info_h || !this.levelSwapped) {
          return;
        }
        this.levelSwapped = false;
        this.input.off("pointerdown", this.choose_start, this);
        this.playerText.setText("Player");
        this.aiText.setText("AI");
        if (pointer.x < boardSizeDrips / 2) {
          this.turn = 0;
          this.ai_turn.fillColor = waitingColorDrips;
          this.pl_turn.fillColor = currentColorDrips;
        } else {
          this.turn = 1;
          this.ai_turn.fillColor = currentColorDrips;
          this.pl_turn.fillColor = waitingColorDrips;
          this.time.delayedCall(3000, this.ai_move, [], this);
        }
      }

      switch_turn() {
        if (this.turn === 0) {
          // Switch from player to ai turn
          this.turn = 1;
          this.ai_turn.fillColor = currentColorDrips;
          this.pl_turn.fillColor = waitingColorDrips;
        } else {
          // Switch from ai to player turn
          this.turn = 0;
          this.ai_turn.fillColor = waitingColorDrips;
          this.pl_turn.fillColor = currentColorDrips;
        }
      }

      onMouseDown(pointer, targets) {
        if (this.turn !== 0) {
          return;
        }
        if (targets.length > 0) {
          this.move(targets[0]);
          this.time.delayedCall(3000, this.ai_move, [], this);
        }
      }

      onMouseMove(pointer, targets) {
        for (var i = 0; i < numLines; i++) {
          for (var j = 0; j < this.board_arr[i].length; j++) {
            this.board_arr[i][j].fillColor = circleColorDrips;
          }
        }
        if (this.levelSwapped) {
          if (pointer.y < info_h) {
            if (pointer.x < boardSizeDrips / 2) {
              this.ai_turn.fillColor = waitingColorDrips;
              this.pl_turn.fillColor = currentColorDrips;
            } else {
              this.pl_turn.fillColor = waitingColorDrips;
              this.ai_turn.fillColor = currentColorDrips;
            }
          } else {
            this.ai_turn.fillColor = waitingColorDrips;
            this.pl_turn.fillColor = waitingColorDrips;
          }
        }
        if (targets.length > 0) {
          var xy = this.getTargetIdx(targets[0]);
          for (var i = xy.y; i < this.board_arr[xy.x].length; i++) {
            this.board_arr[xy.x][i].fillColor = hoverColorDrips;
          }
        }
      }

      ai_move() {
        if (this.turn === 0 || this.levelSwapped) {
          // Players' turn
          return;
        }
        var xy = this.perfect_move();
        if (xy == null) {
          // If no perfect move possible, move at random
          var moves = this.getPossibleColMoves();
          // console.log(moves);
          var rdm = randRange(0, moves.length);
          xy = {
            x: moves[rdm],
            y: randRange(0, this.board_arr[moves[rdm]].length),
          };
        }
        this.move(this.board_arr[xy.x][xy.y]);
      }

      perfect_move() {
        var nimsum = 0;
        for (var i = 0; i < numLines; i++) {
          nimsum = nimsum ^ this.board_arr[i].length;
        }

        // In losing position currently. No perfect move available
        if (nimsum === 0) {
          return null;
        }

        for (var j = 4; j >= 0; j--) {
          var val = 0b1 << j;
          if ((nimsum & val) != 0) {
            var x_idx = -1;
            for (var i = 0; i < numLines; i++) {
              if ((this.board_arr[i].length & val) != 0) {
                x_idx = i;
                break;
              }
            }
            break;
          }
        }

        var row_bin = this.board_arr[x_idx].length;
        var num_of_pieces_to_remove = row_bin - (row_bin ^ nimsum);

        // console.log((row_bin ^ nimsum).toString(2));

        return {
          x: x_idx,
          y: this.board_arr[x_idx].length - num_of_pieces_to_remove,
        };
      }

      move(target) {
        var xy = this.getTargetIdx(target);
        for (var i = xy.y; i < this.board_arr[xy.x].length; i++) {
          this.board_arr[xy.x][i].destroy();
        }
        this.board_arr[xy.x].splice(xy.y, this.board_arr[xy.x].length - xy.y);
        if (this.getPossibleColMoves().length == 0) {
          this.ai_turn.fillColor = waitingColorDrips;
          this.pl_turn.fillColor = waitingColorDrips;
          if (this.turn === 0) {
            this.notification_text.setText("Gewonnen!");
            this.time.delayedCall(
              3000,
              function () {
                this.notification_text.setText("");
                if (this.levelSwapped) {
                  return;
                }
                this.next();
              },
              [],
              this
            );
          } else {
            this.notification_text.setText("Verloren!");
            this.time.delayedCall(
              3000,
              function () {
                this.notification_text.setText("");
                if (this.levelSwapped) {
                  return;
                }
                this.retry();
              },
              [],
              this
            );
          }
          // console.log("OVER")
        } else {
          this.switch_turn();
        }
      }

      getPossibleColMoves() {
        var arr = [];
        for (var i = 0; i < numLines; i++) {
          if (this.board_arr[i].length > 0) {
            arr.push(i);
          }
        }
        return arr;
      }

      getTargetIdx(target) {
        var x = target.x;
        var x_idx = -1;

        for (var i = 0; i < numLines; i++) {
          var lineSep = ((i + 1.5) * boardSizeDrips) / (numLines + 2);
          if (x < lineSep) {
            x_idx = i;
            break;
          }
        }

        var y = target.y;
        var y_idx = -1;

        for (var i = 0; i < this.board_arr[x_idx].length; i++) {
          var heightSep = info_h * 1.5 + circleRadius + circleRadius * 2.5 * i;
          if (y < heightSep) {
            y_idx = i;
            break;
          }
        }

        return { x: x_idx, y: y_idx };
      }

      setScore(score) {
        const currentScore = localStorage.getItem("drips") || 0;
        if (score > currentScore) {
          localStorage.setItem("drips", score);
        }
        this.score = score;
        return score;
      }
    }

    // Game config
    var configDrips = {
      type: Phaser.AUTO,
      // Looks for a 'div' with 'id=<parent>' and places the game inside it
      parent: "drips-container",
      // Dimensions of the game
      width: boardSizeDrips,
      height: boardSizeDrips,
      // Which game to show, SceneMain is the class I implemented above
      scene: SceneDrips,
      backgroundColor: backgroundColorDrips,
      // And more...
    };

    // Create the game, and that's it.
    this.game = new Phaser.Game(configDrips);
  },
  methods: {
    reload() {
      this.game.scene.scenes[0].retry();
    },
  },
  computed: {
    highscore() {
      return localStorage.getItem("drips") || 0;
    },
  },
};
</script>
