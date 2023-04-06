function bubbleSort() {
            // Declare an empty array and get all the input elements
            var c = 1;
            const input = document.getElementById("input").value;
            const arr = input.split(",").map(Number);
						const output = document.getElementById("output");
           
            // Get the length of the array
            let len = arr.length;
            // Loop through the array to compare each adjacent pair of elements
            for (let a = 0; a < len; a++) {
              // Reduce the number of comparisons in each pass by subtracting the number of passes from the length of the array
              for (let b = 0; b < len - a - 1; b++) {
                // Swap elements if the element at the current index is greater than the element at the next index
                if (arr[b] > arr[b + 1]) {
                  let temp = arr[b];
                  arr[b] = arr[b + 1];
                  arr[b + 1] = temp;
                }
              }
              // console output for steps
              console.log(`Iteration ${a}: ${arr.join(', ')}`);
              printout(arr, c);
              c++;
            }
            // Display the sorted array in the HTML document
            return arr;
          }

          function printout(arr, counter) {
            const output = document.getElementById("output");
            const iteration = document.createElement("p");
            iteration.innerText = `Step ${counter}: ${arr.toString()}`;
            output.appendChild(iteration);
          }
