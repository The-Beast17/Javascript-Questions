/* 1 - Sum of two integers*/
// let a = 10 ;
// let b = 12;
// console.log(a + b);



/** 2- Print the messege along with values and sum\
	Ex - The sum of 45 & 12  = 57*/
// let a = 23
// let b = 45;
// console.log(`sum  of ${a} and ${b} = ${a + b}`);



/* 3- Accept two integers from user and print the sum\
	Ex - The sum of 45 & 12 = 57 */
// let a = +prompt("Enter Number a : ");
// let b = +prompt("Enter Number b: ");
// console.log(`sum  of ${a} and ${b} = ${a + b}`);



 /*4- Accept the User's name, age and print in following manner\
	Ex - Hello Shery, you are 12 years old. */
    // let n = prompt("Enter your name : ");
    // let age = +prompt("Enter your age : ");
    // console.log(`Hello ${n}, you are ${age} years old.`);




/*5- Solve Increment & decrement operator questions on */
// let a = 10;
//  // post Increment
// console.log(a++);// a = 11
 
//  // pre Increment
// console.log(++a);

// console.log(a+++a); //its look like (a++ + a)



/*6- Accept two numbers from user and swap their values\*/

    // let a = 10;
    // let b = 20;

    // //swap 
    // let temp = a;
    // a = b;
    // b = temp;
    // console.log(`a = ${a} and b = ${b}`);


/*Part 2 - Swap without using third variable\*/
    // let a = 10;
    // let b = 20;

    // a = a + b;
    // b = a - b;
    // a = a - b;
    // console.log(`a = ${a} and b = ${b}`);


 /*-----------------------------------MATH CLASS Day 7---------------------------------------------------------*/

/*7- Accept the length and width of a rectangle. Calculate & print the area and perimiter.*/
// let length = +prompt("Enter length : ");
// let width = +prompt("Enter width : ");

// let preimeter = 2 * (length + width);
// let area = length * width;
// console.log("Perimeter of rectangle", preimeter);
// console.log("area of rectangle", area);



/*8- Accept the parameters and calculate the Compound Interest & print it on STDOUT (Use Math class methods)*/
// let p = +prompt("Enter Principle");
// let r = +prompt("Enter rate");
// let t = +prompt("Enter time");

// let CI = p * Math.pow((1 + r/100), t);
// // .tofixed(n) is used to print number of digit after decimal
// console.log("Compound Interest : " + CI.toFixed(3)); 

/*9- Accept the three sides of triangle and calculate the area using herons formula*/
// let a = +prompt("Enter side 1");
// let b = +prompt("Enter side 2");
// let c = +prompt("Enter side 3");
// let s = Math.floor((a + b + c)/2);
// let res = (s * (s - a)*(s - b)*(s - c));
// let area = Math.sqrt(res);
// //math.floor remove the decimal value;
// console.log(" the area triangle : " + Math.floor(area)); 


/*10- Find surface area of sphere*/
// let r = +prompt("Enter radius");
// let area = 4 * Math.PI * (r*r);
// console.log(" surface area sphere : " + Math.floor(area)); 


/*11- Find circumference and area of circle*/
// let r = +prompt("Enter radius");
// let circumfrence = 2 * Math.PI * r;
// let area =Math.PI * (r*r);
// console.log(" circumference of circle : " + Math.floor(circumfrence)); 
// console.log(" area of circle : " + Math.floor(area)); 


/*-------------------------------If ELse Statement*/
/*12- Accept two numbers and print the greatest between them\*/
// let a = +prompt("Enter Number a : ");
// let b = +prompt("Enter Number b: ");
// if(a > b){
//     console.log("a is greater then b");
// }else if( a < b){
//     console.log("b is greater then a");
// }else{
//     console.log("a is equal to b");
// }


