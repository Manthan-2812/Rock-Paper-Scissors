let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
let you=document.querySelector("#user-score");
let comp=document.querySelector("#comp-score");
let msg=document.querySelector("#msg");
// MOST IMP PART OF CODE
const gencompchoice=()=>{
let options=["rock","paper","scissors"]
let random=Math.floor(Math.random()*3);
return options[random];
}
//end here
const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++
        you.innerText=userscore;
     //  console.log("YOU WIN !!!");
        msg.innerText=`YOU WIN !!! ${userchoice} BEATS ${compchoice}`;
        msg.style.backgroundColor="green";

       
    }else{
        compscore++
        comp.innerText=compscore;
       // console.log("YOU LOSE")
        msg.innerText=`YOU LOSE ${compchoice} BEATS ${userchoice}` ;
        msg.style.backgroundColor="red";
       
    }
}
const draw=()=>{
    //console.log("THE GAME WAS DRAW");
    msg.innerText="DRAW";
    msg.style.backgroundColor="blue";
}
const playergame=(userchoice)=>{
   // console.log(" user choice was =",userchoice);
    const compchoice=gencompchoice();
    //console.log("computer choice was =",compchoice);
  if(userchoice===compchoice){
      draw();
  }else{
    let userwin=true;
    if(userchoice==="rock"){
        //paper , scissors
        userwin=compchoice==="paper"? false :true;
    }else if(userchoice==="paper"){
        //rock , scissors
        userwin=compchoice==="scissors"? false :true;
    }else{
        //rock,paper
        userwin=compchoice==="rock"? false :true;
    }
    showwinner(userwin,userchoice,compchoice);
  }

}
choices.forEach((choice)=>{
   const userchoice=choice.getAttribute("id");
    choice.addEventListener("click",()=>{
     //console.log("choices was clicked",userchoice);
     playergame(userchoice);
    })
})