let total = 0, val , x = true, arr=[];


let  calc = function(val) {
    enableUndo();
    x ? total = total + val : total = total - val;

    if (x == true) {
        arr.push("+");
        arr.push(val);
    } else {
        arr.push("-");
        arr.push(val);
    }
    // (x == true) ? arr.push(`+ ${val}`) : arr.push(`- ${val}`); //arr=[`+ ${val}`,...arr]
    display("#result",total);
    history();
}

let sw = function() {
    if (x == true) {
        x = false;
        display("#status","-");
    } else {
        x = true;
        display("#status","+");
    }   
}

let clr = function() {
    total = 0;
    arr = [];
    display("#result","0");
    history();
}

let undo = function() {
    let tempNum, tempOpp;
    tempNum = arr.pop();
    tempOpp = arr.pop();
    if (total == 0) {
        
    } else {
        if (tempOpp == "+") {
            total = total - tempNum;
        } else {
            total = total + tempNum;
        }
    }

    disableUndo();
    display("#result",total);
    history();
}

let disableUndo = function() {
    if (total == 0){
        console.log("total is zero");
        display("#undo"," ");
    }
}

let enableUndo = function() {
    display("#undo","undo")
}

let display = function(divId,num) {
    document.querySelector(divId).innerHTML = num;
}

let history = function(num) {
    document.querySelector("#history").innerHTML = arr.join(" ");
}