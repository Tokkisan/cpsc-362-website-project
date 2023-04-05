function mergeSort(arr, steps) {
//if array has 1 or empty, it's done
        if (arr.length <= 1) {
          return arr;
        }
//array into 2 halves
        const middle = Math.floor(arr.length / 2);
        const left = arr.slice(0, middle);
        const right = arr.slice(middle);

//recursively sort left and right
        const sortedLeft = mergeSort(left, steps);
        const sortedRight = mergeSort(right, steps);

//merge sorted
        const merged = merge(sortedLeft, sortedRight);

//store step in visualizer
        steps.push([...merged]);

//return merged array
        return merged;
      }

      function merge(left, right) {
      //initialize empty array
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

      function runMergeSort() {
      //get input string and split into array
        const inputStr = document.getElementById('input').value;
        const inputArray = inputStr.split(',').map(Number);

			//container element to display steps
        const stepsContainer = document.getElementById('steps-container');
        stepsContainer.innerHTML = '';
        
        const steps = [];
      //call mergesort func
        const sortedArray = mergeSort(inputArray, steps);
        
			//display sorted array in steps
        for (let i = 0; i < steps.length; i++) {
          const stepElement = document.createElement('div');
          stepElement.textContent = `Step ${i + 1}: [${steps[i].join(', ')}]`;
          stepsContainer.appendChild(stepElement);
        }
      }
