// Import the readline module for handling user input
const readline = require('readline'); 

// Create an interface for reading user input and displaying output
 const rl = readline.createInterface({ // the use of createinterface is to read or write line of text and interact with user in command line.
    input: process.stdin,   // Get input from user
    output: process.stdout  // Show output to user
  }); 

// Function to get user input with a prompt and return it as a Promise
function getInput(prompt: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(prompt, (input: string) => {
      resolve(input); // Resolve the Promise with the user's input
    });
  });
}

// Main function to run the calculator
async function main() {
  console.log('Simple Calculator');

  // Get the first and second numbers from the user
  const num1Str = await getInput('Enter the first number: ');
  const num2Str = await getInput('Enter the second number: ');

  // Convert user input strings to numbers
  const num1 = parseFloat(num1Str);
  const num2 = parseFloat(num2Str);

// Get the desired operation from the user
  const operation = await getInput('Select operation (+, -, *, /): ');

 // Calculate the result based on the chosen operation
  let result: number;
  switch (operation) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      if (num2 !== 0) {
        result = num1 / num2;
      } else {
        console.log('Error: Division by zero.');
        rl.close(); // Close the program
        return;
      }
      break;
    default:
      console.log('Invalid operation.');
      rl.close(); // Close the program
      return;
  }

  // Display the result
  console.log(`Result: ${result}`);
  rl.close(); // Close the program
}

// Call the main function to start the calculator
main();

