var accounts = [
    {
      acno: 1000, ac_type: "savings", balance: 5000, transactions: [
        { to: 1001, amount: 500, note: "ebill", method: "g-pay" },
        { to: 1002, amount: 600, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
      ]
    },
    {
      acno: 1001, ac_type: "savings", balance: 6000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1002, ac_type: "current", balance: 8000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1001, amount: 5000, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1003, ac_type: "current", balance: 16000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1001, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
  
  ]

  //  q1  total number accounts
//console.log(accounts.length);
   
//q2  print all account numbers whose ac-type savings
//accounts.filter(data=>data.ac_type=="savings").forEach(account=>console.log(account.acno))

//q3 print balance of acno=1000
//var balance=accounts.find(data=>data.acno==1000).balance
//console.log(balance);


//q4 print all g-pay transaction details

//var transaction=accounts.map(data=>data.transactions).flat().filter(t=>t.method=="phone-pay")
//console.log(transaction);


//q4 print credit transcation's of 1002
//var transaction=accounts.map(data=>data.transactions).flat().filter(t=>t.to==1002)
//console.log(transaction);
var debitTransaction=accounts.find(data.data.acno==1002).transactions


//q5 print highest balance account details

var highbalance=accounts.reduce((b1,b2)=>b1.balance>b2.balance?b1:b2)
console.log(highbalance);

//q6 print transaction history of 1002

//print all trasaction ammount>500

//var transaction=accounts.map(data=>data.transactions).flat().filter(am=>am.amount>500)
//console.log(transaction);