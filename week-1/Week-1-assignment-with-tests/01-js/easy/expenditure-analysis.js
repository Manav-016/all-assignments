/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let output_obj = {};

  transactions?.forEach((transaction) => {

    if(!output_obj[transaction.category]) {
      output_obj[transaction.category] = transaction.price;
    } else {
      output_obj[transaction.category] += transaction.price || 0; 
    }
  });

  let answer = [];
  Object.keys(output_obj).forEach((element) => {
    answer.push({
      "category": element,
      "totalSpent": output_obj[element]
    });
  });

  return answer;
}

module.exports = calculateTotalSpentByCategory;
