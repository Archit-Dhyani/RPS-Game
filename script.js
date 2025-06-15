let userscore=0;
let compscore=0;

const msg = document.querySelector("#msg");
const userss=document.querySelector("#urscore");
const comps=document.querySelector("#compscore");

const GenCompChoice=()=>{
    const options=["rock","paper","scissor"];
    let idx=Math.floor(Math.random() * 3);
    return options[idx];
} 
 const winner=(userchoice,compchoice,userwin)=>{
    if(userwin){
        userscore++;
        userss.innerText=userscore;
        msg.innerText="You Won!";
        msg.style.backgroundColor="green";
    }else{
        compscore++;
        comps.innerText=compscore;
         msg.innerText="You Lost!";
        msg.style.backgroundColor="red";
    }
 }

const playGame=(userchoice)=>{
    console.log("user choice ", userchoice);
   const compchoice=GenCompChoice();
   console.log("computer choice ", compchoice);
   if(userchoice===compchoice){
    msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "grey";
   } else{
    let userwin=true;
    if(userchoice==="rock"){
        userwin= compchoice==="scissor"?true:false;
    } else if(userchoice==="paper"){
        userwin=compchoice==="rock"?false:true;
    } else{
        userwin=compchoice==="rock"?false:true;
    }
    winner(userchoice,compchoice,userwin);
   } 

}

const choices=document.querySelectorAll(".choice");
choices.forEach((choice)=>{
choice.addEventListener("click",()=>{
    const userchoice=choice.getAttribute("id");
    playGame(userchoice);
})
})