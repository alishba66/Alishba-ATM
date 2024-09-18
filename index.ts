import inquirer from "inquirer";

let mybalance = 20000;
let mypin = 12345;

const pinanswer = await inquirer.prompt([{
    name: "pin",
    message:"enter your pin cord",
    type:"number",
}]);

if(pinanswer.pin===mypin){
    console.log("right pin cord")
}
else{console.log("try again")}

const operationAns= await inquirer.prompt([{
    name:"operation",
    message:"what do you want?",
    type:"list",
    choices:["withdraw","check balance","fast cash"],
}]);
if(operationAns.operation==="withdraw"){
    const amountAns=await inquirer.prompt([{
        name:"amount",
        message:"enter your amount",
        type:"number",
    }]);
    if(mybalance>=amountAns.amount){
    mybalance -=amountAns.amount
   console.log(`your remaining balance is:${mybalance}`)}
else console.log("insufficient balance ")
 
}
else if(operationAns.operation==="check balance"){
    console.log("your balance is :" +mybalance)
}
else if(operationAns.operation==="fast cash"){
    const cashAns= await inquirer.prompt([{
        name:"cash",
        message:"select any one",
        type:"list",
        choices:[5000,10000,15000,20000],
    }]);
    mybalance-=cashAns.cash
    {console.log(`your remaining balance is:${mybalance}`)}
}