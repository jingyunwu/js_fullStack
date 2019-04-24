
var PerformaceS = function() {
}
PerformaceS.prototype.calculate = function(salary) {
    return salary * 5;
}

var PerformaceA = function() {
}
PerformaceA.prototype.calculate = function(salary) {
    return salary * 3;
}

var Bounce = function(salary) {
    this.salary = salary;
}
Bounce.prototype.setStrategy = function(strategy) {
    this.strategy = strategy;
}
Bounce.prototype.getBounce = function() {
    return this.strategy.calculate(this.salary);
}

var bounce = new Bounce(2000);
bounce.setStrategy(new PerformaceS());
console.log(bounce.getBounce());