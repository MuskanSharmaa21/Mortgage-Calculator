function get_all_values(){
    let mortgage_amt = 0;
    let mortgage_term = 0;
    let mortgage_rate = 0;
    function show_amount() {
        let container = document.querySelector('.amt');
        let innerHTML = ''; 
        innerHTML += `
            <div class="pri">Mortgage Amount
                <div class="sign">$</div>
                <input class="Mortgage_amount" placeholder="Mortage Amount">
            </div>
            `;
        container.innerHTML = innerHTML; 
        let mortgage_amt_input = document.querySelector('.Mortgage_amount');
        
        if (mortgage_amt_input) {
            mortgage_amt = parseFloat(mortgage_amt_input.value) || 0; 
            console.log(mortgage_amt);
        } else {
            console.error("Element with class 'Mortgage_amount' not found.");
        }
    }

    function show_time() {
        let container = document.querySelector('.term');
        let innerHTML = ''; 
        innerHTML += `<div>Mortgage Term
            <span class="time">
                <input class="Mortgage_term" placeholder="Mortgage Term">
                <div class="years">Years</div>
            </span>
        </div>`;
        
        container.innerHTML = innerHTML; 
        let mortgage_term_input= document.querySelector('.Mortgage_term'); 
        
        if (mortgage_term_input) {
            mortgage_term = parseFloat(mortgage_term_input.value) || 0; 
            console.log(mortgage_term.value); 
        } else {
            console.error("Element with class 'Mortgage_term' not found.");
        }
        return mortgage_term;
    }

    function show_rate() {
        let container = document.querySelector('.rate'); 
        let innerHTML = ''; 
        innerHTML += `<div>Interest Rate
            <div class="int_per">
                <input class="rate_of_interest" placeholder="Interest Rate">
                <div class="per-sign">%</div>
            </div>
        </div>`;
        
        container.innerHTML = innerHTML; 
        let mortgage_rate_input = document.querySelector('.rate_of_interest'); 
        
        if (mortgage_rate) {
            mortgage_rate = parseFloat(mortgage_rate_input.value) || 0; 
            console.log(mortgage_rate.value); 
        } else {
            console.error("Element with class 'rate_of_interest' not found.");
        }
        return mortgage_rate;
    }
    return {
        mortgage_amt: show_amount(),
        mortgage_term: show_time(),
        mortgage_rate: show_rate()
    };
}
function display_final_repayment(){
    const { mortgage_amt, mortgage_term, mortgage_rate } = get_all_values();
    let final_repayment=(mortgage_amt*mortgage_rate*mortgage_term)/100;
    let monthly_repayment=final_repayment/(mortgage_term*12);
    let result_Element=document.querySelector('.result');
    result_Element.innerHTML=`
    
      <h3 class="heading-2">Your Results</h3>
     <p class="text"> Your results are shown below based on the information you provided. To adjust the results, edit the form and click "Calculate Repayments" again.</p>
     </div>
      <div class="monthly">Your Monthly Repayments
        <div class="mon-result">${monthly_repayment.toFixed(2)}</div>
      </div>
      <div class="total">Total you'll repay over the term
        <div class="total-result">${final_repayment.toFixed(2)}</div>
      </div>
  `;
}
window.onload = function() {
    display_final_repayment();
};