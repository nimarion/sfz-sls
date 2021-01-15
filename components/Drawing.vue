<template>
  <section>
    <div style="max-width: 700px;" class="container has-text-centered">
      <h1 class="title">
        Du bist aktuell nicht mit dem Internet verbunden.
      </h1>
    </div>
    <br>
    <div class="colors">
      <button
        v-for="item in colors"
        :key="item"
        :style="{ backgroundColor: item }"
        class="color"
        @click="context.strokeStyle = item"
      />
    </div>

    <canvas />
  </section>
</template>
<!-- https://dev.to/aspittel/how-to-create-the-drawing-interaction-on-dev-s-offline-page-1mbe -->
<script>
export default {
  data () {
    return {
      colors: [
        '#F4908E',
        '#F2F097',
        '#88B0DC',
        '#F7B5D1',
        '#53C4AF',
        '#FDE38C'
      ],
      context: null
    }
  },
  mounted () {
    let x, y, isPainting
    const canvas = document.querySelector('canvas')
    this.context = canvas.getContext('2d')

    const context = this.context

    const setSize = () => {
      canvas.setAttribute('width', window.innerWidth)
      canvas.setAttribute('height', window.innerHeight)
      this.context.strokeStyle = this.colors[0]
      this.context.lineJoin = 'round'
      this.context.lineWidth = 5
    }

    setSize()

    window.addEventListener('resize', setSize)

    function getCoordinates (event) {
      // check to see if mobile or desktop
      if (['mousedown', 'mousemove'].includes(event.type)) {
        // click events
        return [
          event.pageX - canvas.offsetLeft,
          event.pageY - canvas.offsetTop
        ]
      } else {
        // touch coordinates
        return [
          event.touches[0].pageX - canvas.offsetLeft,
          event.touches[0].pageY - canvas.offsetTop
        ]
      }
    }

    function startPaint (e) {
      // change the old coordinates to the new ones
      isPainting = true
      const coordinates = getCoordinates(e)
      x = coordinates[0]
      y = coordinates[1]
    }

    canvas.addEventListener('mousedown', startPaint)
    canvas.addEventListener('touchstart', startPaint)

    function drawLine (firstX, firstY, secondX, secondY) {
      context.beginPath()
      context.moveTo(secondX, secondY)
      context.lineTo(firstX, firstY)
      context.closePath()
      context.stroke()
    }

    function paint (e) {
      if (isPainting) {
        const [newX, newY] = getCoordinates(e)
        drawLine(x, y, newX, newY)
        x = newX
        y = newY
      }
    }

    canvas.addEventListener('mousemove', paint)
    canvas.addEventListener('touchmove', paint)

    function exit () {
      isPainting = false
    }

    canvas.addEventListener('mouseup', exit)
    canvas.addEventListener('mouseleave', exit)
    canvas.addEventListener('touchend', exit)
  }
}
</script>

<style scoped>
canvas {
  height: auto;
  width: 100%;
  margin: 0;
  user-select: none;
}

.colors {
  z-index: 2;
  margin: 0 40px;
  text-align: center;
}

.color {
  height: 50px;
  width: 50px;
  margin-right: 10px;
  border-radius: 50%;
  border: none;
}
</style>
