function maxSubarray(arr) {
  let maxSum = -Infinity;
  let startIndex = 0;
  let endIndex = 0;
  
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      if (sum > maxSum) {
        maxSum = sum;
        startIndex = i;
        endIndex = j;
      }
    }
  }
  
  return arr.slice(startIndex, endIndex + 1);
}

function runAlgorithm() {
  //get input array
  const inputArrayString = document.getElementById("input-array").value;
  const inputArray = inputArrayString.split(",").map(x => Number(x.trim()));
  
  //clear previous output and steps
  document.getElementById("output-array").innerText = "";
  document.getElementById("output-sum").innerText = "";
  document.getElementById("steps").innerHTML = "";
  
  //initialize variables for max subarray and max sum
  let maxSubarray = [];
  let maxSum = -Infinity;
  
  //loop through all subarrays and find maximum subarray and maximum sum
  for (let i = 0; i < inputArray.length; i++) {
    for (let j = i; j < inputArray.length; j++) {
      const subarray = inputArray.slice(i, j + 1);
      const sum = subarray.reduce((acc, val) => acc + val, 0);
      
      // Add step to visualization
      const step = document.createElement("div");
      step.innerText = `Subarray: [${subarray}], Sum: ${sum}`;
      if (sum > maxSum) {
        step.classList.add("highlight");
      }
      document.getElementById("steps").appendChild(step);
      
      //update max subarray and max sum
      if (sum > maxSum) {
        maxSubarray = subarray;
        maxSum = sum;
      }
    }
  }
  
  //Display maximum subarray and maximum sum
  document.getElementById("output-array").innerText = `[${maxSubarray}]`;
  document.getElementById("output-sum").innerText = `${maxSum}`;
}
