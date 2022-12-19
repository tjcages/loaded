const lerp = (current, target, factor) =>
  current * (1 - factor) + target * factor;

let mousePosition = { x: 0, y: 0 };

const calculateDistance = (x1, y1, x2, y2) => {
  return Math.hypot(x1 - x2, y1 - y2);
};

export default class MagneticObject {
  constructor(domElement) {
    this.domElement = domElement;
    this.boundingClientRect = this.domElement.getBoundingClientRect();
    this.triggerArea = this.boundingClientRect.width * 10.75;
    this.interpolationFactor = 0.8;

    this.lerpingData = {
      x: { current: 0, target: 0 },
      y: { current: 0, target: 0 },
    };

    this.init();
    this.render();
    this.resize();
  }

  init() {
    window.addEventListener("mousemove", (e) => {
      mousePosition.x = e.pageX;
      mousePosition.y = e.pageY;
    });
  }

  resize() {
    window.addEventListener("resize", () => {
      this.boundingClientRect = this.domElement.getBoundingClientRect();
    });
  }

  render() {
    const distanceFromMouseToCenter = calculateDistance(
      mousePosition.x,
      mousePosition.y,
      this.boundingClientRect.left + this.boundingClientRect.width / 2,
      this.boundingClientRect.top + this.boundingClientRect.height / 2
    );

    let targetHolder = { x: 0, y: 0 };

    if (distanceFromMouseToCenter < this.triggerArea) {
      this.domElement.classList.add("focus");
      targetHolder.x =
        (mousePosition.x -
          (this.boundingClientRect.left + this.boundingClientRect.width / 2)) *
        0.025;
      targetHolder.y =
        (mousePosition.y -
          (this.boundingClientRect.top + this.boundingClientRect.height / 2)) *
        0.025;
    } else {
      this.domElement.classList.remove("focus");
    }

    this.lerpingData.x.target = targetHolder.x;
    this.lerpingData.y.target = targetHolder.y;

    for (const item in this.lerpingData) {
      this.lerpingData[item].current = lerp(
        this.lerpingData[item].current,
        this.lerpingData[item].target,
        this.interpolationFactor
      ); 
    }

    this.domElement.style.transform = `translate3d(${this.lerpingData.x.current}px, ${this.lerpingData.y.current}px, 0)`;

    window.requestAnimationFrame(() => this.render());
  }
}
