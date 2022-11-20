

// login button event handler
const loginBtn = document.getElementById("login");
const ransactionArea = document.getElementById("transaction-area");
ransactionArea.style.display = "none";
    loginBtn.addEventListener("click",function(){
           const loginArea = document.getElementById("login-area");
           loginArea.style.display = "none"; 
           
           ransactionArea.style.display = "block";
    }); 


// deposit button event handler

const depositBtn = document.getElementById("addDeposit");

depositBtn.addEventListener("click",function(){

           const depositAmount = document.getElementById("depositAmount").value;
           const depoNumber = parseFloat(depositAmount);

           updateSpanText("currentDeposit",depoNumber);
           updateSpanText("currentBalance",depoNumber);
      
           document.getElementById("depositAmount").value = "";
});

//withDraw button event handler
const withDrawBtn = document.getElementById("calcWithDraw");

   withDrawBtn.addEventListener("click",function(){
              const withDrawAmount = document.getElementById("withDrawAmount").value;
              const withDrawAmountNumber = parseFloat(withDrawAmount);

              updateSpanText("addwithDraw",withDrawAmountNumber);
              updateSpanText("currentBalance",-1 *  withDrawAmountNumber);

              document.getElementById("withDrawAmount").value = "";
   });


    function updateSpanText(id,depoNumber){
       console.log(id,depoNumber)
       const current = document.getElementById(id).innerText;
       const currentNumber = parseFloat(current);
       const total = depoNumber + currentNumber;
       document.getElementById(id).innerText = total;
    }





// depositBtn.addEventListener("click",function(){
        
//       // deposit money 
//        const depositAmt = document.getElementById("depositAmount");//from input field
//        // const depositAmount = document.getElementById("depositVal");//from span tag
//        const depoNumber = parseFloat(depositAmt.value);
//        let depoVal = parseFloat(document.getElementById("depositVal").innerText);
//        console.log(depoVal);
        
//        let totalDeposit = depoNumber + depoVal;
//        document.getElementById("depositVal").innerText = totalDeposit;       
//        depositAmt.value = "";

//        // balance after deposit
//        updateSpanText("depositVal",0)
//        updateSpanText("balance",totalDeposit) ;
        
//         // console.log(totalBalance);
         
     
// });

 
 