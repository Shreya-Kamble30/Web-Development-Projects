let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newBtn = document.querySelector(".newBTN");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const win = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];//Winning Patterns

const able = () =>{
    for(let box of boxes)
    {
        box.disabled = false;
    }
}

const resetGame = () =>
{
    turnO = true;
    msgContainer.classList.add("hide");
    able();

    boxes.forEach(box => {
        box.innerText = ""; // Clear text
        box.disabled = false; // Enable the box
    });
};

newBtn.addEventListener("click",resetGame);

reset.addEventListener("click",resetGame);

boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        if(turnO == true)
        {
            box.innerText = "O";
            turnO = false;
        }
        else
        {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        Winner();
    })
})

const disable = () =>{
    for(let box of boxes)
    {
        box.disabled = true;
        box.innerText = "";
    }
};
const Show = (winner) =>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disable();
};

const Winner = () =>{
    for(let pattern of win)
    {
        let post1 = boxes[pattern[0]].innerText;
        let post2 = boxes[pattern[1]].innerText;
        let post3 = boxes[pattern[2]].innerText;

        if(post1 != "" && post2 != "" && post3 != "")
        {
            if(post1 === post2 && post2 === post3)
            {
                console.log("Winner ",post1);
                Show(post1);
            }
        }
    }
};

