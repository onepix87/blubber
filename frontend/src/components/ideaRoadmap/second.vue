<template>
  <div id="mainWrapperMap">
        <canvas id="roadMap"> </canvas>
  </div>
</template>

<script>
export default {
  name: "ideaRoadmap",
  data() {
    return {
      vueCanvas: null,
      ideaName: "Good One",
      author: "John Doe",
      ideaHistory: ["Создание", "Первый лайк", "Первый комментарий", "10 лайков"],
      lastCheckpointPosition: {}
    };
  },
  props: {
    msg: String
  },
  mounted() {
      this.drawBackground();
    this.drawCheckpoints();
    // this.drawCircles();
  },
  methods: {
     drawBackground() {
      const pageParameters = {
        width: document.getElementById("mainWrapperMap").offsetWidth,
        height: document.getElementById("mainWrapperMap").offsetHeight
      };
      this.vueCanvas = document.getElementById("roadMap").getContext("2d");
      this.vueCanvas.fillStyle = "#0D356C";
      this.vueCanvas.fillRect(0, 0, pageParameters.width, pageParameters.height);
    },
    drawCheckpoints() {
      this.ideaHistory.map((idea, index) => {
        const newIdeaPoint = document.createElement("div");
        newIdeaPoint.classList.add("checkpoint");
        newIdeaPoint.id = `checkpoint${index}`;
        if (index === 0) {
          // console.log('here')
          newIdeaPoint.style.top = "15px";
          newIdeaPoint.style.left = "15px";
        } else {
          const newTop = +this.lastCheckpointPosition.top.split("px")[0] + Math.random() * 200;
          const newLeft = +this.lastCheckpointPosition.left.split("px")[0] + Math.random() * 400;
          newIdeaPoint.style.top = `${newTop}px`;
          newIdeaPoint.style.left = `${newLeft}px`;
          this.vueCanvas.beginPath();
          console.log(this.lastCheckpointPosition.left, this.lastCheckpointPosition.top);
          console.log(newLeft, newTop)
          this.vueCanvas.lineWidth = 0.5;
          this.vueCanvas.strokeStyle = "#262C40";
          this.vueCanvas.moveTo(15, 15);
          this.vueCanvas.quadraticCurveTo(20, 100, newLeft, newTop);
          this.vueCanvas.stroke();
        }
        this.lastCheckpointPosition = {
          top: newIdeaPoint.style.top,
          left: newIdeaPoint.style.left
        };
        document.getElementById("mainWrapperMap").appendChild(newIdeaPoint);
      });
    }
    /*drawCircles() {
      this.ideaHistory.map(() => {
        const newPoint = '<circle r="7.5" fill="#E9F1F9" cx="20.5" cy="35.6"></circle>';
        console.log(newPoint);
        document.getElementById("roadMap").appendChild(newPoint);
      });
    }*/
  }
};
</script>

<style lang="scss">
#mainWrapperMap {
  position: relative;
}
#mainWrapperMap,
#roadMap {
  width: 100%;
  height: 100%;
}
.checkpoint {
  position: absolute;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #e9f1f9;
}
.line {
  stroke: #d7dee9;
}
</style>
