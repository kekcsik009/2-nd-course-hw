  Array.max = function( array ){
        return Math.max.apply( Math, array );
    };
    
    Array.min = function( array ){
        return Math.min.apply( Math, array );
    };
    let p = [35,2,65,7,8,9,12,121,33,99];
    console.log(`Max value is: ${p.max()}` +
      `\nMin value is: ${p.min()}`);