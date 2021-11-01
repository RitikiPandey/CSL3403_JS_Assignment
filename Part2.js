var d = 100;
console.log("d is defined globally and is accessed globally, d = "+d);

function local1(){
    var d = 200; 
    console.log("Here, under function local1 d = "+d+" firstly the function will search for d in the local scope and here it will get d in the local scope as 200 and hence will return the same.");
    local2();
}

function local2(){
    console.log("Here, under function local2 d = "+d+" Since it has no variable in the local scope named as d, so after searching in the local scope, it will search in the global scope and will get 100 as value of d.")
}

local1();