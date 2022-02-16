document.getElementById('calculate').addEventListener('click', function () {
    
     // main balance of total income
     const mainBalance = document.getElementById('income-filed');
    const totalIncome = mainBalance.value;
    
    
     // expenses
    
     const foodCost = document.getElementById('food-cost').value;
     const rentCost = document.getElementById('rent-cost').value;
    const clothesCost = document.getElementById('clothes-cost').value;
    
    const totalCost = parseInt(foodCost) + parseInt(rentCost) + parseInt(clothesCost);

    // minus total const with Income

    const balance = totalIncome - totalCost;


    const totalExpenses = document.getElementById('total-expenses');

    totalExpenses.innerText = balance;

    
      // update balance on the Balance display

    const remainingBalance = parseInt(totalIncome) - parseInt(balance);
    
      const updateBalance = document.getElementById('total-balance');
      const updateBalanceValue = updateBalance.innerText;

    
    updateBalance.innerText = remainingBalance;


});


document.getElementById('saving-btn').add




