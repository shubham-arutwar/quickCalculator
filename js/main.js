var total = 0, val, x = true, tempNum, tempOpp, arr=[];


function calc(val) {
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

function sw() {
    if (x == true) {
        x = false;
        display("#status","-");
    } else {
        x = true;
        display("#status","+");
    }   
}

function clr() {
    total = 0;
    arr = [];
    display("#result","0");
    history();
}

function undo() {
    tempNum = arr.pop();
    tempOpp = arr.pop();
    console.log(tempNum);
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

function disableUndo() {
    if (total == 0){
        console.log("total is zero");
        display("#undo"," ");
    }
}

function enableUndo() {
    display("#undo","undo")
}

function display(divId,num) {
    document.querySelector(divId).innerHTML = num;
}

function history(num) {
    document.querySelector("#history").innerHTML = arr.join(" ");
}