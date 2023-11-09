const decrementBtn=document.getElementById("decrementBtn");
const incrementBtn=document.getElementById("IncrementBtn");
const resetBtn=document.getElementById("displayValue");
incrementBtn.addEventListener("click",()=>{
    const value=Number(displayValue.innerText);
    if(value>=10){
        alert("10+ values are not allowed");
    }
    else{
        displayValue.innerText=value+1;
    }
});
decrementBtn.addEventListener("click", ()=>{
    const value=Number(displayValue.innerText);
    if(value>0){
        displayValue.innerText=value-1;
    }
    else{
        alert("Negative value not allowed");
    }
});

 
resetBtn.addEventListener("click",()=>{
    displayValue.innerText=0;
});