/*13- Accept the gender from the user as char and print the respective greeting message\
      Ex - Good Morning Sir (on the basis of gender)\*/

    //   let g = prompt("Enter genger if you are Male press m else if female press f");
    //   if(g === 'm'){
    //     console.log("Good Morning Sir");
    //   }else if(g === 'f'){
    //     console.log("Good Morning Mam");
    //   }else{
    //     console.log("invalid input");
    //   }

/*14- Extend the previous program and handle the wrong inputs.\
      Print Good Morning sir for input m or M & Good morning Maam for input F or f \
      else print Wrong Input\*/
    //   let g = prompt("Enter genger if you are Male press m else if female press f");
    //   if(g === 'm' || g === 'M'){
    //     console.log("Good Morning Sir");
    //   }else if(g === 'f' || g === 'F'){
    //     console.log("Good Morning Mam");
    //   }else{
    //     console.log("invalid input");
    //   }

/*15- Accept an integer and check whether it is an even number or odd.\*/
//   let n = +prompt("Enter number ");
//   if(n%2 == 0){
//     console.log(n + " is a Even number");
//   }else{
//     console.log(n + " is a odd number");
//   }
/*16- Accept name and age from the user. Check if the user is a valid voter or not.\
      Vaid - Hello Shery, You are a valid voter.\
      Invalid - Sorry Shery, you can't cast the vote.\*/
    //   let n = prompt("Enter name");
    //   let age = +prompt("Enter age : ");
    //   if(age >= 18){
    //     console.log(`Hello ${n}, you are valid Voter`);
    //   }else if(age > 0 && age < 18){
    //     console.log(`Hello ${n}, you can't cast the vote.`);
    //   }else{
    //     console.log("Invalid age");
    //   }


	/*Part 2 - Print after how many years the user will be eligible\*/
    // let n = prompt("Enter name");
    // let age = +prompt("Enter age : ");
    // if(age >= 18){
    //   console.log(`Hello ${n}, you are valid Voter`);
    // }else if(age > 0 && age < 18){
    //   console.log(`Hello ${n}, after ${18-age} years you can eligible to vote`);
    // }else{
    //   console.log("Invalid age");
    // }



/*17- Accept a day number between 1-7 and print the corresponding dayname.\*/
//   let day = +prompt("Enter day number");
//   if(day === 1){
//     console.log("Monday");
//   }else if(day === 2){
//     console.log("Tuesday");
//   }else if(day === 3){
//     console.log("Wednesday");
//   }else if(day === 4){
//     console.log("Thursday");
//   }else if(day === 5){
//     console.log("friday"); 
//   }else if(day === 6){
//     console.log("saturday"); 
//   }else if(day === 7){
//     console.log("sunday");
//   }else{
//     console.log("Invalid day number");
//   }


/*18- Accept three numbers and print the greatest among them\*/
// let a = +prompt("Enter number a");
// let b = +prompt("Enter number b");
// let c = +prompt("Enter number c");

// if(a > b && a > c) console.log("a is greater");
// else if(b > c && b > a) console.log("b is greater");
// else if(c > b && c > a) console.log("c is greater");
// else console.log("all number are  equal");


/*19- Accept a year and check if it a leap year or not (google to find out what's a leap year)\ */
// let  year = +prompt("Enter year");
// if(year % 400 == 0){
//    console.log("It is a Leap year");
// }else if(year % 100 != 0 && year % 4 == 0){
//     console.log("It is a Leap year");
// }else{
//     console.log("It is not a Leap year");
// }


/*20- Shop discount - Description on Graphic\*/
//  let price = +prompt("Enter price");
//  let total = 0;
 // if(price < 0 ){
 //     console.log("invalid price");
 // } else if(price >= 10000){
//     dis = price * 0.3;// 30% discount
//     price = price - dis;
//  }else if(price >= 5000){
//     dis = price * 0.25;// 25% discount
//     price = price - dis;
//  }else if(price >= 3000){
//     dis = price * 0.20;// 20% discount
//     price = price - dis;
//  }else if(price >= 1000){
//     dis = price * 0.10;// 10% discount
//     price = price - dis;
//  }else{
//     console.log("discount not applied Price is less than 1000");
//  }
//  console.log(price) ;

