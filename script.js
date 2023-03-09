let boxesObj = document.getElementsByClassName("box");
let boxes =  Array.from(boxesObj)
let turn = 'X'
let counter = 0;
let gameOver = false;
let message = document.getElementById("messageBox")
let winAudio = new Audio("win.mp3")
let drawAudio = new Audio("draw.mp3")


for (let e of boxes){
    e.addEventListener('click', () => {
        if(e.innerHTML== "" && gameOver == false){
            e.innerHTML=turn
            if (counter>3){
                checkResult();
            }
           changeTurn()
        }
        else{
            message.innerHTML= "Can't change!!"
        }
    });
}

function changeTurn(){
    turn=='X'?turn='O':turn='X'
    message.innerHTML = `Turn for ${turn}`
    counter++;
}

function checkResult(){
    let winConditions = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],      
    ]

    for (let condition of winConditions){
        if ((boxes[condition[0]].innerHTML!="")){
            if((boxes[condition[0]].innerHTML == boxes[condition[1]].innerHTML) && (boxes[condition[1]].innerHTML == boxes[condition[2]].innerHTML)){
                document.getElementById("winText").innerHTML = `${turn} won the match`
                document.getElementById("winText").style.display = "block"
                message.style.display="none"
                winAudio.play()
                return gameOver=true;
            }

            if (counter==8 && gameOver==false){
                document.getElementById("winText").innerHTML = `Its a draw`
                document.getElementById("winText").style.display = "block"
                document.getElementById("winText").style.color = "orange"
                message.style.display="none"
                drawAudio.play()
                return gameOver=true;
            }
        }
    }
    }


