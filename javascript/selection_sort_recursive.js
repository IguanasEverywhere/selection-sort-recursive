function selectionSortRecursive(arr) {
  // type your code here
  // logic is to get rid of smallest each time and build up array from there

  if (arr.length === 0) {
    return []
  }

  let minVal = Math.min(...arr)
  let minIdx = arr.indexOf(minVal)

  arr.splice(minIdx, 1)
  // remember it returns the value of the recursive call to HERE, where it was called. min and minIdx are not re-declared, it's already there in the stack
  let result = selectionSortRecursive(arr)
  result.unshift(minVal)
  return result



}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSortRecursive([3, -1, 5, 2]));

  console.log("");
}

module.exports = selectionSortRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution
