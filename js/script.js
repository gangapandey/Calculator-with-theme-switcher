//Calculator functions
const screen = document.getElementsByClassName("screen")[0];
let screenNum = screen.innerHTML;
let resultArr = [];
let result=0;

const delKey = document.getElementById("del");
delKey.addEventListener('click', () => {

    if(screenNum != 0) {
        screenNum = Math.floor(screenNum/10);
    }
    screen.innerHTML = screenNum;
});

const resetKey = document.getElementById('reset-key');
resetKey.addEventListener('click', () => {
    resultArr = [];
    result = '';
    screenNum = 0;
    screen.innerHTML = screenNum;
});

const keys = document.getElementsByClassName("key");
for(let i =0; i <keys.length; i++){
    keys[i].addEventListener('click', changeScreenNum);
}

function changeScreenNum(ev) {
    const keyNum = ev.target.innerHTML;

    if(screenNum == 0) {
        screenNum = keyNum;
    }
    else {
        screenNum = screenNum+keyNum;
    }
    screen.innerHTML = screenNum;
}


const operators = document.getElementsByClassName("operator");
for(let i =0; i <operators.length; i++){
    operators[i].addEventListener('click', addOperator);
}

function addOperator(ev){
    let operator = ev.target.innerHTML;
    if(operator == 'x') {
        operator = '*';
    }
    resultArr.push(screenNum);
    resultArr.push(operator);
    
    screenNum = 0;
}

const equals = document.getElementById('equals-key');
equals.addEventListener('click', sum);

function sum(ev){
    resultArr.push(screenNum);
    result = resultArr.join('');
    //evaluate string 
    screenNum = window.eval(result);
    //set solution in the screen window
    screen.innerHTML = screenNum;
    //reset
    resultArr = [];
    result = '';
    //and figure out how to chain sums
}
    