



function determineChange(){
    //add this so the page does not automatically refresh since the button is inside a form tag. Where the default is to refresh the page after submit
    if (event) event.preventDefault();
    
    //get inputs from the data fields from the html
    const customerCash = Number(document.getElementById('amount-received').value);
    const salePrice = Number(document.getElementById('amount-due').value);
    //grab all the html output elements 
    let dollarOut = document.getElementById('dollars-output');
    let quarterOut = document.getElementById('quarters-output');
    let dimeOut = document.getElementById('dimes-output');
    let nickelOut = document.getElementById('nickels-output');
    let pennyOut = document.getElementById('pennies-output');

    //refresh the data fields so the old values don't carry over to the next calculation
    dollarOut.textContent = 0;
    quarterOut.textContent=0;
    dimeOut.textContent = 0;
    nickelOut.textContent = 0;
    pennyOut.textContent = 0;
    

    //find how much change is due based on the price and money given. multiply by 100 to make the math easier
    let changeDue = Math.round((customerCash-salePrice)*100); 
    //while loop to continue going through conditions until changeDue is zero
    while(changeDue>0){ 
        //check to see how much each of the currencies can go into the changeDue and then subtract that much from the changeDue   
        if(changeDue >= 100){
            let numDollars = (Math.trunc(changeDue/100));
            changeDue -= (numDollars * 100);
            dollarOut.textContent = numDollars;
            //console.log(`Dollars: ${numDollars}`);
        }
        else if(changeDue >= 25){
            let numQuarters = (Math.trunc(changeDue/25));
            changeDue -= (numQuarters*25);
            quarterOut.textContent = numQuarters;
            //console.log(`Quarters: ${numQuarters}`);
        }
        else if(changeDue >= 10){
            let numDimes = (Math.trunc(changeDue/10));
            changeDue -= (numDimes * 10);
            dimeOut.textContent = numDimes;
            //console.log(`Dimes: ${numDimes}`);
        }
        else if(changeDue >= 5){
            let numNickels = (Math.trunc(changeDue/5));
            changeDue -= (numNickels * 5);
            nickelOut.textContent = numNickels;
            //console.log(`Nickels: ${numNickels}`);
        }
        else if(changeDue >= 1){
            let numPennies = (Math.trunc(changeDue/1));
            changeDue -= (numPennies * 1);
            pennyOut.textContent = numPennies;
            //console.log(`Pennies: ${numPennies}`);
        }
    }    
}

//execute the calculations when button is pressed
const calculateButton = document.getElementById('calculate-change')
calculateButton.addEventListener('click', determineChange);