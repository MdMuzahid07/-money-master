
// total expenses and income calculation

function totalExpensesAndIncome(value) {
  const getInputValue = document.getElementById(value);
  const inputBoxValue = getInputValue.value;
  const balanceAndCosts = parseInt(inputBoxValue);
  
  return balanceAndCosts;
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
    // get input value of save input Box
  
});




























