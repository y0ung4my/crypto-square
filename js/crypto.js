/* 
Cryptosquare
A classic method for composing secret messages is called a square code.

The spaces and punctuation are removed from the English text and the 
characters are written into a square (or rectangle) 
and the entire message is downcased.

For example, the sentence "don't compare yourself to others, 
compare yourself to the person you were yesterday" is 69 characters long, 
so it is written into a rectangle with 8 rows and 9 columns.

The coded message is obtained by reading down the columns going left to right, 
outputting encoded text in groups of five letters. For example, the message 
above is coded as:

"daeer leweo rlref rerne fsyts rdtyt coooe acooo utnyy ouomr hyemr tpseo spsha eput"

Write a program that outputs the encoded version of a given block of text. 
Again, identify each individual behavior this application should demonstrate, 
and write a test for each. Tackle writing code for one behavior at a time and 
manually test each spec before moving onto the next one. All tests should be 
included in the project README.

The size of the square (number of columns) should be decided by the length 
of the message. If the message is a length that creates a perfect square 
(e.g. 4, 9, 16, 25, 36, etc), use that number of columns. If the message 
doesn't fit neatly into a square, choose the number of columns that corresponds 
to the smallest square that is larger than the number of characters in the message.
*/

//THIS CODE IS NOT MINE - PHIL CURRAN WROTE IT!

//Business Logic
function cryptoSquare(input) {

  let output = [];

  /*
  let output = [
    [a, d, g],
    [b, e, h],
    [c, f, i],
  ];
*/

  input = Array.from(input.toLowerCase().split(' ').join(''));

  let dimension = Math.ceil(Math.sqrt(input.length));

  console.log(`The dimension of your square should be: ${dimension} x ${dimension}`);
  
  for(let i = 0; i < dimension; i++) {
    output.push(input[0]);
    input = input.slice(1);
  }

  console.log(`After the first loop, the value of output is: ${output}`);
  console.log(`After the first loop, the remaining value of input is: ${input}`);

  for(let j = 0; j < dimension; j++) {
      output[j].push(input[0]);
      input = input.slice(1);
      // if (j = (dimension - 1)) {
      //   j = 0;
      // }
      // if (input[0] === undefined) {
      //   break;
      // }
  }

  // console.log(`After the second loop, the value of output is: ${output}`);

  for(let k = 0; k < dimension; k++) {
    output[k].push(input[0]);
    input = input.slice(1);
  }

  return output;
}

console.log(cryptoSquare('abc def ghi'));

//UI Logic
$(document).ready(function() {
  $("form#crypto-square").submit(function(event){
    event.preventDefault();
    const passage = $("#text-passage").val();
    $("#square").html(cryptoSquare(passage));
  });
});