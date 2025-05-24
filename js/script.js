const display =document.getElementById("display");
function appendToDisplay(input){
 display.value += input;
}
function clearDisplay(input){
 display.value = "";
}
function calculator(input){
 try{
    display.value = eval(display.value);
 }
 catch(error){
    display.value ="Error";
 }
 
}