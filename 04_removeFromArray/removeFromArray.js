const removeFromArray = function(...args) {
    const array = args[0];
    const newArray = [];
    array.forEach((item) => {
        //console.log(item);
        if (!args.includes(item)) {
            //console.log(args);
            newArray.push(item);
}
});
return newArray;
};

//remove([1,2,3,4],3);

// Do not edit below this line
module.exports = removeFromArray;
