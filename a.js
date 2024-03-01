const { addListener } = require('nodemon');
const input = require('readline-sync')


// console.log("gii");


// console.log(typeof(a));

//let c= input.question("enter the string :  ")

//if (c==="madhu"){
//   console.log("asdfgj");
//}
//else if (c=="mayank"){
//    console.log("ertyuikol");
//}
//else{
//   console.log("kya pta");
//}




// let a= input.questionInt("enter the string : ")
// let b= input.questionInt("enter the string : ")
// let c= input.questionInt("enter the string : ")
// if (a>b && a>c){
//     console.log("a is greater");
// }
// else if (b>a && b>c) {
//     console.log("b is greater");
// }
// else { 
//     console.log("c is greater");
// }


// let a= input.questionInt("enter the string :  ")
// let b= input.questionInt("enter the string : ")
// let c= input.questionInt("enter the string : ")
// let d= input.questionInt("enter the string : ")
// if (a>b && a>c && a>d){
//     console.log("a is greater");
// } 
// else if(b>a && b>c && b>d){
//     console.log("b is greater");
// }
// else if (c>a && c>b && c>d) {
//     console.log("c is greater");
// }
// else {
//     console.log("d is greater");
// }



// let a=input.questionInt("enter the number: ")
// let sum = 0
// let i = a
// while (a>0) {
//     p=a%10
//     sum=(sum * 10) + (p)
//     a = Math.floor(a/10)
// }
// console.log(sum);
// if (i == sum) {
//     console.log("Yes");
// }
// else {
//     console.log("No");
// }

// let a=input.questionInt("enter the number: ")
// let sum = 0
// let n=a
// let i = 1
// while (i<n){
//     if(n%i==0){
//         sum+=i
//     } 
//     i++
// }
// console.log(sum);

// if (sum==a){
//     console.log("perfect number");
// }
// else {
//     console.log("not perfect numbe*
// ***
// *r");
// }


// let n=input.questionInt("enter the string: ")
// let x=input.questionInt("enter the string: ")
// var sum = 0;
// for (let i = 1; i <= n; i++){
//     var sol=(x**i)/i;
//     sum = sum + sol;
// }console.log(sum);


// let n=input.questionInt("enter the string: ")
// let x=input.questionInt("enter the string: ")
// var sum = 0;
// var a = 1;
// var p = 1;
// for (let i = 1; i <=n; i++) {
//       var sol= a*(x**p)/p
//       sum = sum + sol;
//         a*= -1;
//         p+=2;
// }
// console.log(sum);



// let n=input.questionInt("enter the string: ")
// let x=input.questionInt("enter the number: ")
// var sum = 0;
// var a = 1;
// var p = 1;
// var d = 1;
// for (var i = 1; i <=n; i++) {
//      for (d%2==0){
    
     
        
//       var sol= a*(x**p)/d
//       sum = sum + sol;
//         a*= -1;
//         p+=2;
//         d+=2;
//      }
//     }

// console.log(sum);






// let a=input.question("enter the string : ")
// let b=input.question("enter the string : ")
// let c=input.question("enter the string : ")
// let d=input.question("enter the string : ")
// if(a>b){
//     l=a
//     s=b
// }else{
//     l=b
//     s=a
// }if(c>d){
//     l1=c
//     s1=d
// }else{
//     l1=d
//     s1=c
// }if(l>l1){
//     l2=l
//     s2=l1
// }else{
//     l2=l1
//     s2=1
// }if(s>s1){
//     l3=s
//     s3=s1
// }else{
//     l3=s1
//     s3=s
// }
// if(s3>s2){
//     console.log(l3);
// }else{
//     console.log(s2);
// }


// let a=input.question("enter the string : ")
// for (let i = 1; i<=a; i++) {
//     let c ="";
//     for (let j = 1; j<=i; j++){
//     c+="*";
        
//     }
//     console.log(c);
// }


// let a=input.question("enter the string : ")
// for (let i = a; i>=1; i--) {
//     let c ="";
//     for (let j = 0; j<i; j++){
//     c+="*";
        
//     }
//     console.log(c);
// }


// let a=input.question("enter the string : ")
// let k=1
// for (let i = 1; i<=a; i++) {
//     let c ="";
//     for (let j = 1; j<=i; j++){
//         c+=k;
//         k++
//     }
//     console.log(c);
// }


// let a=input.question("enter the string : ")
// for (let i = 0; i<=a; i++) {
//     let c="";
//     for (let j = 1; j<=i; j++) {
//         c+=j;
//     }
//     for (let j=i-1; j>0; j--){
//         c+=j;
//     } 
//     console.log(c);
// }

// let a=input.question("enter the string : ")
// let k=0*2
// for (let i = 0; i <=a; i++) {


// for (let j = 0; j <=i; j++) {
    
//         if(j==1){
//             console.log(k,end="");
//         }
    
//     else{
//         console.log(k,end="");
//     }
//     k+=2;
// }
// }  
    


// let a=input.question("enter the string : ")
// let k= 0*2
// for (let i = 0; i<a; i++) {
//     let c="";
//     for (let j = 0; j<=i; j++) {
//     c+=k+"";
//     k+=2;
//     }
// }
// console.log(c);


