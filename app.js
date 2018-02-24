//sum of 1 to 1000 numbers using for loop

var sum_for = 0;
var i; //counter variable
for ( i=1; i<=1000;i++){ //incrementing i using for loop
	sum_for +=i; //adding i each time 
}
console.log("Sum of 1 to 1000 is : "+sum_for); //print in console



//sum of 1 to 1000 numbers using while loop

var sum_while = 0;
i=1; //counter variable
while(i<=1000){
	sum_while+=i; //adding i to sum_while
	i++; //incrementing i using while loop
}
console.log("Sum of 1 to 1000 is : "+sum_while);