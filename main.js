

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

           let currentBalance =  parseFloat(document.getElementById("currentBalance").innerText);

           if(currentBalance > 0){
            removeAttr("withDrawAmount");
            removeAttr("calcWithDraw");
           }
 

      
           document.getElementById("depositAmount").value = "";
           


});

//withDraw button event handler
const withDrawBtn = document.getElementById("calcWithDraw");

   withDrawBtn.addEventListener("click",function(){
              const withDrawAmount = document.getElementById("withDrawAmount").value;
              const withDrawAmountNumber = parseFloat(withDrawAmount);
              
              updateSpanText("addwithDraw",withDrawAmountNumber);
              updateSpanText("currentBalance",-1 *  withDrawAmountNumber);

              // adding some validiton on total balance 
                let validateBalance  = document.getElementById("currentBalance").innerText;
                const  validateBalanceNumber =  parseFloat(validateBalance);

                if(validateBalanceNumber <= 0){
                    document.getElementById("withDrawAmount").setAttribute("disabled",true);
                    let validateBalance = document.getElementById("currentBalance");
                    if(validateBalance.innerText <= 0){
                        validateBalance.innerText = 0;
                       document.getElementById("calcWithDraw").setAttribute("disabled",true)
                    }
                   
                }
  
             // error handling for withDraw Validation
                // if( withDrawAmountNumber > validateBalanceNumber){

                //         document.querySelector("#err p").style.opacity = 1;
                //         document.getElementById("currentBalance").innerText = 0;

                //         setTimeout(()=>{
                //             document.querySelector("#err p").style.opacity = 0;
                //         },4000)

                        // removeAttr("withDrawAmount");
                        // removeAttr("calcWithDraw");

                       
                // }

                 
                


              document.getElementById("withDrawAmount").value = "";
   });

  // remove attribute
   function removeAttr(id){
            document.getElementById(id).removeAttribute("disabled");
   }

    function updateSpanText(id,depoNumber){
    //    console.log(id,depoNumber)
       const current = document.getElementById(id).innerText;
       const currentNumber = parseFloat(current);
       const total = depoNumber + currentNumber;
       document.getElementById(id).innerText = total;
    }



 
