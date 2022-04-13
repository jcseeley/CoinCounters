export default function coinCounter(money, coins = {}) {
  if (isNaN(money) || money < 0) {
    return;
  } else if (money >= .25) {
    coins.quarters = Math.floor(money/.25);
    return coinCounter(parseFloat((money - (Math.floor(money/.25) * .25)).toFixed(2)), coins);
  } else if (money >= .1) {
    coins.dimes = Math.floor(money/.1);
    return coinCounter(parseFloat((money - (Math.floor(money/.1) * .1)).toFixed(2)), coins);
  } else if (money >= .05) {
    coins.nickels = Math.floor(money/.05);
    return coinCounter(parseFloat((money - (Math.floor(money/.05) * .05)).toFixed(2)), coins);
  } else if (money >= .01) {
    coins.pennies = Math.floor(money/.01);
    return coinCounter(parseFloat((money - (Math.floor(money/.01) * .01)).toFixed(2)), coins)
  } else {
    return coins;
  }
}