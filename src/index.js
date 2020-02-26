
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if( matrix === undefined || !matrix.length) return [];
    let i = 0;
    const result = [];
    for(i = 0; i < matrix.length;i++){
        if (i % 2 ===0){
            result.push(...matrix[i].sort((a,b)=>a-b));
        }
        if (i % 2 !== 0){
            result.push(...matrix[i].sort((a,b)=>a-b).reverse());
        }
    }
    return result;
}