// let a=input.question("enter the string : ")
// let k=0*2
// let i=1
// if (i<=a) {
//     let j=1
//     if (j<=i) {
//         if (j==i) {
//             console.log(k,end="");
            
//         }
//         else{
//             console.log(k,end="");
//         }
//         k+2;
//         j+1;
//     }
//     i++;
// }

// let a=input.question("enter the string : ")
// for (let i = 1; i<=a; i++) {
//     let c ="";
//     for (let j = 1; j<=2*i-1; j++){
//     c+="*";
        
//     }
//     console.log(c);
// }



// let a = input.question("Enter the number: ");
// let i = 1;
// let j = 1;
// while (j <= a) {
//     console.log("*".repeat(i));
//     i += 2;
//     j++;
// }
// let k = i-4;
// while (k> 0) {
//     console.log("*".repeat(k));
//     k-=2
// }


// let a = input.question("Enter the number: ");
// let i = 1;
// let j = 1;
// let c = 2
// let str = "*"
// while (j < a) {
//     let pattern = str + " ";
//     console.log(pattern.repeat(c));
//     str += "*";
//     i += 2;
//     j++;
// }
// let p ="";
//     for (let j = 0; j<=a*2; j++){
//     p+="*";
//     }
//     console.log(p);
//     i=a-1;
//     while (i>0) {
//         let j=1;
//         let str ="";
//         while (j<=i) {
//             str +="*";
//             j++
//         }
//         console.log(str,str);
//     }
    // for (let i = a-1; i >= 1; i--) {
    //     let pattern = "";
    //     for (let j = 1; j <= i; j++) {
    //         pattern += "*";
    //     }
    //     for (let k = i; k < a-3; k++) {
    //         pattern+= " ";
    //     }
    //     pattern+= " ";
    //     for (let l = 1; l <= i; l++) {
    //         pattern += "*";
    //     }
    //     console.log(pattern);
    // }




// let a=input.questionInt("enter the number :")
// let i = 1;
// let m=a;
// let s=0
//  for (let i = 1; i <= m; i++) {
//     if (m % i === 0) {
//         s++;
//     }
// }
//  if (s == 2) {
//     console.log("it's a prime number");
//  }else{
//     console.log("it's not prime number");
//  }


// let n=input.questionInt( "enter the number :")
// let a=input.questionInt(`enter the ${1} element: `)
// let max=a
// let min=a
// let i=2
// while (i<=n) {
//     num=input.questionInt(`Enter the ${i} element: `)
//     if(num>max){
//         max=num
//         max=max
//     }
//     if(num<min){
//         min=num
//         min=min
//     }
//     i++;
// }console.log(max,min);

// let n=input.questionInt( "enter the number :")
// let a=input.questionInt(`enter the ${1} element: `)
// let max1 = a;
// let max2 = a;
// let i = 2;
// while (i <= n) {
//     let num = input.questionInt(`Enter the ${i} element: `);
//     if (num > max1) {
//         max2 = max1;
//         max1 = num;
//     } else if (num > max2) {
//         max2 = num;
//         max1 = max2;
//     }

//     i++;
// }
// console.log(max2);



// let a=input.questionInt("enter the number :")
// let b=input.questionInt("enter the number :")
//  let k = a*b;
//  while(a%b !=0){
//     var s = a%b;
//     a=b;
//     b=s;
//  }
//  console.log("HCF = "+b,"LCM = "+k/b);


// let a = input.question("Enter the value of N: ");
// for (let i = 1; i <= a; i++) {
//     let c = "";
//     for (let j = a; j >= a - i + 1; j--) {
//         c += j + " ";
//     }
//     for (let k = a - i + 2; k <= a; k++) {
//         c += k + " ";
//     }
//     console.log(c);
// }
// for (let i = a - 1; i >= 1; i--) {
//     let c = "";
//     for (let j = a; j >= a - i + 1; j--) {
//         c += j + " ";
//     }
//     for (let k = a - i + 2; k <= a; k++) {
//         c += k + " ";
//     }
//     console.log(c);
// }




// let a = input.questionInt("Enter the number: ");
// for (let i = 0; i < a; i++) {
//     let c = "";
//     for (let j = 0; j < a; j++) {
//         if (j == i || i == a - 1 || j == a-1-i || j==i-1 ) {
//             c += "0";
//         } else {
//             c += "x";
//         }
//         if (j < a - 1) {
//             c += " ";
//         }
//     }
//     console.log(c);
// }



// let a = input.question("Enter the number: ");

// for (let i = 1; i <= a; i++) {
//     let c = "";
//     if (i == a) {
//         for (let k = 1; k <= i; k++) {
//             c += "* ";
//         }
//     } else {
//         for (let j = 1; j <= i; j++) {
//             if (j == 1 || j == i) {
//                 c += "* ";
//             } else {
//                 c += ""; 
//             }
//         }
//     }
//     console.log(c);
// }