/*21- Bijli Bill - Description on Graphic\*/
// let units = +prompt("Enter units");
// let price = 0;
// if(units > 300){
//   price += (units - 300) * 25;
//   units = 300;
// }
// if(units > 200){
//   price += (units - 200) * 20;
//   units = 200;
// }
// if(units > 100){
//   price += (units - 100) * 15;
//   units = 100;
// }
// if(units > 0 && units <= 100){
//   price += units * 10;
// }
// console.log(price);

/*22- Accept an english alphabet from user and check if it is a consonent or a vowel;\ */ 
// let ch = prompt("Enter Alphabet ").charAt(0); // input acharacter
// if(ch <= 'A' || ch >= 'z') 
//     console.log("it is not an alphabet");
// else if(ch === 'a' ||ch === 'e' ||ch === 'i' ||ch === 'o' ||ch === 'u')
//    console.log(" it is a vowel"); 
// else
//    console.log("it is a consonent");


/* ------------------------------------------------------------------LOOPS Day 12 to 16---------------------------------------------------------------\
*/

/*23- Accept an integer and Print hello world n times\*/
//    let n = +prompt("Enter number");
//    for(let i = 0; i < n ; i++){
//     console.log("hello");
//    }


/*24- Print natural number up to n. \*/
//    let n = +prompt("Enter number");
//    for(let i = 1; i <= n ; i++){
//     console.log(i);
//    }

/*25- Reverse for loop. Print n to 1.\*/
    //   let n = +prompt("Enter number");
    //   for(let i = n; i >= 1 ; i++){
    //    console.log(i);
    //   }

/*26- Take a number as input and print its table\
       5 * 1 = 5\
       5 * 2 = 10 ... up to 10 terms\*/
    //    let n = +prompt("Enter number");
    //    for(let i = 1; i <= 10 ; i++){
    //     console.log(`${n} X ${i} = ${n*i}`);
    //    }


/*27- Sum up to n terms.*/
//    let n = +prompt("Enter number");
//    let sum = 0;
//    for(let i = 1; i <= n; i++){
//      sum += i;
//    }
//    console.log(sum);

/*
28- Factorial of a number\*/
// let n = +prompt("Enter number");
// let fact = 1;
// for(let i = 1; i <= n; i++){
//   fact *= i;
// }
// console.log(fact);

/*
29- Print the sum of all even & odd numbers in a range seperately.\*/
// let n = +prompt("Enter number");
// let sumEven = 0
// let sumOdd = 0;
// for(let i = 1; i <= n; i++){
//     if(i % 2 == 0){
//         sumEven += i;
//     }else{
//         sumOdd += i;
//     }
// }
// console.log("Even sum",sumEven);
// console.log("odd sum",sumOdd);



/*
30- Print all the factors of a number.\*/
    // let n = +prompt("Enter number");
    // for(let i = 1; i <= n; i++){
    //   if(n%i == 0) console.log(i);
    // }


/*31- Print the sum of all factors of a number, 50 -> 1 + 2 + 5 + 10 + 25 = 43\*/
    // let n = +prompt("Enter number");
    // let sum =0;
    // for(let i = 1; i <= n; i++){
    //   if(n%i == 0) sum += i;
    // }
    // console.log(sum);


/*32- Check if the number is Prime or not.\*/
    // let n = +prompt("Enter number");
    // let isprime = true;
    // for(let i = 2; i <= Math.floor(Math.sqrt(n)); i++){
    //   if(n == 1 || n%i == 0) {
    //     isprime = false;
    //     break;
    //   }
    // }
    // console.log(isprime);

/*33- Write a program to take two inputs a, b & find the value of a  raised to the power of b. \
	Ex - a = 2, b = 5\
	OP - 2^5 = 32\*/
    // let a = +prompt("Enter base");
    // let b = +prompt("Enter power");
    // let ans = 1;
    // for(let i = 1; i <= b; i++){
    //    ans *= a;
    // }
    // console.log(ans);

