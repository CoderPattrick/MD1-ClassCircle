let Circle = function(radius) {
    this.radius = radius;
}
getArea = function(x) {
    return Math.PI * x * x;
}
let circle = new Circle(2);
let radius = circle.radius;
let area = getArea(circle.radius);
alert("radius: " + radius + "; area: " + area);