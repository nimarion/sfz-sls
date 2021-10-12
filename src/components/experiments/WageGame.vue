<template>
  <div style="text-align: left">
    <div class="columns is-vcentered">
      <div class="column is-offset-1">
        <p>
          Unter der Waage stehen 9 gleich aussehende Beutel mit Gold. Alle bis
          auf einen sind gleich schwer. Finde durch Wiegen heraus, welcher
          Goldbeutel schwerer ist als die anderen! Die Waage zeigt immer an,
          welche der Seiten schwerer ist. Findest du den schwereren Goldbeutel,
          legst du ihn in das graue Feld oben rechts.
        </p>
      </div>
      <div class="column is-two-thirds">
        <div id="Wiegeproblem" />
      </div>
    </div>
  </div>
</template>
<script>
import Phaser from "phaser";

export default {
  mounted() {
    const backgroundColor = 0x444444;
    const boardsizeWaage = 600;
    const bags = [
      "BagA",
      "BagB",
      "BagC",
      "BagD",
      "BagE",
      "BagF",
      "BagG",
      "BagH",
      "BagI",
    ];

    // Returns a random integer in the interval [min,max)
    function randRange(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }

    class SceneWaage extends Phaser.Scene {
      constructor() {
        super("SceneMain");
      }

      // Called once to load necessary assets etc.
      preload() {
        this.load.image("BagA", require("~/assets/experiments/A.svg"));
        this.load.image("BagB", require("~/assets/experiments/B.svg"));
        this.load.image("BagC", require("~/assets/experiments/C.svg"));
        this.load.image("BagD", require("~/assets/experiments/D.svg"));
        this.load.image("BagE", require("~/assets/experiments/E.svg"));
        this.load.image("BagF", require("~/assets/experiments/F.svg"));
        this.load.image("BagG", require("~/assets/experiments/G.svg"));
        this.load.image("BagH", require("~/assets/experiments/H.svg"));
        this.load.image("BagI", require("~/assets/experiments/I.svg"));
        this.load.image("wiegen", require("~/assets/experiments/jetzt1.svg"));
        this.load.image(
          "wiegenPressed",
          require("~/assets/experiments/jetzt2.svg")
        );
        this.load.image("waage", require("~/assets/experiments/Waage.svg"));
        this.load.image("down", require("~/assets/experiments/down.svg"));
        this.load.image("up", require("~/assets/experiments/up.svg"));
        this.load.image("equal", require("~/assets/experiments/equal.svg"));
      }

      // Called once to initialize the game
      create() {
        this.HighScore = 0;
        this.score = 0;
        this.checked = false;
        this.checksLeft = 15;
        this.sacklist = [];
        this.goalText = null;
        this.add.rectangle(500, 50, 300, 100, 0xaaaaaa);
        this.different = 0;
        this.add.image(0, 0, "waage").setOrigin(0, 0);
        this.createSacks();
        this.leftWeight = null;
        this.rightWeight = null;
        this.drawWeight("eq");
        this.weigh = null;
        this.add.image(300, 400, "wiegen");
        this.weighsLeftText = this.add.text(
          20,
          40,
          "Du darfst noch " + this.checksLeft + " mal wiegen.",
          { font: "24px Arial" }
        );
        this.input.on("pointerdown", this.startDrag, this);
      }

      createSacks() {
        this.sacklist.forEach((element) => {
          element.destroy();
        });
        this.sacklist = [];
        this.different = randRange(0, 9);
        for (let i = 0; i < bags.length; i++) {
          this.sacklist.push(
            this.add
              .image(40 + 65 * i, 500, bags[i])
              .setScale(0.11)
              .setInteractive()
          );
        }
      }

      drawWeight(str) {
        if (this.leftWeight != null) {
          this.leftWeight.destroy();
        }
        if (this.rightWeight != null) {
          this.rightWeight.destroy();
        }

        switch (str) {
          case "eq":
            this.leftWeight = this.add.image(155, 400, "equal");
            this.rightWeight = this.add.image(455, 400, "equal");
            break;
          case "left":
            this.leftWeight = this.add.image(155, 400, "down");
            this.rightWeight = this.add.image(455, 400, "up");
            break;
          case "right":
            this.leftWeight = this.add.image(155, 400, "up");
            this.rightWeight = this.add.image(455, 400, "down");
            break;
          default:
            break;
        }
      }

      unpress() {
        this.testBalance();
        if (this.weigh != null) {
          this.weigh.destroy();
          this.weigh = null;
          this.input.off("pointerup", this.unpress, this);
          this.input.on("pointerdown", this.startDrag, this);
        }
      }

      startDrag(pointer, targets) {
        if (
          pointer.x > 200 &&
          pointer.x < 400 &&
          pointer.y > 375 &&
          pointer.y < 425 &&
          this.checksLeft > 0
        ) {
          this.input.off("pointerdown", this.startDrag, this);
          if (this.weigh == null) {
            this.weigh = this.add.image(300, 400, "wiegenPressed");
          }
          if (this.leftWeight != null) {
            this.leftWeight.destroy();
          }
          if (this.rightWeight != null) {
            this.rightWeight.destroy();
          }
          this.time.delayedCall(
            2000,
            function () {
              this.unpress();
            },
            [],
            this
          );
          return;
        }
        // Remember old position to place the piece back to where it was, in case the user's move is illegal
        // undefined check here and later only means, that dragging is only legal if there is a target to be dragged, i.e. a piece is below the cursor
        if (typeof targets[0] !== "undefined") {
          this.input.off("pointerdown", this.startDrag, this);
          // Choose the first possible target to drag
          this.dragObj = targets[0];
          this.oldX = this.dragObj.x;
          this.oldY = this.dragObj.y;
          // Remove piece from piece collection, so it is not counting as set piece anymore -> not occupying anything
          this.sacklist.splice(this.sacklist.indexOf(this.dragObj), 1);
          this.input.on("pointermove", this.doDrag, this);
          this.input.on("pointerup", this.stopDrag, this);
        }
      }

      doDrag(pointer) {
        if (this.dragObj != null) {
          this.dragObj.x = pointer.x;
          this.dragObj.y = pointer.y;
        }
      }

      stopDrag(pointer, targets) {
        // Called on mouse up. Clips the dragged object to the grid and enables dragging for another object again.
        // Also adds the piece back to the piece collection
        if (this.clipToGrid(this.dragObj)) {
          this.sacklist.push(this.dragObj);

          this.dragObj = null;
          // activates pointerdown control, deactivates pointermove and pointerup control.
          this.input.on("pointerdown", this.startDrag, this);
          this.input.off("pointermove", this.doDrag, this);
          this.input.off("pointerup", this.stopDrag, this);
        }
      }

      isOccupied(x, y) {
        let occ = false;
        this.sacklist.forEach((element) => {
          occ = occ || element.getBounds().contains(x, y);
        });
        return occ;
      }

      checkSack(obj) {
        this.input.off("pointermove", this.doDrag, this);
        this.input.off("pointerup", this.stopDrag, this);
        while (this.goalText != null) {
          continue;
        }
        if (obj.texture.key === bags[this.different]) {
          this.score = Math.min(5, this.score + 1);
          this.goalText = this.add.text(
            boardsizeWaage / 2 - 24 - 48,
            boardsizeWaage / 2 - 24 - 12 - 100,
            "Richtig!",
            { font: "48px Arial" }
          );
        } else {
          this.goalText = this.add.text(
            boardsizeWaage / 2 - 24 - 48,
            boardsizeWaage / 2 - 24 - 12 - 100,
            "Falsch!",
            { font: "48px Arial" }
          );
        }
        this.HighScore = Math.max(this.HighScore, this.score);
        obj.destroy();
        this.resetSacks();
        this.time.delayedCall(
          3000,
          function () {
            this.goalText.destroy();
            this.goalText = null;
            this.input.on("pointerdown", this.startDrag, this);
          },
          [],
          this
        );
      }

      clipToGrid(obj) {
        if (obj == null) {
          return false;
        }
        if (obj.y < 100 && obj.x > 350 && this.checked) {
          this.checkSack(obj);
          return false;
        }
        if (obj.y < 300) {
          obj.y = 187;
          if (obj.x < 85) {
            obj.x = 52;
          } else if (obj.x < 151) {
            obj.x = 118;
          } else if (obj.x < 217) {
            obj.x = 184;
          } else if (obj.x < 300) {
            obj.x = 250;
          } else if (obj.x < 383) {
            obj.x = 350;
          } else if (obj.x < 449) {
            obj.x = 416;
          } else if (obj.x < 515) {
            obj.x = 482;
          } else {
            obj.x = 548;
          }
          if (this.isOccupied(obj.x, obj.y)) {
            obj.x = this.oldX;
            obj.y = this.oldY;
          }
        } else if (obj.y < 450) {
          obj.x = this.oldX;
          obj.y = this.oldY;
        }
        return true;
      }

      testBalance() {
        if (this.checksLeft <= 0) {
          return;
        }
        this.checked = true;
        this.checksLeft--;
        let left = 0;
        let right = 0;
        this.sacklist.forEach((element) => {
          if (element.y < 300) {
            let val = 1;
            if (element.texture.key === bags[this.different]) {
              val = 3;
            }
            if (element.x < 300) {
              left += val;
            } else {
              right += val;
            }
          }
        });
        if (left > right) {
          this.drawWeight("left");
        } else if (right > left) {
          this.drawWeight("right");
        } else {
          this.drawWeight("eq");
        }
        if (this.weighsLeftText != null) {
          this.weighsLeftText.destroy();
        }
        this.weighsLeftText = this.add.text(
          20,
          40,
          "Du darfst noch " + this.checksLeft + " mal wiegen.",
          { font: "24px Arial" }
        );
      }

      resetSacks() {
        this.createSacks();
        this.drawWeight("eq");
        this.checked = false;
      }

      reset() {
        this.score = 0;
        this.checksLeft = 15;
        if (this.weighsLeftText != null) {
          this.weighsLeftText.destroy();
        }
        this.weighsLeftText = this.add.text(
          20,
          40,
          "Du darfst noch " + this.checksLeft + " mal wiegen.",
          { font: "24px Arial" }
        );
        this.resetSacks();
      }
    }

    // Game config
    const config = {
      type: Phaser.AUTO,
      // Looks for a 'div' with 'id=<parent>' and places the game inside it
      parent: "Wiegeproblem",
      // Dimensions of the game
      width: boardsizeWaage,
      height: boardsizeWaage,
      // Which game to show, SceneMain is the class I implemented above
      scene: SceneWaage,
      backgroundColor,
      // And more...
    };

    // Create the game, and that's it.
    new Phaser.Game(config);
  },
};
</script>