/*
34- Seprate each digit of a number and print it on the new line ex - 123 \
	OP\
		3\
		2\
		1\
*/
// let n = +prompt("Enter number");
// while(n != 0){
//     console.log(n%10);
//     n = Math.floor(n /10);
// }


/* 35- Sum of digits of a number, 936 = 18\*/
// let n = +prompt("Enter number");
// let sum = 0;
// while(n != 0){
//     sum += n%10;
//     n = Math.floor(n /10);
// }
// console.log(sum);


/*36- Accept a number and print its reverse\*/
// let n = +prompt("Enter number");
// let rev = 0;
// while(n != 0){
//     rev = (rev * 10) + (n%10);
//     n = Math.floor(n /10);
// }
// console.log(rev);

/*37- Accept a number and check if it is a pallindromic number (If number and its reverse are equal)\
       Ex - 12321 - Rerverse - 12321\*/

    //    let n = +prompt("Enter number");
    //    let temp = n;
    //    let rev = 0;
    //    while(n != 0){
    //        rev = (rev * 10) + (n%10);
    //        n = Math.floor(n /10);
    //    }
    //    console.log(temp == rev ? "pallindromeic number" : "Not a Pallindrome");

/*
38- Accept a number and check if it is a strong number or not (Sum of factorial of each digit)\
       Ex- 145 = 1! + 4! + 5! = 145\*/
    //    let n = +prompt("Enter number");
    //    let temp = n;
    //    let sum = 0;
    //    while(n != 0){
    //        let last = n%10;
    //        let fact = 1;
    //        for(let i = 1; i <= last; i++){
    //           fact *= i; 
    //        }
    //        sum += fact;
    //        n = Math.floor(n /10);
    //    }
    //    console.log(sum == temp ?"Strong Number" :"Not A Strng Number");


