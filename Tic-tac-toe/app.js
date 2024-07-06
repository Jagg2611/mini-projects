let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#Reset-button");
let newGameButton = document.querySelector('#New-button');
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

//player turn track

let turnX  = true; //Player 2
let count = 0;

//Create a 2D array to store all the winning patterns

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () =>{
    turn0 = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if(turnX){
        box.innerText = "X";
        turnX = false;
    } else{
        box.innerText = "O";
        turnX = true;
    }
    box.disabled = true;
    count++;

    let isWinner = checkWinner();

    if (count === 9 && !isWinner) {
    gameDraw();
    }
  });
});

const gameDraw = () => {
  msg.innerText = `Game was a Draw.`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const disableBoxes = () => {
    for(let box of boxes)
        {
            box.disabled = true;
        }
}

const enableBoxes = () => {
    for(let box of boxes)
        {
            box.disabled = false;
            box.innerText ="";
        }
}


const showWinner = (winner) =>{
    msg.innerText = `Congratulations Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () =>{
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val !="" && pos2Val !="" && pos3Val !="")
        {
            if(pos1Val===pos2Val && pos2Val===pos3Val && pos1Val==pos3Val)
            {
                showWinner(pos1Val);
                return true;
            }    
        }
    }
};

newGameButton.addEventListener("click", resetGame);
resetButton.addEventListener("click", resetGame);

