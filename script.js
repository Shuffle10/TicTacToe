let boxesObj = document.getElementsByClassName("box");
let boxes =  Array.from(boxesObj)

let turn = 'X'
let counter = 0;
let gameOver = false;
let message = document.getElementById("messageBox")

let winAudio = new Audio("win.mp3")
let drawAudio = new Audio("draw.mp3")
let moveAudio = new Audio("move.mp3")


let winText = document.getElementById("winText");

let line = document.getElementsByClassName("line")[0]
let lineUtilityClass = ["h2","h3","v1","v2","v3","c1","c2"]

for (let e of boxes){
    e.addEventListener('click', () => {
        if(e.innerHTML== "" && gameOver == false){
            e.innerHTML=turn
            moveAudio.play()
            counter++;
            console.log(counter)

            if (counter>4){
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
        [2,4,6]     
    ]

    for (let condition of winConditions){
        if ((boxes[condition[0]].innerHTML!="")){
            if((boxes[condition[0]].innerHTML == boxes[condition[1]].innerHTML) && (boxes[condition[1]].innerHTML == boxes[condition[2]].innerHTML)){
                winText.innerHTML = `${turn} won the match`
                winText.style.display = "block"
                winText.style.color = "green"
                message.style.display="none"
                winAudio.play()
                if(condition[0]==0 && condition[1]==1 && condition[2]==2){
                    line.style.display = 'block';
                }

                else if (condition[0]==3 && condition[1]==4 && condition[2]==5){
                    line.style.display = 'block';
                    line.classList.add("h2")
                    
                }

                else if (condition[0]==6 && condition[1]==7 && condition[2]==8){
                    line.style.display = 'block';
                    line.classList.add("h3")
                }

                else if (condition[0]==0 && condition[1]==3 && condition[2]==6){
                    line.style.display = 'block';
                    line.classList.add("v1")
                }

                else if (condition[0]==1 && condition[1]==4 && condition[2]==7){
                    line.style.display = 'block';
                    line.classList.add("v2")
                }

                else if (condition[0]==2 && condition[1]==5 && condition[2]==8){
                    line.style.display = 'block';
                    line.classList.add("v3")
                }

                else if (condition[0]==0 && condition[1]==4 && condition[2]==8){
                    line.style.display = 'block';
                    line.classList.add("c1")
                }

                else if (condition[0]==2 && condition[1]==4 && condition[2]==6){
                    line.style.display = 'block';
                    line.classList.add("c2")
                }

                else {
                    line.style.display = 'none';
                }
                
                return gameOver=true;
            }
        }
     
    }

    if (counter==9 && gameOver==false){
        winText.innerHTML = `Its a draw`
        winText.style.display = "block"
        winText.style.color = "orange"
        message.style.display="none"
        drawAudio.play()
        return gameOver=true;
    }  
    }

    function reset(){
        gameOver = false
        message.style.display="block";
        winText.innerHTML = "";
        message.innerHTML = "Turn for X";
        line.style.display = 'none';
        line.classList.remove(...lineUtilityClass)

        turn = "X";
        counter=0;
        for (let i =0; i<9; i++){
            boxes[i].innerHTML="";
        }
    }