/*39- Automorphic number 5 = 25 = 625 = 390625, 6=36, 76 = 5776\
\ */
    //  let n = +prompt("Enter number");
    //  let sq = n * n;
    //  let ans = true;
    //  while(n != 0){
    //      let Nlast = n%10;
    //      let sqlast = sq%10;
    //      if(Nlast != sqlast){
    //         ans = false;
    //         break;
    //      }
    //      n = Math.floor(n /10);
    //      sq = Math.floor(sq /10);
    //  }
    //  console.log(ans);

    /*  ------------------------------------------------------------DO WHILE, SWITCH Day 17 to 19--------------------------------------------------------\*/
     /*40- Print hello until user gives wrong input using do while\*/
    //    let n = 0;
    //    do{
    //    n = +prompt("Enter 1 to print hello");
    //    console.log("hello");
    //    }while(n == 1);



     /*41- Make a choice based calculator using do while\*/

    //  let op = '0';
    //  let a = 0;
    //  let b = 0;
    //  do{
    //     op = prompt("Press Which operation you want perfom  + , - ,* ,/ or press 0 for exit").charAt(0);
    //     switch(op){
    //         case '+':{
    //             a = +prompt("Enter number a");
    //             b = +prompt("Enter number b");
    //             console.log("Addition " , a+b);
    //             break;
    //         }
    //         case '*':{
    //             a = +prompt("Enter number a");
    //             b = +prompt("Enter number b");
    //             console.log("Multiplication " , a*b);
    //             break;
    //         }
    //         case '-':{
    //             a = +prompt("Enter number a");
    //             b = +prompt("Enter number b");
    //             console.log("subtract " , a-b);
    //             break;
    //         }
    //         case '/':{
    //             a = +prompt("Enter number a");
    //             b = +prompt("Enter number b");
    //             console.log("Divide" , a/b);
    //             break;
    //         }
    //     }

    // }while(op != '0');
 
     /*42- Print Weekday using Switch\*/
    //  let n = +prompt("Enter Day number");
    //  switch(n){
    //     case 1 :{
    //        console.log("Monday");
    //        break;
    //     }
    //     case 2 :{
    //        console.log("Tuesday");
    //        break;
    //     }
    //     case 3 :{
    //        console.log("Wednesday");
    //        break;
    //     }
    //     case 4 :{
    //        console.log("thursday");
    //        break;
    //     }
    //     case 5 :{
    //         console.log("Friday");
    //         break;
    //     }
    //     case 6 :{
    //        console.log("Saturday");
    //        break;
    //     }
    //     case 7 :{
    //        console.log("Sunday");
    //        break;
    //     }
    //     default :{
    //        console.log("Invalid day");
    //        break;
    //     }
    //  }


     /*43- Question 22 using Switch\*/

    //  let ch = prompt("Enter alphabet").charAt(0);
    //  switch(ch){
    //     case 'a':{
    //         console.log("vovel")
    //         break;
    //     }
    //     case 'e':{
    //         console.log("vovel")
    //         break;
    //     }
    //     case 'i':{
    //         console.log("vovel")
    //         break;
    //     }
    //     case 'o':{
    //         console.log("vovel")
    //         break;
    //     }
    //     case 'u':{
    //         console.log("vovel")
    //         break;
    //     }
    //     default :{
    //         console.log("Consonent");
    //     } 
    //  }


     /*44- Project - Guess Game\
           Write a program that generates a random number and asks the user to guess what the number is.\
           If the user's guess is higher than the random number, the program should display "Too high, try again."\
           If the user's guess is lower than the random number, the program should display "Too low, try again."\
           The program should use a loop that repeats until the user correctly guesses the random number.\*/

        //    let random = Math.floor((Math.random() * 10)+1);
        //    let guess = -1;
        //    do{
        //      guess = +prompt("Guess any number from 1 to 10 press -1 for exit");
        //      if(guess == random){
        //          console.log("Congrats you guess the number");
        //          guess =-1;
        //      }else if(guess > random) console.log("your number is to High");
        //      else{
        //         console.log("your number is to low");
        //      }
        //   }while(guess != -1);


    /* 45- Project Restuarent v 1.0\*/
    // let ch = 0;
    // do{
    //     ch = +prompt("Press:\n 1 -> Indian \n 2 -> Itlian\n 3-> chinese \n 0 -> exit");
    //     switch(ch){
    //         case 1:{
    //             ch = +prompt("Press:\n 1 -> Chole bhature \n 2 -> paratha \n 3-> Dosa \n 0 -> exit");
    //             switch(ch){
    //                 case 1:{
    //                     console.log("Chole bhature -> 60 ruppes");
    //                     break;
    //                 }
    //                 case 2:{
    //                     console.log(" paratha -> 30 ruppes");
    //                     break;
    //                 }
    //                 case 3:{
    //                     console.log(" Dosa -> 50 ruppes");
    //                     break;
    //                 }default:{
    //                     console.log("Invalid input please try again...");
    //                 }
    //             }
    //             break;
    //         }
    //         case 2:{
    //             ch = +prompt("Press:\n 1 -> pasta \n 2 -> pizza \n 3-> Risotto \n 0 -> exit");
    //             switch(ch){
    //                 case 1:{
    //                     console.log("pasta -> 120 ruppes");
    //                     break;
    //                 }
    //                 case 2:{
    //                     console.log(" pizza -> 200 ruppes");
    //                     break;
    //                 }
    //                 case 3:{
    //                     console.log(" Risotto -> 500 ruppes");
    //                     break;
    //                 }default:{
    //                     console.log("Invalid input please try again...");
    //                 }
    //             }
    //             break;
    //         }
    //         case 3:{
    //             ch = +prompt("Press:\n 1 -> manchurian \n 2 -> Fried Rice \n 3-> Noodles \n 0 -> exit");
    //             switch(ch){
    //                 case 1:{
    //                     console.log("machuruan -> 80 ruppes");
    //                     break;
    //                 }
    //                 case 2:{
    //                     console.log(" Fried rice -> 100 ruppes");
    //                     break;
    //                 }
    //                 case 3:{
    //                     console.log(" Noodles -> 60 ruppes");
    //                     break;
    //                 }default:{
    //                     console.log("Invalid input please try again...");
    //                 }
    //             }
    //             break;
    //         }
    //     }

    // }while(ch != 0);

  /*  ------------------------------------------------------------NESTED LOOP / PATTERN Day 20 to 21----------------------------------------------\*/
