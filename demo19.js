// ***************************Functions********************************


function sayMyname(){
    console.log("M")
    console.log("a")
    console.log("s")
    console.log("o")
    console.log("o")
    console.log("d")
}
//sayMyname ()

// function addTwonumbers(number1,number2){
//      console.log(number1 + number2)

// }

function addTwonumbers(number1,number2){
    //  let result = number1 + number2
    //    return result;
    return number1 + number2
       
}
const result = addTwonumbers(4,6)
//console.log("result:", result)

function logginUserMessage(userame ="me"){
  if(!userame){
    console.log("please enter a username");
    return
  }
return   `${userame} just logged in`
}

//console.log(logginUserMessage("Masood"));
console.log(logginUserMessage("Masood"));




