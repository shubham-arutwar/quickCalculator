let total = 0, val , x = true, arr=[];

let  calc = function(val) {
    x ? total = total + val : total = total - val;

    if (x == true) {
        arr.push("+");
        arr.push(val);
    } else {
        arr.push("-");
        arr.push(val);
    }
    // (x == true) ? arr.push(`+ ${val}`) : arr.push(`- ${val}`); //arr=[`+ ${val}`,...arr]
    undoAnim();
    display("#result",total);
    history();
}

var animSub = function() {
    let getSum = document.querySelector(".sum");
    let getSub = document.querySelector(".sub");
    x = false;
    getSum.style.backgroundColor = "#404B69";
    getSub.style.backgroundColor = "#283149";
}

var animSum = function() {
    let getSum = document.querySelector(".sum");
    let getSub = document.querySelector(".sub");
    x = true;
    getSum.style.backgroundColor = "#283149";
    getSub.style.backgroundColor = "#404B69";
}

let clr = function() {
    total = 0;
    arr = [];
    undoAnim();
    display("#result","0");
    history();
}

let undo = function() {
    let tempNum, tempOpp;
    
    if (arr.length === 0) {

    } else {
        tempNum = arr.pop();
        tempOpp = arr.pop();
        if (tempOpp == "+") {
            total = total - tempNum;
        } else {
            total = total + tempNum;
        }
    }
    undoAnim();
    display("#result",total);
    history();
}

// let undoAnim = function() {
//     let getUndo = document.querySelector("#undo");
//     if (arr.length == 0){
//         getUndo.style.backgroundColor = "#283149";
//         getUndo.innerHTML = " "
//         getUndo.style.cursor = "default"
//     } else {
//         getUndo.style.backgroundColor = "#404B69";
//         getUndo.innerHTML = "undo"
//         getUndo.style.cursor = "pointer"
//     }
// }

let undoAnim = function() {
    let getUndo = document.querySelector("#undo");
    if (arr.length == 0){
        getUndo.style.visibility = 'hidden';
    } else {
        getUndo.style.visibility = 'visible';
        // getUndo.innerHTML = "undo"
    }
}

let display = function(divId,num) {
    document.querySelector(divId).innerHTML = num;
}

let history = function(num) {
    document.querySelector("#history").innerHTML = arr.join(" ");
}