/*
46- Right Triangle - Star\
	*\
	* *\
	* * *\
	* * * *\
	* * * * *\
*/
// let n = 5;
//  for(let i = 1; i <= n; i++){
//     let row = "";
//     for(let j = 1; j <= i; j++){
//         row += "* ";
//     }
//     console.log(row);
//  }

 /*   
47- Right Triangle - Number\
	1\
	1 2\
	1 2 3 \
	1 2 3 4\
	1 2 3 4 5\
*/
// let n = 5;
//  for(let i = 1; i <= n; i++){
//     let row = "";
//     for(let j = 1; j <= i; j++){
//         row += j + " ";
//     }
//     console.log(row);
//  }

/*
48- Right Triangle - Alphabet\
	A
	A B
	A B C
	A B C D
	A B C D E
*/
// let n = 5;
//  for(let i = 1; i <= n; i++){
//     let row = "";
//     for(let j = 0; j < i; j++){
//         row += String.fromCharCode(65 + j) + "  ";
//     }
//     console.log(row);
//  }

/*
49- Inverted Right Triangle
	* * * * *
	* * * *
	* * *
	* *
	*
 */

    // let n = 5;
    //  for(let i = 0; i < n; i++){
    //     let row = "";
    //     for(let j = 1; j <= n-i; j++){
    //         row += "* ";
    //     }
    //     console.log(row);
    //  }


/*50- Mirrored Right Triangle
	        *
	      * *
	    * * *
	  * * * *
	* * * * *
*/
    // let n = 5;
    //  for(let i = 1; i <= n; i++){
    //     let row = "";
    //     for(let j = 1; j <= n-i; j++){
    //         row += "  ";//2 back space foe 100% tilt
    //     }
    //     for(let k = 1; k <= i; k++){
    //         row += "* ";
    //     }
    //     console.log(row);
    //  }


/* 51- Triangle
	    *
	   * *
	  * * *
	 * * * *
	* * * * *	
*/
    // let n = 5;
    // for(let i = 1; i <= n; i++){
    //    let row = "";
    //    for(let j = 1; j <= n-i; j++){
    //        row += " ";//1 back space foe 50% tilt
    //    }
    //    for(let k = 1; k <= i; k++){
    //        row += "* ";
    //    }
    //    console.log(row);
    // }


/*52- V - Min Height = 3
		*       * 
		 *     *  
		  *   *   
		   * *    
		    * 
*/

//     let n = 5;
//     for(let i = 1; i <= n; i++){
//        let row = "";
//        for(let j = 1; j <= n*2; j++){
//             if(j == i || j == (n*2)-i){
//                row += "*";
//             } else{
//             row += " ";
//             }      
//        }
//        console.log(row);
//    }

/*
53- X\
		*        *
		  *   *
		    *
		 *     *
	   *         *
*/  

// let n = 6;
// for(let i = 0; i <= n; i++){
//    let row = "";
//    for(let j = 0; j <= n; j++){
//         if(j == i || j == n - i){
//            row += "*"; 
//         } else {
//            row += " ";
//         }      
//    }
//    console.log(row);
// }

/*---------------------------------------------------------------- -ARRAY Day 22 to 29-------------------------------------------------------------\*/

/*54- Accept size n from user and create a n size array then take n inputs into the and finally \
      Print the sum & Avg of all elements.\*/
    //   let n = +prompt("Enter size of an Array :");
    //   let arr = new Array(n);
    //   for(let i=0; i < n; i++){
    //      arr[i] = +prompt("Enter element " + i + " : ");
    //   }
      
    //   let sum = arr.reduce((Accumalator , current) => {
    //       return Accumalator + current ;
    //   } , 0);
    //   console.log("sum of elements : " + sum);
    //   console.log("Avg of elements : " + (sum/n));

