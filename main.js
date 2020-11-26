  let table = [
 [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
[11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
[21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
[31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
[41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
[51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
[61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
[71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
[81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
[91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
  ];
   
   
 function getCell( rowIndex, colIndex ){
    let row, cell=0;
    if(rowIndex < 0 || colIndex < 0){
        return 0;
    }
    if(table.length > rowIndex){
        row = table[rowIndex];
        if( row.length > colIndex ){
            cell = row[colIndex];
        }
    }
    return cell
    
}

function solution( n ){

    if( n<1 || n>100 ){
        return 0;
    }

    let res = n;

    // 45 => [ 4, 4 ], 1 => [ 0,0 ], 100 => [ 9,9 ]
    const currRow = Math.floor((n-1)/10);
    const currCol = (n-1)%10 ;
     
    res += getCell( currRow-1, currCol -1);
    res += getCell( currRow-1, currCol);
    res += getCell( currRow-1, currCol +1);

    res += getCell( currRow, currCol -1);
    res += getCell( currRow, currCol +1);

    res += getCell( currRow+1, currCol -1);
    res += getCell( currRow+1, currCol);
    res += getCell( currRow+1, currCol +1);


    return res;

}
// solution(45)

console.log("solution(1) => ", solution(1));
console.log("solution(45) => ", solution(45));
console.log("solution(100) => ", solution(100));