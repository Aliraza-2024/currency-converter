#!/usr/bin/env node

// step 1 currency converter rates
import inquirer  from "inquirer";
// in PKR
let convertion= {
  "PKR": {
    "USD":0.0036,
    "INR":0.30,
    "PKR":1
  },
// in INR

  "INR":{
    "USD":0.012,
    "PKR":3.33,
    "INR":1
  },
// in USD

  "USD":{
    "PKR":278.36,
    "INR":83.6955,
    "USD":1
  }
}
// step 2: using inquirer

const answer: {
  from: "PKR" | "USD" | "INR",
  to: "PKR" | "USD" | "INR"
// datatype declared

  amount: number
} = await inquirer.prompt([
  { 
    type: "list",
    name: "from",
    choices: ["PKR","USD","INR"],
    message: "Select your currency...?"
},
{
  type: "list",
    name: "to",
    choices: ["PKR","USD","INR"],
    message: "Select your convertion currency." 
},
// convertion amount

{
  type: "number",
  name: "amount",
  message: "Enter your convertion amount"
},
])
// step 3 output

const{from,to,amount}=answer;

// check input in given programs

if (from && to && amount) {
  // formula
  let result= convertion [from][to] * amount
  console.log(`your convertion from ${from} to ${to} is ${result}`)

}else {
  // generate error
  console.log("invalid inputs")
}