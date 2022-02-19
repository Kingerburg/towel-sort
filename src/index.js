module.exports = function towelSort (matrix) {
  // module.exports =  
//  matrix = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16],
// ];
let arr = []
let arrN = []
  if(!matrix) {
    return []
  }
    for (let i = 0; i < matrix.length; i++) {
      
      if (i % 2 === 0) {
        arr.push(matrix[i])
      }
      if(i % 2 === 1) {
        arr.push(matrix[i].reverse());
      }
    }
    arr.forEach((item, index) => {
      for (let i = 0; i < item.length; i++ ) {
        arrN.push(item[i])
        
      }
    })

    return arrN

}

