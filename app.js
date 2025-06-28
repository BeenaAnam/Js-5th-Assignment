// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.
let num1 = 3;
let num2 = 5;
let sum = num1 + num2;
document.writeln("<h2>Q1.Sum of 3 and 5 is ", sum ,"</h2> ");
// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.

let subtract = num1 - num2;
document.writeln("<h2>Q2. Subtraction of 3 and 5 is ", subtract ,"</h2>");


let muliply = num1 * num2;
document.writeln("<h2> Multiplication of 3 and 5 is ", muliply ,"</h2>");
let divide = num1 / num2;
document.writeln("<h2> Division of 3 and 5 is ", divide ,"</h2>");

let modulus = num1 / num2;
document.writeln("<h2> Modulus of 3 and 5 is ", modulus ,"</h2>");
//3. Do the following using JS Mathematic Expressions
//a. Declare a variable.
document.writeln("<h1>Q3. Answer </h1>");
let myNumber ;
//b. Show the value of variable in your browser like “Value
//after variable declaration is: ??”.
document.writeln("<h2> Value after variable declaration is: ", myNumber ,"</h2>");
// c. Initialize the variable with some number.
myNumber = 5;

// d. Show the value of variable in your browser like “Initial
// value: 5”.
document.writeln("<h2> “Initial value: ", myNumber, " ”</h2>");

//e. Increment the variable.
myNumber++

// f. Show the value of variable in your browser like “Value
// after increment is: 6”.

document.writeln("<h2> “Increment the variable: ", myNumber, " ”</h2>");
//g. Add 7 to the variable.

myNumber+=7;

// h. Show the value of variable in your browser like “Value after addition is: 13”.
document.writeln("<h2> “Value after addition is: ", myNumber, " ”</h2>");

// i. Decrement the variable.
myNumber--;

// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
document.writeln("<h2> “Value after decrement is: ", myNumber, " ”</h2>");
// k. Show the remainder after dividing the variable’s value
//by 3.
let moduls= myNumber%3;
document.writeln("<h2> “The remainder is ", moduls, " ”</h2>");
//4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:
let ticketCost= 600;
let fiveTicketCost= 600*5;
document.writeln("<h2>Q4 Total cost of 5 tickets to a movie is  " ,fiveTicketCost, "PKR </h2> ");

// 5. Write a script to display multiplication table of any
// number in your browser. E.g
let table = 4;
document.writeln("<h2>Q5. Table of 4 </h2>")
document.writeln("<h3>", table , " x " , " 1 " , " = " , table*1 ,"</h3>");
document.writeln("<h3>", table , " x " , " 2 " , " = " , table*2 ,"</h3>");
document.writeln("<h3>", table , " x " , " 3 " , " = " , table*3 ,"</h3>");
document.writeln("<h3>", table , " x " , " 4 " , " = " , table*4 ,"</h3>");
document.writeln("<h3>", table , " x " , " 5 " , " = " , table*5 ,"</h3>");
document.writeln("<h3>", table , " x " , " 6 " , " = " , table*6 ,"</h3>");
document.writeln("<h3>", table , " x " , " 7 " , " = " , table*7 ,"</h3>");
document.writeln("<h3>", table , " x " , " 8 " , " = " , table*8 ,"</h3>");
document.writeln("<h3>", table , " x " , " 9 " , " = " , table*9 ,"</h3>");
document.writeln("<h3>", table , " x " , " 10 " , " = " , table*10 ,"</h3>");

// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.
// Conversion Formulae:

// The formula for converting Celsiusto Fahrenheit is: °F = (9/5 * Celsius) + 32 ;. 
let Celsius = 25 ;
let FahrenheitFormula = (9/5 * Celsius) + 32 ;
document.writeln("<h1>Q6. Answer </h1>");
document.writeln("<h4>",Celsius," °C is " , FahrenheitFormula , "°F", "</h4>" );

// The formula for converting Fahrenheit to Celsius is: °C = (°F - 32) * 5/9. 
let Fahrenheit = 70;
let CelsiusFormula = (Fahrenheit - 32) * 5/9;
document.writeln("<h4>",Fahrenheit," °F is " , CelsiusFormula , "°C", "</h4>" );

// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
//Compute the total cost & show the receipt in your browser.
let item1 = 650;
let item1Quantity = 3;
let item1Total = 650*3
let item2 = 100;
let item2Quantity = 7;
let item2Total = 100*7;
let ShippingCharges = 100;
let total = item1Total + item2Total + ShippingCharges;

document.writeln("<h1>Q7. Shopping Card </h1>")
document.writeln("<h3>a. Price of item 1 is ", item1 , "</h3>" );
document.writeln("<h3>b. Quantity of item 1 is ", item1Quantity , "</h3>" );
document.writeln("<h3>c. Price of item 2 is ", item2 , "</h3>" );
document.writeln("<h3>b. Quantity of item 2 is ", item2Quantity , "</h3>" );
document.writeln("<h3> e. Shipping charges ", ShippingCharges,"</h3>");
document.writeln("<h3> Total cost of your order is " ,total);

// document.writeln("3"-2+"2")
// console.log("3"-2+2+"2");

// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser
let totalMark = 980;
let obtainMark = 804;
let percentage = (obtainMark / totalMark *100 );
document.writeln("<h1>Q8. Marks Sheet </h1>");
document.writeln("<h3> Total marks :" ,totalMark ,"</h3>");
document.writeln("<h3> Mark obtained :" ,obtainMark ,"</h3>");
document.writeln("<h3> Percentage :" ,percentage ,"% </h3>");

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)
let US1$ = "104.80 ";
let SaudiRiyal = "28 PKR";
let totalAmount = 10 * 104.80 + 25 * 28;
document.writeln("<h1>Q9. Currency in Pakistani Rupees </h1>")
document.writeln("<h3> Total Currency in PKR: " , totalAmount , "</h3>");

// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression
let calculate = (5 * 10 / 2);
document.writeln("<h2>Q10. All calculations in a single expression 5*10/2 : ",calculate, "</h2>");
// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.

// Output them to the screen like so: “They are either NN or NN
// years old”.
let currentYear = 2016;
let birthYear = 1992;
document.writeln("<h1>Q11. Age Calculator </h1>");
document.writeln("<h3>Current Year: " ,currentYear, "</h3>");
document.writeln("<h3>Birth Year: " ,birthYear, "</h3>");
document.writeln("<h3>Your age is: ", currentYear-birthYear ,"</h3>");

// 12. The Geometrizer: Calculate properties of a circle.
//a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
document.writeln("<h1>Q12. The Geometrizer</h1>");

let radius = 20;
let π = 3.142;
let circumference = 2 * π *radius ;
document.writeln("<h3>Radius of circle is: " , radius, "</h3>");
document.writeln("<h3>The Circumference is:" , circumference,"</h3>");

let area =  π * radius * radius;

document.writeln("<h3>The Area is:" , area, "<h3>");

// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.
let favoriteSnack = "chocolate chip"
let currentAge = 15;
let maxAge = 65;
let perDaySnack = 3;
let estimateAmount= (maxAge - currentAge)*3;
document.writeln("<h1>Q13.The Lifetime Supply Calculator</h1>");
document.writeln("<h3> Favorite Snack: " , favoriteSnack, "<h3>");
document.writeln("<h3> Current Age: " , currentAge, "<h3>");
document.writeln("<h3> Estimated maximum age: " , maxAge, "<h3>");
document.writeln("<h3> Amount of per day Snack: " , perDaySnack, "<h3>");
document.writeln("<h3> You will need ",estimateAmount," to last you until the ripe old age ",maxAge,".<h3>");

