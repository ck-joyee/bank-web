document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-input');
    const newdepositAmountString = depositField.value;
    const newdepositAmount = parseFloat(newdepositAmountString);

    // Get the current deposite total
    const depositTotalElement = document.getElementById('deposit-total');

    const previousdepositTotalString = depositTotalElement.innerText;
    const previousdepositTotal = parseFloat(previousdepositTotalString);
    
    const currentDepositeTotal = previousdepositTotal + newdepositAmount;

    depositTotalElement.innerText = currentDepositeTotal;


    //  Get balance current Total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);


    const currentTotalBalance = previousBalanceTotal + newdepositAmount;
    balanceTotalElement.innerText = currentTotalBalance;

    depositField.value = '';
})