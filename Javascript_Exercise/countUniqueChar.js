function countUnique(str){

    countMap = {}

    for(const char of str){
        countMap[char] = ((countMap[char] || 0) + 1)
    }

    return countMap
}

console.log(countUnique("jduhdihdw"));