/*55- Find the greatest element.\
{2, 96, 69, 77, 145, 20\} = Max element = 145 found at 4 index\*/
//  let arr = [2, 96, 69, 77, 145, 20];
//  let maxIndex = -1;
//  let maxElement = -1;
// arr.forEach((element , index) => {
//     if(element  > maxElement){
//         maxElement = element;
//         maxIndex = index;
//     }
// });
// console.log(`Max element is ${maxElement} at Index ${maxIndex}`);


/*56- Find the second greatest element \
      \{2, 96, 69, 77, 145, 20 , 145\} = Second greatest element = 96\*/
    //   let arr = [2, 96, 69, 77, 145, 20];
    //   let Index = -1;
    //   let firstMax = -1;
    //   let secMax = -1;
    //  arr.forEach((element , index) => {
    //      if(element  > firstMax){
    //          secMax = firstMax;
    //          firstMax = element;  
    //      }else if(element > secMax && element < firstMax){
    //         secMax = element;
    //         Index = index;
    //      }
    //  });
    //  console.log(`Second greater element is ${secMax} at Index ${Index}`);

/*57- Check if array is sorted in increasing order or not.\
       Ex 1 - \{ 1, 5, 8,  9, 10, 15 \} - OP = "YES"\
       Ex 2 - \{ 1, 8, 6, 9, 10, 15 \} - OP = "NO"\*/
    //    let arr = [1, 5, 8,  9, 10, 15];
    //    let ans = true;
    //    let curr = -1;
    //    arr.forEach((element , index) => {
    //        if(element < curr){
    //           ans = false;
    //           return;
    //        }
    //        curr = element;
    //    });
    //    console.log(ans);

/*58- Take n integer inputs from user and store them in an array. \
       Now, copy all the elements in an another array but in reverse order and print it.\*/
    //    let n = +prompt("Enter size of an Array :");
    //      let arr = new Array(n);
    //      for(let i=0; i < n; i++){
    //         arr[i] = +prompt("Enter element " + i + " : ");
    //      }
    //      let copyArray = new Array(n);
    //      let j = n-1;
    //      for(let i=0; i < n; i++){
    //         copyArray[i] = arr[j--];
    //      }   
    //      console.log(arr);
    //      console.log(copyArray);

/*59- Array left Rotation by 1\*/
        // let arr = [1,2,3,4,5,6,7];
        // let temp = arr[0];
        // //shifting
        // for(let i = 0; i < arr.length-1; i++){
        //    arr[i] = arr[i+1];
        // }
        // arr[arr.length-1] = temp;
        // console.log(arr);

    /*60- Array left rotation by K elements\*/
    // let arr = [1,2,3,4,5,6,7];
    // let k = 2; //number or times you rotate an array
    // k = k%arr.length; // optimization
    // while(k-- != 0){
    //    let temp = arr[0];
    //    //shifting
    //    for(let i = 0; i < arr.length-1; i++){
    //       arr[i] = arr[i+1];
    //    }
    //    arr[arr.length-1] = temp;
    // }
    // console.log(arr);
    
/*61- Array Reverse Without Using Extra space\*/
    // using two pointer
    // let arr = [1,2,3,4,5,6,7];
    // let i = 0;
    // let j = arr.length-1;
    // while(i < j){
    //     //swap
    //     let temp = arr[i];
    //     arr[i] = arr[j];
    //     arr[j] = temp; 
    //     i++;
    //     j--;
    // }
    // console.log(arr);


/*62- Linear Search an array - If element found print the index else -1\*/
    let arr = [1,2,3,4,4,5,6,7];
    let num = 4;
    let idx = -1;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == num){
            idx = i;
            break;
        }
    }
    console.log(idx);

     

