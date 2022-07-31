const reverseString = function(word) {
    let len=word.length;
    let str='';
    for(let i=len-1;i>=0;i--){
        str+=word.substr(i,1);
    }
    return str;
};

// Do not edit below this line
module.exports = reverseString;
