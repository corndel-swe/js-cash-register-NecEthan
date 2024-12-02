import { drawer } from '../drawer.js'

// Level 4

/**
 * Returns true if it is possible to make the target amount out of the cash in the drawer
 * Returns false if it is not possible
 * @param {number} target - the amount of money to try and make
 * @param {object[]} drawer
 * @returns {boolean} whether it is possible to make the amount from the drawer
 */

export function canMakeAmount(target, drawer) {

  let listOfMoney = [];
  for (let currency of drawer) {
    for (let i = 0; i < currency.quantity; i++) {
      listOfMoney.push(currency.value);
    }
  }
  console.log(listOfMoney)

 

  return false; 
}

