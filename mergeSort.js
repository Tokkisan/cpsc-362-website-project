//merge sort algo
function mergeSort(arr, steps = []) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  //calls it on left and right
  const leftSorted = mergeSort(left, steps);
  const rightSorted = mergeSort(right, steps);

  //merges the sorted
  const merged = merge(leftSorted, rightSorted);

  //store the current step
  steps.push([...merged]);

  return merged;
}

function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  while (i < left.length) {
    result.push(left[i]);
    i++;
  }

  while (j < right.length) {
    result.push(right[j]);
    j++;
  }

  return result;
}

//starts sort and steps
function startMergeSort() {
  const inputArray = document.getElementById('input-array').value.split(',').map(Number);
  const stepsContainer = document.getElementById('steps-container');
  stepsContainer.innerHTML = '';

  //calls mergesort with input array and empty steps
  const sortedArray = mergeSort(inputArray, []);

  //displays each step
  sortedArray.forEach((step, index) => {
    const stepElement = document.createElement('div');
    stepElement.textContent = `Step ${index + 1}: [${step.join(', ')}]`;
    stepsContainer.appendChild(stepElement);
  });
}
