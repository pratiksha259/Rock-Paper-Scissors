let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userno=document.querySelector("#user-score");
const compno=document.querySelector("#comp-score");


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        console.log("choice was clicked",userchoice);
        play(userchoice);
    })
})

const play=(userchoice)=>{
    console.log("user choice=",userchoice);
    const compchoice=getcompchoice();
    console.log("comp choice=",compchoice);
    let userwin=true;

    if(userchoice===compchoice)
        draw();
    else{
        
        if(userchoice==="rock")
            {
                userwin=compchoice==="paper"?false:true;
            }
        else if(userchoice==="paper")
            {
                userwin= compchoice==="scissors"?false:true;
            }
        else{
            userwin= compchoice==="rock"?false:true;
        }

    }
    showwinner(userwin);
}
const showwinner=(userwin)=>{
    if(userwin){
        userscore++;
        userno.innerText=userscore;
        console.log("You win!");
        msg.innerText="YOU WIN!"
        msg.style.backgroungColor="green";
    }
    else{
        compscore++;
        compno.innerText=compscore;
        console.log("You lose!");
        msg.innerText="YOU LOSE!"
        msg.style.backgroungColor="red";
    }
}
const draw=()=>{
    console.log("Game was Draw");
    msg.innerText="GAME WAS DRAW!"
    msg.style.backgroungColor="blueviolet";
}
const getcompchoice=()=>{
    const options=["rock","paper","scissors"]
    const rndm= Math.floor(Math.random()*3)
    return options[rndm]
}