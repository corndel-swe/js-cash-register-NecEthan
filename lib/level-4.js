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
    let amount = currency.value * currency.quantity
    listOfMoney.push(amount)
  }
  const list = listOfMoney
  console.log(list)

  for (let i=0; i < list.length; i++) {
    let num = list[i]
    
    for (let x=i; x < list.length; x++) {
     
      let result = Number(num) + Number(list[x])
      console.log(Number(num) + Number(list[x]))
      if (result == target) {
        return true
      }
    }

  }

  return false
 
}
