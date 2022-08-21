function player(inputField){
    const fivePlayerPrice = document.getElementById(inputField);
    const fivePlayerPriceString = fivePlayerPrice.value;
    const fivePlayerPriceInt = parseInt(fivePlayerPriceString);
    const fivePlayerTotalPrice = fivePlayerPriceInt * 5;
    return fivePlayerTotalPrice;
}

document.getElementById('btn-player-price').addEventListener('click',function(){
    const fivePlayerPrice = player('number-field');
    const playerExpenses = document.getElementById('player-expenses');
    playerExpenses.innerText = fivePlayerPrice;
});

document.getElementById('btn-total-money').addEventListener('click',function(){
    const fivePlayerPrice = player('number-field');
    const totalPrice = fivePlayerPrice + 2000 + 4000;
    const showTotalPrice = document.getElementById('total-field');
    showTotalPrice.innerText = totalPrice;
});

