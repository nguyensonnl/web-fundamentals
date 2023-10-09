//sum number
function sumNumber(num){
	let result = 0;
	while(num > 0){
		let temp = num % 10;
		result += temp;
		num = Math.floor(num / 10);
	}
	return result;
}
console.log(sumNumber(123));

//reverse number
function reverseNumber(num){
 let result = 0;
 while(num > 0){
	let temp = num % 10;
	result = result* 10 + temp;
	num = Math.floor(num / 10);
 }
 return result;
}
console.log(reverseNumber(12345));