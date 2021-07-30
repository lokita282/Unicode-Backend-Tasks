var n = prompt('enter n')
var inputArray = []; 
var wordArray = []
var distinctCount = 0;

for(var i=0; i<n; i++) {
	
	inputArray[i] = prompt('Enter Element ' + (i+1));
}

distinctCount = new Set(inputArray).size;

console.log(inputArray)
console.log('No. of distinct words is '+ distinctCount);

function find_duplicate_in_array(array){
  const count = {}
  
  array.forEach(element => {
      if (count[element]) {
         count[element]++
         return
      }
      count[element] = 1
  })

  let repeatedValuesArray = Object.values(count)

  return repeatedValuesArray
}

console.log(find_duplicate_in_array(inputArray))
