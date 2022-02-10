/*filrname : calcA.js 
created by: Mubashir khan
this file has calculator function add, sub, mod*/

// for addition function
add = function(x,y){
    return x+y;
}


// for substraction function
sub = function (x,y){
    return x-y;
}


// for mod function
mod = function (x,y){
    return x%y;
}


calcA = {
    add : add,
    sub : sub,
    mod : mod,

};

module.exports =calcA

