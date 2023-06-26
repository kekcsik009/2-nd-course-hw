let array = [[1,2,3],[4,5,6]];
let result = array.reduce(function(a,b) {
    return a.concat(b); 
});
console.log(result);