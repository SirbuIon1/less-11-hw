var x = ["HTML", 11, "JavaScript", 2, "CSS", 23, 12];
console.log('x =', x);
x.push(-45);
console.log("push x = ", x);
x.unshift(1000);
console.log("unshift x = ", x);
x.push("Last array element");
console.log("push x = ", x);
// Using for with splice to remove an element 
  for( var i = 0; i < x.length-1; i++){ 
   if ( x[i] === "JavaScript") {
     x.splice(i, 1); 
   }
}
console.log("splice x=", x); 
x.splice(3,0, "JavaScript");
console.log("x = ", x);
// Using filter to remove an element
var f = x.filter(function(value, index, arr) {return value !== "JavaScript"});
console.log("filtered =", f);
console.log("x = ", x);
// Using a function with filter to remove an element
function arrayRemove(arr, value) {
    return arr.filter(function(ele){
    return ele !== value;})
};
var result = arrayRemove(x, "JavaScript");
console.log("result = ", result);
console.log("x = ", x);
//Using filter to filter numbers
var num = x.filter(function(element) {return typeof element === 'number';});
console.log("numbers = ", num);
//Using map
function sq(a) {return a * a;};
var n = num.map(sq);
console.log('map = ', n);
//Using Math max
var max = Math.max.apply(null, n);
console.log("Max = ", max);
