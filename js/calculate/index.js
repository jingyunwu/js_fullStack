// 会计 计算年终奖  绩效 S  5个月的年终奖  
// A  3个月的年终奖   B  2   C  1   D
// 一个个的策略函数
var perfomanceX = function(salary) {
    return salary * 60;
}
var perfomanceS = function(salary) {
    return salary * 5;
}
var perfomanceA = function(salary) {
    return salary * 3;
}
var perfomanceB = function(salary) {
    return salary * 2;
}
var perfomanceC = function(salary) {
    return salary * 1;
}


var calculateBounce = function(perfomanceLevel, salary) {
    switch(perfomanceLevel) {
        case 'X': return perfomanceX(salary) ;break;
        case 'S': return perfomanceS(salary) ;break;
        case 'A': return perfomanceA(salary) ;break;
        case 'B': return perfomanceB(salary) ;break;
        case 'C': return perfomanceC(salary) ;break;
        default: return Error; break;
    } 
}
// 可以如何的优化？ 分支太多， 计算策略太简陋
// 会计发钱的，制定发钱的策略的区分开来
console.log(calculateBounce('X', 20000));