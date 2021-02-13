<template>
  <div style="text-align: left">
    <div class="columns is-vcentered">
      <div class="column is-offset-1">
        <p>
          Verbinde alle Knoten zu einem Netz, bei dem die Gesamtlänge aller
          Verbindungen möglichst kurz ist. Jeder Knoten muss mit mindestens
          einem anderen Knoten verbunden werden. Um einen Knoten mit einem
          anderen zu verbinden, klickst du zuerst auf den einen, dann auf den
          anderen Knoten. Auf die gleiche Art kannst du Verbindungen rückgängig
          machen.
        </p>
      </div>
      <div class="column is-two-thirds">
        <div id="path" />
      </div>
    </div>
  </div>
</template>
<script>
import Phaser from 'phaser'
export default {
  mounted () {
    const numColorPath = 0xFFFFFF
    const lineColorPath = 0x00FF00
    const hoverLineColorPath = 0x0000FF
    // const boardsizePath = 600;
    const boardsizePath = getSize()
    const radiusPath = getSize() / 26

    // const radiusPath = 23;
    const epsilonPath = 0.01
    const selectedColorPath = 0xFF00FF

    let from

    function getSize () {
      // if (window.innerWidth > 1200) {
      //   boardSize = 600;
      // }
      let boardSize = window.innerWidth / 3
      if (boardSize > 600) {
        boardSize = 600
      }

      return boardSize
    }

    /**
     * Efficient implementation of a set, that can form the union of a set in constant(TM) time.
     */
    class UnionFind {
      constructor (n) {
        this.rank = new Array(n).fill(0)
        this.parent = []
        for (let i = 0; i < n; i++) {
          this.parent.push(i)
        }
      }

      findSet (i) {
        // console.log(this.parent);
        if (this.parent[i] === i) {
          return i
        } else {
          this.parent[i] = this.findSet(this.parent[i])
          return this.parent[i]
        }
      }

      isSameSet (i, j) {
        return this.findSet(i) === this.findSet(j)
      }

      unionSet (i, j) {
        i = this.findSet(i)
        j = this.findSet(j)
        if (!this.isSameSet(i, j)) {
          if (this.rank[i] > this.rank[j]) {
            this.parent[j] = i
          } else {
            this.parent[i] = j
            if (this.rank[i] === this.rank[j]) {
              this.rank[j]++
            }
          }
        }
      }
    }

    // Returns a random integer in the interval [min,max)
    function randRange (min, max) {
      return Math.floor(Math.random() * (max - min) + min)
    }

    class ScenePath extends Phaser.Scene {
      constructor () {
        super('SceneMain')
      }

      // Resets/ Initializes the game
      reset () {
        if (this.goalText != null) {
          this.goalText.destroy()
        }
        // Reset the whole gamestate, and destroy all objects that have already been drawn.
        this.edgeList = []
        this.id = 0
        this.userweight = 0
        this.hoverNode = null
        if (this.hoverline != null) {
          this.hoverline.destroy()
          this.hoverline = null
        }
        for (let i = 0; i < this.lines.length; i++) {
          this.lines[i].destroy()
        }
        for (let i = 0; i < this.nodes.length; i++) {
          this.nodes[i].destroy()
        }
        this.nodes = new Array(this.nodecount)
        this.lines = []

        // Chooses (randomly) nodecount many coordinates many coordinates where the numbers are to be placed
        for (let i = 0; i < this.nodecount; i++) {
          do {
            var x = randRange(radiusPath, boardsizePath - radiusPath)
            var y = randRange(radiusPath, boardsizePath - radiusPath)
          } while (this.isOccupied(x, y))

          // Push an edge for each node to each existing node, necessary for kruskal's algorithm
          this.nodes.forEach((element, idx) => {
            const w = this.distSquared(x, y, element.x, element.y)
            this.edgeList.push([w, idx, i])
          })

          // Draw node, enable input on it.
          this.nodes[i] = this.add
            .circle(x, y, radiusPath, numColorPath)
            .setInteractive()
          this.nodes[i].inputEnabled = true
          this.nodes[i].on('pointerover', this.onHover, this)
          this.nodes[i].on('pointerout', this.onPointerOut, this)
        }
        // Calculate MST weight
        this.kruskal()
        this.state = 0
      }

      /**
       * Squared Euclidian distance between (x1,y1) and (x2,y2)
       */
      distSquared (x1, y1, x2, y2) {
        return Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2)
      }

      /**
       * Euclidian distance between (x1,y1) and (x2,y2)
       */
      distance (x1, y1, x2, y2) {
        return Math.sqrt(this.distSquared(x1, y1, x2, y2))
      }

      /**
       * Destroy the line which was drawn by hovering over a node, when not hovering anymore
       */
      onPointerOut (target) {
        if (this.hoverline != null) {
          this.hoverline.destroy()
          this.hoverline = null
        }
        if (this.hoverNode != null && this.hoverNode !== from) {
          this.hoverNode.fillColor = numColorPath
          this.hoverNode = null
        }
      }

      /**
       * When hovering a node, draw a temporary line to show the user which would be the line that will be drawn.
       */
      onHover (pointer) {
        if (from != null) {
          for (let i = 0; i < this.nodes.length; i++) {
            if (
              this.distance(
                pointer.x,
                pointer.y,
                this.nodes[i].x,
                this.nodes[i].y
              ) <
              radiusPath * 1.5
            ) {
              this.hoverline = this.add
                .line(
                  0,
                  0,
                  this.nodes[i].x,
                  this.nodes[i].y,
                  from.x,
                  from.y,
                  hoverLineColorPath
                )
                .setOrigin(0, 0)

              this.nodes[i].fillColor = selectedColorPath
              this.hoverNode = this.nodes[i]
              return
            }
          }
        }
      }

      /**
       * Calculates whether a node can be placed at position (x,y). The puffer between centers of nodes is set to 4*radiusPath. Should be at least 3*radiusPath
       */
      isOccupied (x, y) {
        if (x < 400 && y > 500) {
          return true
        }
        for (let i = 0; i < this.nodes.length; i++) {
          // if (typeof this.nodes[i] !== "undefined")
          // console.log(this.distance(x, y, this.nodes[i].x, this.nodes[i].y));
          if (
            typeof this.nodes[i] !== 'undefined' &&
            this.distance(x, y, this.nodes[i].x, this.nodes[i].y) <=
              radiusPath * 3
          ) {
            return true
          }
        }
        return false
      }

      /**
       * Is called on mouse down. Draws and destroys lines.
       */
      onMouseDown (pointer, targets) {
        // If no node was selected, return.
        if (targets.length === 0) {
          return
        }

        // Calculate (x,y) from pointer
        if (this.state === 0) {
          // If this is the source selection, remember this node and change to target selection
          from = targets[0]
          from.fillColor = selectedColorPath
          this.state++
        } else {
          from.fillColor = numColorPath
          if (this.hoverNode != null) {
            this.hoverNode.fillColor = numColorPath
            this.hoverNode = null
          }
          // Remember target node. Change to source selection
          this.to = targets[0]
          this.state = 0
          // If the same node was collected twice, ignore both selections. Otherwise ...
          if (this.to !== from) {
            const line = new Phaser.Geom.Line(
              from.x,
              from.y,
              this.to.x,
              this.to.y
            )
            const line2 = new Phaser.Geom.Line(
              this.to.x,
              this.to.y,
              from.x,
              from.y
            )
            // Check if the line to be drawn already exists. If so destroy it and return. ...
            for (let i = 0; i < this.lines.length; i++) {
              if (
                Phaser.Geom.Line.Equals(line, this.lines[i].geom) ||
                Phaser.Geom.Line.Equals(line2, this.lines[i].geom)
              ) {
                // Remove the line from the user selected path weight.
                this.userweight -= this.distSquared(
                  from.x,
                  from.y,
                  this.to.x,
                  this.to.y
                )
                // Undraw the line
                this.lines[i].destroy()
                this.lines.splice(i, 1)
                this.to = null
                from = null
                // Undraw the hoverline if still existent (Should always be, just in case...)
                if (this.hoverline != null) {
                  this.hoverline.destroy()
                  this.hoverline = null
                }
                // Check if the correct MST modulo epsilonPath was selected.
                this.goalCheck()
                return
              }
            }
            // Otherwise draw the line.
            this.lines.push(
              this.add
                .line(0, 0, from.x, from.y, this.to.x, this.to.y, lineColorPath)
                .setOrigin(0, 0)
            )
            this.userweight += this.distSquared(
              from.x,
              from.y,
              this.to.x,
              this.to.y
            )
          }
          // Reset source and target nodes
          this.to = null
          from = null
        }
        // Check if the correct MST modulo epsilonPath was selected.
        this.goalCheck()
      }

      /**
       * // Check whether the correct MST modulo epsilonPath percentage was selected.
       */
      goalCheck () {
        this.hintText.setText(
          this.userweight > this.weight ? 'Verbindungen zu lang!' : ''
        )
        // Check if the number of lines used is one less than the number of nodes and if the length of the path the user
        // selected is in range of a given epsilonPath constant (percentage)
        if (
          this.lines.length === this.nodecount - 1 &&
          Math.abs(this.userweight - this.weight) <
            Math.floor(this.weight * epsilonPath)
        ) {
          this.hintText.setText('')
          switch (this.nodecount) {
            case 4:
              this.score = Math.max(this.score, 1)
              break
            case 7:
              this.score = Math.max(this.score, 2)
              break
            case 10:
              this.score = Math.max(this.score, 3)
              break
            case 13:
              this.score = Math.max(this.score, 4)
              break
            case 16:
              this.score = Math.max(this.score, 5)
              break
          }
          // console.log(this.score);
          this.nodecount = Math.min(20, this.nodecount + 1)
          this.goalText = this.add.text(
            boardsizePath / 2 - 24 - 48,
            boardsizePath - 72,
            'Richtig!',
            {
              font: '48px Arial'
            }
          )
          this.time.delayedCall(1000, this.reset, [], this)
        }
        // Update the two texts at the bottom, telling if the path is too long/short and the nodecount
        // console.log(this.userweight);
        // this.nodeText.setText(this.nodecount + ' nodes');
      }

      // Called once to load necessary assets etc.
      preload () {}

      // Called once to initialize the game
      create () {
        // Initialize important variables
        this.nodecount = 4
        this.score = 0
        this.goalText = null
        this.nodes = []
        this.lines = []
        from = null
        this.to = null
        this.hoverline = null
        // Build initial board
        this.reset()
        this.hintText = this.add.text(25, boardsizePath - 50, '', {
          font: '32px Arial'
        })
        // this.nodeText = this.add.text(350, boardsizePath + 50, this.nodecount + ' nodes', { font: '32px Arial' });
        this.input.on('pointerdown', this.onMouseDown, this)
      }

      // Called regularly for a continuous game.
      // Not necessary for "shortest path", since we're only acting once the user acts.
      update () {}

      /**
       * Calculates the minimum spanning tree with kruskals algorithm. Actually only stores the weight of the minimum spanning tree
       * to compare it to the user's selected path. For more information about this algorithm visit wikipedia.
       */
      kruskal () {
        this.weight = 0
        const uf = new UnionFind(this.nodecount)
        this.edgeList.sort(function (a, b) {
          const [w, u, v] = a
          const [w2, u2, v2] = b
          return w - w2
        })

        this.edgeList.forEach((element) => {
          const [w, u, v] = element
          if (!uf.isSameSet(u, v)) {
            this.weight += w
            uf.unionSet(u, v)
          }
        })
        // console.log(this.weight);
      }
    }

    // Game config
    const configPath = {
      type: Phaser.AUTO,
      // Looks for a 'div' with 'id=<parent>' and places the game inside it
      parent: 'path',
      // Dimensions of the game
      width: boardsizePath,
      height: boardsizePath,
      // Which game to show, SceneMain is the class I implemented above
      scene: ScenePath,
      backgroundColor: 0x444444
      // And more...
    }

    // Create the game, and that's it.
    const gamePath = new Phaser.Game(configPath)
  }
}
</script>
