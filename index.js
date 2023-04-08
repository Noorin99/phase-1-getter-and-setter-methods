// Add your Circle class here
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
    return this.radius * 2;
  }

  get circumference() {
    return Math.PI * this.diameter;
  }

  get area() {
    return Math.PI * this.radius * this.radius;
  }

  set diameter(diameter) {
    this.radius = diameter / 2;
  }

  set circumference(circumference) {
    const diameter = circumference / Math.PI;
    this.radius = diameter / 2;
  }

  set area(area) {
    const sqrRadius = area / Math.PI;
    this.radius = Math.sqrt(sqrRadius);
  }
}
