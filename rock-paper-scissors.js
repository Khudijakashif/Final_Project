let randomNumber;
let computerCounter=0;
let youCounter=0;
let images=document.querySelectorAll('.all');
let content= document.querySelector('#content');
let result=document.querySelector('.result');
for(let i=0;i<3;i++)
{
    images[i].addEventListener("click",()=>
    {
        randomNumber=Math.floor(Math.random()*3)+1;
        findanswer(i+1,randomNumber)
        
    })
}
const findanswer=(you,comp)=>{
    if(comp==1&&you==3)
    {
        computerwin()
        content.innerText="Computer win! Computer choose Rock and You choose Scissor";
    }
    else if(comp==1 && you==2)
    {
        youwin()
        content.innerText="You win! You choose Paper and Computer choose Rock";
    
    }
    else if(comp==1 && you==1)
    {
        same()
        content.innerText="Tie! Both choose Rock";
    }
    else if(comp==2&&you==1)
    {
        computerwin()
        content.innerText="Computer win! Computer choose Paper and You choose Rock";
    }
    else if(comp==2 && you==3)
    {
        youwin()
        content.innerText="You win! You choose Scissors and Computer choose Paper ";
    }
    else if(comp==2 && you==2)
    {
        same()
        content.innerText="Tie! Both choose Paper";
    }
    else if(comp==3&&you==2)
    {
        computerwin()
        content.innerText="Computer win! Computer choose Scissors and You choose paper";
    }
    else if(comp==3 && you==1)
    {
        youwin()
        content.innerText="You win! You choose Rock and Computer choose Scissors ";
    }
    else if(comp==3&& you==3)
    {
        same()
        content.innerText="Tie! Both choose Scissors";
    }
}
function computerwin()
{
    computerCounter=computerCounter+1;

    document.querySelector('.com-value').innerText=computerCounter;
}
function youwin()
{
    youCounter=youCounter+1;
   
    document.querySelector('.you-value').innerText=youCounter;
}
function same()
{
    document.querySelector('#content').innerText="Both are same";
}