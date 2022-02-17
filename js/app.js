
// total expenses and income calculation

function totalExpensesAndIncome(values) {
  const getInputValue = document.getElementById(values);
  if ((getInputValue.value < 0) || (getInputValue.value.length == '0')) {
    document.getElementById('error').style.display = 'block';
    return;
  } 
  else {
    document.getElementById('error').style.display = 'none';
    const inputBoxValue = getInputValue.value;
    const balanceAndCosts = parseInt(inputBoxValue);
    return balanceAndCosts;
  }
  
}


document.getElementById('calculate').addEventListener('click', function () {

  // income
  const incomeBalance = totalExpensesAndIncome('income-field');

  // all costs
  const foodCost = totalExpensesAndIncome('food-cost')
  const rentCost = totalExpensesAndIncome('rent-cost')
  const clothesCost = totalExpensesAndIncome('clothes-cost')

  const totalCosts = foodCost + rentCost + clothesCost;

  // remaining balance after minus costs

  const remaining = incomeBalance - totalCosts;

  console.log(remaining)

  // update balance and costs in display

  const displayCosts = document.getElementById('total-expenses');
  displayCosts.innerText = totalCosts;

  const displayBalance = document.getElementById('total-balance');
  displayBalance.innerText = remaining;
  

});


//  saving calculation

document.getElementById('saving-btn').addEventListener('click', function () {
  // balance after minus cost 
  const displayBalance = document.getElementById('total-balance');
  const save = document.getElementById('saving-percentage');
  const savingValue = save.value;
  const saving = (displayBalance.innerText / 100) * savingValue;

  const remainingBalance =  displayBalance.innerText - saving;

  // update saving balance and remaining balance

  const savings = document.getElementById('saving-amount').innerText = saving;
  const remainingAfterAllCost = document.getElementById('remaining-balance').innerText = remainingBalance;

});




























