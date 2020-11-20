function amountToCoins(amount, coins)
{
    if (amount === 0) {
        return [];
    } 
    else {
        if (amount >= coins[0]) {
            let sum = (amount - coins[0]);
            return [coins[0]].concat(amountToCoins(sum, coins));
        } else {
            coins.shift();
            return amountToCoins(amount, coins);
        }
    }
}

