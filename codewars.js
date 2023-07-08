// const isAnagram = (test, original) => {
//     test = test.toLowerCase().split("").sort().join();
//     original = original.toLowerCase().split("").sort().join();
//     return test === original;
// };
// console.log(isAnagram("foefet", "toffee"));


// function booleanToString(b){
//     return b.toString();
//   }

//  const strCount =(str, letter) => {  
//     return str.split(letter).length - 1;
//   }
// console.log(strCount("Hello", "l"))
// reduce = 0;
// function squareSum(numbers){
//     return numbers.map(el => el**2).reduce((resultA, resultB) => resultA+resultB);
// }
// console.log(squareSum([2,2,2]));


// const nearest_sq = n => Math.pow(Math.round(Math.sqrt(n)), 2);


// console.log(nearest_sq(1)); // 121
// console.log(nearest_sq(4)); // 900
// console.log(nearest_sq(10)); // 900
// console.log(nearest_sq(111)); // 900
// console.log(nearest_sq(9999)); // 900

// function nearestSq(n){
//     let i,j;
//     for(i=j=n;Math.sqrt(i)%1!=0&&Math.sqrt(j)%1!=0;i++,j--);
//       return Math.sqrt(i)%1==0?i:j
//     }
//     console.log(nearestSq(1));
//     console.log(nearestSq(2));
//     console.log(nearestSq(10));
//     console.log(nearestSq(111));
//     console.log(nearestSq(9999));

//     function solution(str){
//         str = str.split("").reverse().join("");
//         return str;
//     }
//     console.log(solution('world'));

    function addLength(str) {
      str = str.length().;
      return;
    }
    
    addLength('dadada')

    function addLength(inputStr) {
      let words = inputStr.split(" ");
      let output = [];
      for (let i = 0; i < words.length; i++) {
        output.push(words[i] + " " + words[i].length);
      }
      return output;
    }
    // 4
    
    // const empty = []
    // console.log(empty.length)
    // // 0
    