// let a = input.question("Enter the number: ");
// for (let i = 1; i <= a; i++) {
//     let c = "";
//     if (i == 1|| i== a) {
//         for (let k = 1; k <= a; k++) {
//             c += "* ";
//         }
//     } else {
//         for (let j = 1; j <= a; j++) {
//             if (j == 1 || j == a ) {
//                 c += "* ";
//             } else {
//                 c += ""; 
//             }
//         }
//     }
//     console.log(c);
// }




// 3) N=4
// *
// * *
// * *
// * *
// * *
// * *
// *


// let a = input.question("Enter the number: ");

// for (let i = 1; i <= a; i++) {
//     let c = "";
//         for (let j = 1; j <= i; j++) {
//             if (j == 1 || j == i) {
//                 c += "* ";
//             } else {
//                 c += ""; 
//             }
//         }
    
//     console.log(c);
// }
// for (let i = a-1 ; i >= 1; i--) {
//     if (i === 1) {
//         console.log('*');
//     } else {
//         console.log('* *');
//     }
// }



// *********
// *       *
// *       *
// *       *
// *********

// let a = input.question("Enter the number: ");
// for (let i = 1; i <= a; i++) {
//     let c = "";
//     if (i == 1 || i == a) {
//         for (let k = 1; k <= a; k++) {
//             c += "* ";
//         }
//     } else {
//         for (let j = 1; j <= a; j++) {
//             if (j == 1 || j == a) {
//                 c += "* ";
//             } else {
//                 c += "  "; 
//             }
//         }
//     }
//     console.log(c);
// }


// N=4
// * * * *
// * *
// * *
// *
// * *
// * *
// * * * *

// let a = input.question("Enter the number: ")

// for (let i = 1; i <= a-1; i++) {
//     let c = "";
//         for (let j = 1; j <= i; j++) {
//             if (j === 1 || j === i  || j===a) {
//                 c += "* ";
//             } else {
//                 c += ""; 
//             }
//         }
    
//     console.log(c);
// }let str="*"
// for (let i = a ; i >= 1; i--) {
//     let m= str + " "
//     if (i === 1 || i===a ) {
//         console.log(m.repeat(a));
//     } else {
//         console.log('* *');
//     }
// }


// Take a number N from the user as input and repeatedly find the sum of the digits 
// of the number till you get a single digit. Print that digit. Example: 
// 678 -> 6+7+8 = 21 -> 2+1 = 3


// let a=input.questionInt("enter the number: ")
// let sum = 0
// let i = a
// while (a>0) {
//     p=a%10
//     sum=sum+p 
//     a = Math.floor(a/10)
//     } 
// // console.log(sum);
// let b=sum
// let add=0
// while (sum>0) {
//     j=sum%10
//     add=add+j
//     sum=Math.floor(sum/10)
// }
// console.log(add);


// Write a program to print only the prime factors of a given
//  number 'N'. Take N from the user as input.

// let a=input.questionInt("enter the number: ")
// let i=2
// while (a != 1) {
//     if (a%i == 0) {
//         a=Math.floor(a/i)
//         console.log(i);
//     }else{
//         i++;
//     }
// }



// Write a program to take a number and print the count 
// of the prime numbers that are strictly less than a number.


// let a=input.questionInt("enter the number :")
// let count=0;
//  for (let i = 2; i < a; i++) {
//     for (let j = 2; j < i; j++) {
//         if (a % i === 0) {
            
//         }else{
//             count++;
//         }
        
//     }
//  }

// Write a program to take a number and print the count 
// of the prime numbers that are strictly less than a number.



// let a = input.questionInt("Enter the number: ");
// let count = 0;
// for (let i = 2; i < a; i++) {
//     let m = 1;

//     for (let j = 2; j < i; j++) {
//         if (i % j === 0) {
//             m = 0;
//             break;
//         }
//     }
//     count += m;
// }
// console.log(count);



// Write a program to print all Armstrong numbers in a given range of M to N.

// let m=input.questionInt("enter the number: ")
// let n=input.questionInt("enter the number: ")
// for (let num = m; num <= n; num++) {
//     let sum = 0;
//     let temp = num;
//     let digits = Math.floor(Math.log10(num)) + 1;
//     while (temp > 0) {
//         let digit = temp % 10;
//         sum += Math.pow(digit, digits);
//         temp = Math.floor(temp / 10);
//     }
//     if (sum === num) {
//         console.log(num);
//     }
// }



// Write a program to take N numbers from the user and 
// print the Highest Common Factor (HCF) of the given set 
// of numbers. Take N from the user as input.


// let n=input.questionInt( "enter the number :")
// let a=input.questionInt(`enter the ${1} element: `)
// let i=1;
// while(i<n)
// {
//     HCF = a;
//     var b=input.questionInt(`Enter the ${i} element: `)
//     while(b>0)
//     {
//         r = a % b;
//         a = b;
//         b = r;
//     }
//     i++;
// }
// console.log(a);




// let n=input.questionInt( "enter the number :")
// let arr=[1,2,3,4,5,6,7,8,9]
// arr.splice(3,1)
// console.log(arr);

let n=input.questionInt("enter the number :")
let m=input.questionInt("enter the number :")
let arr=[n]
let arr1=[arr]
let arr2=[m]
let i=0
while (condition) {
    
}