export default function coinCounterClosure(coins = {}) {
  return (quarters) => {
    return (dimes) => {
      return (nickels) => {
        return (pennies) => {
          if (quarters != undefined && isNaN(quarters) || dimes != undefined && isNaN(dimes) || nickels != undefined && isNaN(nickels) || pennies != undefined && isNaN(pennies) || quarters < 0 || dimes < 0 || nickels < 0 || pennies < 0) {
            return;
          } if (quarters >= .25) {
            coins.quarters = Math.floor(quarters/.25);
            return coinCounterClosure(coins)()(parseFloat((quarters - (Math.floor(quarters/.25) * .25)).toFixed(2)))(parseFloat((quarters - (Math.floor(quarters/.25) * .25)).toFixed(2)))(parseFloat((quarters - (Math.floor(quarters/.25) * .25)).toFixed(2)));
          } else if (dimes >= .1) {
            coins.dimes = Math.floor(dimes/.1);
            return coinCounterClosure(coins)()()(parseFloat((dimes - (Math.floor(dimes/.1) * .1)).toFixed(2)))(parseFloat((dimes - (Math.floor(dimes/.1) * .1)).toFixed(2)));
          } else if (nickels >= 0.05){
            coins.nickels = Math.floor(nickels/.05);
            return coinCounterClosure(coins)()()()(parseFloat((nickels - (Math.floor(nickels/.05) * .05)).toFixed(2)));
          } else if (pennies >= 0.01){
            coins.pennies = Math.floor(pennies/.01);
            return coinCounterClosure(coins)()()()();
          } else {
            return coins;
          }
        }
      }
    }
  }
}