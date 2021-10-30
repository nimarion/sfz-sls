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
    const boardSizeInt = 600;
    const scaleFactor = boardSizeInt / 600;

    // Color & sprite definitions
    const backgroundColorInt = 0x444444; // Background color
    const outlineGrid = 0xdd3333;
    const gridBlockSize = 30 * scaleFactor;
    const pointRadius = 5;
    const pointColor = 0x00ff00;
    const hoverColor = 0x0000ff;
    const lineColor = 0x000000;
    const hoverLineColor = 0x0aa000;
    const centerColor = 0xffffff;
    const intersectionColor = 0x000aa0;

    // Game logic definitions
    const drawIntersectionCircles = true;
    const shapesArray = [
      [
        [175 * scaleFactor, 125 * scaleFactor],
        [425 * scaleFactor, 125 * scaleFactor],
        [425 * scaleFactor, 200 * scaleFactor],
        [275 * scaleFactor, 200 * scaleFactor],
        [275 * scaleFactor, 250 * scaleFactor],
        [425 * scaleFactor, 250 * scaleFactor],
        [425 * scaleFactor, 325 * scaleFactor],
        [275 * scaleFactor, 325 * scaleFactor],
        [275 * scaleFactor, 475 * scaleFactor],
        [175 * scaleFactor, 475 * scaleFactor],
      ], // F
      [
        [200 * scaleFactor, 140 * scaleFactor],
        [310 * scaleFactor, 140 * scaleFactor],
        [310 * scaleFactor, 400 * scaleFactor],
        [410 * scaleFactor, 400 * scaleFactor],
        [410 * scaleFactor, 500 * scaleFactor],
        [200 * scaleFactor, 500 * scaleFactor],
      ], // L
      [
        [165 * scaleFactor, 160 * scaleFactor],
        [465 * scaleFactor, 160 * scaleFactor],
        [465 * scaleFactor, 260 * scaleFactor],
        [365 * scaleFactor, 260 * scaleFactor],
        [365 * scaleFactor, 460 * scaleFactor],
        [265 * scaleFactor, 460 * scaleFactor],
        [265 * scaleFactor, 260 * scaleFactor],
        [165 * scaleFactor, 260 * scaleFactor],
      ], // T
      [
        [165 * scaleFactor, 160 * scaleFactor],
        [465 * scaleFactor, 160 * scaleFactor],
        [465 * scaleFactor, 260 * scaleFactor],
        [265 * scaleFactor, 260 * scaleFactor],
        [265 * scaleFactor, 360 * scaleFactor],
        [465 * scaleFactor, 360 * scaleFactor],
        [465 * scaleFactor, 460 * scaleFactor],
        [165 * scaleFactor, 460 * scaleFactor],
      ], // C
      [
        [165 * scaleFactor, 160 * scaleFactor],
        [465 * scaleFactor, 160 * scaleFactor],
        [465 * scaleFactor, 260 * scaleFactor],
        [265 * scaleFactor, 260 * scaleFactor],
        [265 * scaleFactor, 380 * scaleFactor],
        [365 * scaleFactor, 380 * scaleFactor],
        [395 * scaleFactor, 330 * scaleFactor],
        [315 * scaleFactor, 330 * scaleFactor],
        [315 * scaleFactor, 290 * scaleFactor],
        [465 * scaleFactor, 290 * scaleFactor],
        [465 * scaleFactor, 460 * scaleFactor],
        [165 * scaleFactor, 460 * scaleFactor],
      ], // G
      [
        [165 * scaleFactor, 160 * scaleFactor],
        [315 * scaleFactor, 160 * scaleFactor],
        [315 * scaleFactor, 260 * scaleFactor],
        [465 * scaleFactor, 260 * scaleFactor],
        [465 * scaleFactor, 460 * scaleFactor],
        [165 * scaleFactor, 460 * scaleFactor],
      ], // sigma
    ];

    // Difficulty pairs [shape_idx, cuts, polygons]
    const easy = [
      [0, 1, 2],
      [1, 1, 2],
      [2, 1, 2],
      [3, 1, 2],
      [4, 1, 2],
      [5, 1, 2],
      [1, 1, 3],
      [1, 2, 4],
      [2, 1, 3],
      [3, 1, 3],
      [4, 1, 4],
      [5, 1, 3],
      [5, 2, 4],
    ];
    const normal = [
      [0, 2, 7],
      [1, 2, 5],
      [1, 2, 6],
      [1, 3, 7],
      [2, 2, 5],
      [2, 2, 6],
      [2, 3, 7],
      [3, 2, 6],
      [3, 3, 7],
      [3, 2, 5],
      [4, 2, 7],
      [4, 2, 8],
      [5, 2, 5],
      [5, 2, 6],
    ];
    const hard = [
      [0, 3, 12],
      [0, 3, 13],
      [0, 2, 8],
      [0, 3, 10],
      [0, 3, 11],
      [1, 3, 10],
      [2, 3, 10],
      [2, 4, 15],
      [2, 3, 9],
      [3, 3, 10],
      [3, 3, 9],
      [4, 3, 13],
      [4, 3, 10],
      [4, 3, 11],
      [5, 3, 9],
    ];

    function randRange(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }

    class SceneInt extends Phaser.Scene {
      constructor() {
        super("SceneMain");
      }
      // Called once to load necessary assets etc.
      preload() {}

      reset(random = true, beginning = true) {
        if (this.resetting) {
          return;
        }
        if (beginning) {
          this.level = 0;
        }
        for (var i = 0; i < this.hoverpoints.length; i++)
          this.hoverpoints[i].destroy();
        this.hoverpoints = [];
        for (var i = 0; i < this.lines.length; i++) this.lines[i].destroy();
        this.lines = [];
        for (var i = 0; i < this.linepoints.length; i++)
          this.linepoints[i].destroy();
        this.linepoints = [];
        for (var i = 0; i < this.intersectionPoints.length; i++)
          this.intersectionPoints[i].destroy();
        this.intersectionPoints = [];
        /*
        for (var i = 0; i < this.coloredPolys.length; i++)
            this.coloredPolys[i].destroy();
        this.coloredPolys = [];*/

        if (this.hoverLine != null) this.hoverLine.destroy();
        if (this.drawnCenter != null) this.drawnCenter.destroy();
        this.centerpieces = [];
        this.oldCenterpieces = [];

        this.drawnCenter = null;
        this.hoverLine = null;
        this.lastPoint = null;
        this.polygeom = null;
        this.lastAddedPoints = 0;

        this.createCenterPiece(random);
        this.countText.setText(
          "Aktuelle Stückzahl: " + this.centerpieces.length
        );
        this.correct_text.setText("");
        this.click_allowed = true;
      }

      retry(random = false) {
        this.reset(random, false);
      }

      // Called once to initialize the game
      create() {
        this.click_allowed = false;
        this.resetting = true;
        this.centerpieces = [];
        this.oldCenterpieces = [];
        this.hoverpoints = [];
        this.linepoints = [];
        this.lines = [];
        this.intersectionPoints = [];
        // this.coloredPolys = [];
        this.polygeom = null;
        this.hoverLine = null;
        this.lastPoint = null;
        this.lastAddedPoints = 0;
        this.r = [0, 0, 0];
        this.score = this.setScore(0);
        this.level = 0;
        // this.wantedFaces = 3;
        this.countText = this.add
          .text(boardSizeInt, 0, "Aktuelle Stückzahl: 1", {
            font: "32px Arial",
          })
          .setOrigin(1, 0)
          .setDepth(5);
        this.cutsText = this.add
          .text(0, boardSizeInt, "", { font: "32px Arial" })
          .setOrigin(0, 1)
          .setDepth(5);
        this.polygonsText = this.add
          .text(boardSizeInt, boardSizeInt, "", { font: "32px Arial" })
          .setOrigin(1, 1)
          .setDepth(5);
        this.correct_text = this.add
          .text(boardSizeInt / 2, 55, "", { font: "32px Arial" })
          .setOrigin(0.5, 0)
          .setDepth(5);

        this.add
          .grid(
            0,
            0,
            boardSizeInt,
            boardSizeInt,
            gridBlockSize,
            gridBlockSize,
            0x000000,
            255,
            outlineGrid
          )
          .setOrigin(0, 0);
        this.createCenterPiece();

        this.input.on("pointermove", this.onMouseMove, this);
        this.input.on("pointerdown", this.onMouseDown, this);
        this.resetting = false;
        this.click_allowed = true;
      }

      createCenterPiece(random = true) {
        if (random) {
          if (this.level < 2) {
            this.r = easy[randRange(0, easy.length)];
          } else if (this.level < 4) {
            this.r = normal[randRange(0, normal.length)];
          } else {
            this.r = hard[randRange(0, hard.length)];
          }
        }
        // console.log(this.r);

        this.cutsText.setText("Schnitte: " + this.r[1]);
        this.polygonsText.setText("Stücke: " + this.r[2]);
        this.drawnCenter = this.add
          .polygon(0, 0, shapesArray[this.r[0]], centerColor)
          .setOrigin(0, 0);
        this.polygeom = Phaser.Geom.Polygon.Clone(this.drawnCenter.geom);
        this.centerpieces.push(this.polygeom);
        this.oldCenterpieces = this.centerpieces;
        this.centerArea = this.polygeom.area;
      }

      checkWin() {
        if (
          this.r[1] == this.lines.length &&
          this.r[2] == this.centerpieces.length
        ) {
          this.click_allowed = false;
          this.level = Math.min(5, this.level + 1);
          this.score = this.setScore(Math.max(this.level, this.score));
          this.correct_text.setText("Korrekt!");
          this.resetting = true;
          this.time.delayedCall(
            1500,
            function () {
              this.resetting = false;
              this.reset(true, false);
            },
            [],
            this
          );
        }
      }

      onMouseDown(pointer, targets) {
        if (!this.click_allowed) {
          return;
        }
        // Create new hoverpoint
        var xy = this.nearestGridPos(pointer.x, pointer.y);

        if (this.polygeom.contains(xy.x, xy.y)) return;

        var circle = this.add.circle(xy.x, xy.y, pointRadius, pointColor);

        if (this.lastPoint == null) {
          this.lastPoint = circle;
        } else {
          var line = this.add
            .line(
              0,
              0,
              this.lastPoint.x,
              this.lastPoint.y,
              xy.x,
              xy.y,
              lineColor
            )
            .setOrigin(0, 0)
            .setDepth(2);

          var true_cut = this.cutAt(line);
          if (!true_cut) {
            // If cut does not cut any polygon, remove line and points again
            line.destroy();
            circle.destroy();
            this.lastPoint.destroy();
            this.lastPoint = null;
          } else {
            this.lines.push(line);
            this.linepoints.push(this.lastPoint);
            this.linepoints.push(circle);
            this.lastPoint = null;
          }
        }
        this.countText.setText(
          "Aktuelle Stückzahl: " + this.centerpieces.length
        );
        this.checkWin();
      }

      onMouseMove(pointer, target) {
        if (this.hoverLine != null) {
          this.hoverLine.destroy();
          this.hoverLine = null;
        }
        // Clear all previous hoverpoints
        for (var i = 0; i < this.hoverpoints.length; i++)
          this.hoverpoints[i].destroy();
        this.hoverpoints = [];

        // Create new hoverpoint
        var xy = this.nearestGridPos(pointer.x, pointer.y);

        if (this.polygeom.contains(xy.x, xy.y)) return;

        var circle = this.add.circle(xy.x, xy.y, pointRadius, hoverColor);
        this.hoverpoints.push(circle);

        if (this.lastPoint != null) {
          this.hoverLine = this.add
            .line(
              0,
              0,
              this.lastPoint.x,
              this.lastPoint.y,
              xy.x,
              xy.y,
              hoverLineColor
            )
            .setOrigin(0, 0)
            .setDepth(2);
        }
      }

      // Called regularly for a continuous game.
      update() {}

      drawPoints(points) {
        for (var i = 0; i < points.length; i++) {
          this.intersectionPoints.push(
            this.add
              .circle(points[i].x, points[i].y, pointRadius, intersectionColor)
              .setDepth(3)
          );
        }
      }

      resetLastLine() {
        if (this.lastAddedPoints !== 0) {
          for (
            var i = this.intersectionPoints.length - this.lastAddedPoints;
            i < this.intersectionPoints.length;
            i++
          ) {
            this.intersectionPoints[i].destroy();
          }
          this.intersectionPoints.splice(
            this.intersectionPoints.length - this.lastAddedPoints
          );
          this.lastAddedPoints = 0;

          this.linepoints[this.linepoints.length - 1].destroy();
          this.linepoints[this.linepoints.length - 2].destroy();
          this.linepoints.splice(this.linepoints.length - 2);

          this.lines[this.lines.length - 1].destroy();
          this.lines.splice(this.lines.length - 1);

          this.centerpieces = this.oldCenterpieces;

          this.countText.setText(
            "Aktuelle Stückzahl: " + this.centerpieces.length
          );
          this.checkForSizes();
        }
      }

      nearestGridPos(x, y) {
        // Calc nearest grid position
        var xx =
          Math.floor((x + gridBlockSize / 2) / gridBlockSize) * gridBlockSize;
        var yy =
          Math.floor((y + gridBlockSize / 2) / gridBlockSize) * gridBlockSize;

        // Make sure returned position is in board bounds
        if (xx == 0) xx = gridBlockSize;
        else if (xx == boardSizeInt) xx = boardSizeInt - gridBlockSize;
        if (yy == 0) yy = gridBlockSize;
        else if (yy == boardSizeInt) yy = boardSizeInt - gridBlockSize;

        return { x: xx, y: yy };
      }

      cutAt(line) {
        var addedPoints = 0;
        var outPolys = [];
        var true_cut = false;
        for (var i = 0; i < this.centerpieces.length; i++) {
          var points = this.centerpieces[i].points;

          var intersections = this.getIntersections(line, points);
          true_cut |= intersections.length > 0;
          intersections = intersections.sort((a, b) => a.z - b.z);

          if (drawIntersectionCircles) {
            addedPoints += intersections.length;
            this.drawPoints(intersections);
          }

          // Clipping Algorithm, but keep both sides of the polygon -> crossbacks necessary
          var current = outPolys.length;
          outPolys.push([]);
          var crossback = new Map();
          for (var j = 0; j < points.length - 1; j++) {
            outPolys[current].push(points[j]);
            var ints = Phaser.Geom.Intersects.GetLineToPoints(line.geom, [
              points[j],
              points[j + 1],
            ]);
            if (ints != null) {
              outPolys[current].push(ints);

              // Find crossback
              var idx = intersections.findIndex((a) => a.z >= ints.z - 1.0e-10);
              if (idx % 2 == 0) {
                crossback.set(idx + 1, current);
              } else {
                crossback.set(idx - 1, current);
              }

              // If a crossback to this intersection exists, go to that polygon, otherwise create one
              if (crossback.has(idx)) {
                current = crossback.get(idx);
              } else {
                current = outPolys.length;
                outPolys.push([]);
              }
              outPolys[current].push(ints);
            }
          }
          // Repeat Loop, just this time for length 1 and 0
          outPolys[current].push(points[points.length - 1]);
          var ints = Phaser.Geom.Intersects.GetLineToPoints(line.geom, [
            points[points.length - 1],
            points[0],
          ]);
          if (ints != null) {
            outPolys[current].push(ints);

            // Find crossback
            var idx = intersections.findIndex((a) => a.z >= ints.z - 1.0e-10);
            if (idx % 2 == 0) {
              crossback.set(idx + 1, current);
            } else {
              crossback.set(idx - 1, current);
            }

            // If a crossback to this intersection exists, go to that polygon, otherwise create one
            if (crossback.has(idx)) {
              current = crossback.get(idx);
            } else {
              current = outPolys.length;
              outPolys.push([]);
            }
            outPolys[current].push(ints);
          }
        }
        this.oldCenterpieces = this.centerpieces;
        this.centerpieces = [];
        for (var i = 0; i < outPolys.length; i++) {
          var poly = new Phaser.Geom.Polygon(outPolys[i]);
          if (poly.area > 10.0) {
            // To prevent too small polygons and errors this creates. Not sure if enough though
            this.centerpieces.push(poly);
          }
        }
        // this.checkForSizes()
        if (true_cut) {
          this.lastAddedPoints = addedPoints;
        }
        return true_cut;
      }

      getIntersections(line, points) {
        var intersections = [];
        for (var i = 0; i < points.length - 1; i++) {
          var ints = Phaser.Geom.Intersects.GetLineToPoints(line.geom, [
            points[i],
            points[i + 1],
          ]);
          if (ints != null && ints.z < 1) {
            intersections.push(ints);
          }
        }
        var ints = Phaser.Geom.Intersects.GetLineToPoints(line.geom, [
          points[points.length - 1],
          points[0],
        ]);
        if (ints != null && ints.z < 1) {
          intersections.push(ints);
        }
        // console.log(intersections);
        return intersections;
      }

      checkForSizes() {
        // Was for coloring polygons if they have a given area
        // Game was changed to only count number of polygons, therefore coloring is not necessary
        return;
        var all_correct = true;
        for (var i = 0; i < this.centerpieces.length; i++) {
          var curArea = this.centerpieces[i].area;
          if (
            Math.abs(this.centerArea / this.wantedFaces - curArea) <
            (percentageDiffArea * this.centerArea) / this.wantedFaces + 100
          ) {
            this.coloredPolys.push(
              this.add
                .polygon(0, 0, this.centerpieces[i].points, 0x00ff00)
                .setOrigin(0, 0)
                .setDepth(1)
            );
          } else {
            this.coloredPolys.push(
              this.add
                .polygon(0, 0, this.centerpieces[i].points, 0xff0000)
                .setOrigin(0, 0)
                .setDepth(1)
            );
            all_correct = false;
          }
        }
        return all_correct;
      }

      setScore(score) {
        localStorage.setItem("intersection", score);
        this.score = score;
        return score;
      }

      /* This was written for automatically testing a polygon and its possible cut configurations. This code is working but far too slow and not calculatign everything yet
    cutXTimes(x) {
        if (x > 0) {
            var possiblePoints = this.getAllPossiblePoints();
            var x1, y1, x2, y2;
            for (var i = 0; i < possiblePoints.length; i++) {
                for (var j = 0; j < possiblePoints.length; j++) {
                    [x1, y1] = possiblePoints[i];
                    [x2, y2] = possiblePoints[j];

                    var line = this.add.line(0, 0, x1, y1, x2, y2, lineColor).setOrigin(0,0).setDepth(2);
                    this.lines.push(line);

                    var all_correct = this.cutAt(line);

                    if (all_correct) {
                        console.log("");
                    }

                    this.retry();
                }
            }
        }
    }

    getAllPossiblePoints() {
        this.endPoints = [];
        var endX = 0;
        var endY = gridBlockSize;
        while (true) {
            [endX, endY] = this.getNextCircle(endX, endY)
            if (endX == -1) break;
            this.endPoints.push([endX, endY]);
        }
        console.log(this.endPoints);
        return this.endPoints;
    }

    // Last circle was at (x,y). Iteration via x first, then y
    getNextCircle(x, y) {
        var newX = x + gridBlockSize
        var newY = y;
        if (newX >= boardSizeInt) {
            newX = gridBlockSize;
            newY = newY + gridBlockSize;
            if (newY >= boardSizeInt) {
                return [-1, -1];
            }
        }
        return [newX, newY];
    }*/
    }

    // Game config
    var configInt = {
      type: Phaser.AUTO,
      // Looks for a 'div' with 'id=<parent>' and places the game inside it
      parent: "memory-container",
      // Dimensions of the game
      width: boardSizeInt,
      height: boardSizeInt,
      // Which game to show, SceneMain is the class I implemented above
      scene: SceneInt,
      backgroundColor: backgroundColorInt,
      // And more...
    };

    // Create the game, and that's it.
    this.game = new Phaser.Game(configInt);
  },
  methods: {
    reload() {
      this.game.scene.scenes[0].retry();
    },
  },
  computed: {
    highscore() {
      return localStorage.getItem("intersection");
    },
  },
};
</script>
