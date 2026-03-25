// let color = "brown";
// if(color == "red") {
//     console.log("stop!");
// }

// if(color == "yellow") {
//     console.log("slow down");

// }

// if (color == "green") {
//     console.log("go");
// } else { 
//     console.log("traffic light is broken");
// }
document.body.style.backgroundColor = "grey";


// let age = 15;
// if(age>=18) {
//     console.log("you can vote");
// }
// else if(age< 18) {
//     console.log("you cannot vote")
// }

//if else
// let marks = 85;
// if(marks>=80) {
//     console.log("grade A+");

// }
// else if(marks>=60) {
//     console.log("grade A");
// }

// else if (marks>=33) {
//     console.log("grade B");
// }

// else if(marks<33) {
//     console.log("FAIL");
// }


// let age=17;
// if(age>=18) {
//     console.log("you can vote");
// }
// else {
//     console.log("you cannot vote");
// }



//create a that to calculate popcorn prices based on the size customer asked for:

// let size="XL";
// if(size=="XL") {
//     console.log("popcorn price is 250");
// } else if (size=="L") {
//     console.log("popcorn price is 200");
// }
// else if(size=="M") {
//     console.log("popcorn price is 150");
// }
// else {
//     console.log("popcorn price is 100");
// }

//nested if else
    // let marks = 65;
    // if(marks>=33) {
    //     console.log("PASS");
    //     if(marks>=80) {
    //         console.log("grade O");
    //     }else {
    //         console.log("grade A");
    //     }   
    // } else {
    //     console.log("FAIL");
    // }


    //logical operators
    
    // let marks = 45;
    // if(marks>=35 && marks<60) {
    //     console.log("grade C");
    // }

    //string letter starts with 'a' and length>3
    // let str="apple";
    // if((str[0] === 'a' ) && (str.length>3)) {
    //     console.log("string is good");
    // } else {
    //     console.log("string is not good");
    // }


    // let num=12;
    // if((num%3===0)&&((num+1==15)||(num-1==11))){
    //     console.log("SAFE");
    // } else {
    //     console.log("NOT SAFE");
    // }

    // let string ="";
    // if(string) {
    //     console.log("string is not empty");
    // } else {
    //     console.log("string is empty");
    // }

    // let num=0;
    // if(num) {
    //     console.log("number is not zero");
    // } else {
    //     console.log("number is zero");
    // }

    //switch statement
    // let color="red";
    // switch(color) {
    //     case "red":
    //         console.log("stop!");
    //         break;
    //     case "yellow":
    //         console.log("slow down");
    //         break;
    //     case "green":
    //         console.log("go");
    //         break;
    //     default:
    //         console.log("traffic light is broken");
    // }



    //print day based on number

    // let day=5;
    // switch(day) {
    //     case 1:
    //         console.log("Monday");
    //         break;
    //     case 2:
    //         console.log("Tuesday");
    //         break;
    //     case 3:
    //         console.log("Wednesday");
    //         break;
    //     case 4:
    //         console.log("Thursday");
    //         break;
    //     case 5:
    //         console.log("Friday");
    //         break;
    //     case 6:
    //         console.log("Saturday");
    //         break;
    //     case 7:
    //         console.log("Sunday");
    //         break;
    //     default:
    //         console.log("invalid day");
    // }



    // alert("something is wrong");
    // console.log("this is a simple messege");
    // console.error("this is an error messege");
    // console.warn("this is a warning messege");

    // let firstname=prompt("enter your name :");
    // let lastname=prompt("enter your last name :");
    // let msg="welcome "+firstname+" "+lastname;
    // alert(msg);


    //practice problems
//divisible by 10 or not
    // let num = 60;
    // if(num % 10 == 0) {
    //     console.log('good');
    // } else {
    //     console.log('bad');
    // }


    // let username=prompt("enter username:");
    // let age=prompt("enter :");

    // let msg=username+" is "+age+" years old.";
    // alert(msg);


//print months in a quarter
    // let quarter="3";
    // switch(quarter) {
    //     case "1":
    //         console.log("January, February, March");
    //         break;
    //     case "2":
    //         console.log("April, May, June");
    //         break;
    //     case "3":
    //         console.log("July, August, September");
    //         break;
    //     case "4":
    //         console.log("October, November, December");
    //         break;
    //     default:
    //         console.log("invalid quarter");
    // }
        

    // let str="afghdap";
    // if((str[0] =='a' || start[0]=='A')&&(str.length>5)) {
    //     console.log("string is good");
    // } else {
    //     console.log("string is not good");
    // }


    //find largest number among three numbers
    // let a=45;
    // let b=32;
    // let c=67;
    // if(a>=b && a>=c) {
    //     console.log(a+" is the largest number");
    // }
    // else if(b>=a && b>=c) {
    //     console.log(b+" is the largest number");
    // }
    // else {
    //     console.log(c+" is the largest number");
    // }

    //write a program to check if 2 numbers have the same last digit.eg: 32 and 47852 have the same last digit i.e. 2
    // let num1=32;
    // let num2=47852;

    // if((num1%10) == (num2%10)) {
    //     console.log("same last digit");
    // }
    // else {
    //     console.log("different last digit");
    // }


    //string methods
        // let msg ="    he   llo   ";
        // let password=prompt("enter your password:");
        // console.log(password.trim());
     
        
        // let name="Arunava Chakarborty";
        // let msg="error";
        // console.log(msg.toUpperCase());

        //let msg=" ilovecoding    ";
        // let newmsg=msg.trim();
        // console.log("after trim:",newmsg)
        // newmsg=newmsg.toUpperCase();
        // console.log("after uppercase :",newmsg);
        // let newmsg= msg.trim().toUpperCase();
        // console.log(newmsg);

        //slice
        // let msg="hello";
        // console.log(msg.slice(5));
        // console.log(msg.slice(-2));
    //replace
        // let str="ilovecoding";
        // let newstr=str.replace("coding","javascript");
        // console.log(newstr);
        // newstr=newstr.replace("pt","x");
        // console.log(newstr);

    //repeat
        // let msg="ilovecoding";
        // console.log(msg.repeat(4));





        //arrays

          //let start=["january","july","march","august"];
         
          

          //practice question(arrary)
        //Q1
        // let months=['january','july','march','august'];
        // months.splice(0,2,'july','june');
        // console.log(months);

         //Q2

        // let lang=['c','c++','html','javascript','python','java','c#','sql'];
        // let reverselang=lang.reverse();
        // console.log(reverselang);
        // let index=reverselang.indexOf('javascript');
        // console.log("index of javascript is:",index);
        

        //nested array
        //let nums=[[2,3],[6,7],[9,3]];


        //practice questions

//         Qs1. Write a JavaScript program to get the first n elements of an array. [n can be any
// positive number].
// For example: for array [7, 9, 0,-2] and n=3
// Print, [7, 9, 0]

        //  let arr=[7,9,0,-2];                                                  
        //     let n=3;
        //     let newarr=arr.slice(0,n);
        //     console.log(newarr);


//         Qs2. Write a JavaScript program to get the last n elements of an array. [n can be any
// positive number].
// For example: for array [7, 9, 0,-2] and n=3
// Print, [9, 0,-2]

        // let arr=[7,9,0,-2];
        // let n=3;
        // let newarr=arr.slice(-n);
        // console.log(newarr);

// Qs3. Write a JavaScript program to check whether a string is blank or not
        // let str=prompt("enter a string:");
        // if (str.length ==0) {
        //     console.log("string is empty");
        // } else {
        //     console.log("string is not empty");
        // }


//      Qs4. Write a JavaScript program to test whether the character at the given (character)
// index is lower case   

        // let str="ARUnAVa";
        // let index=3;
        // if(str[index] === str[index].toLowerCase()) {
        //     console.log("character is lowercase");
        // } else {
        //     console.log("character is not lowercase");
        // }

//Qs5. Write a JavaScript program to strip leading and trailing spaces from a string
    // let str=prompt("enter a string");
    // console.log("original string:",str);
    // let newstr=str.trim();
    // console.log("string after trim:",newstr);

//Qs6. Write a JavaScript program to check if an element exists in an array or not
    // let arr=[1,2,3,4,5];
    // let item=5;
    // if(arr.includes(item)) {
    //     console.log("item found in the array");
    // }
    // else {
    //     console.log("item not found in the array");
    // }


//for loops

    for(let i=5; i<=10; i++) {
        console.log(i);
    }

    for(let i=50; i>=40; i=i-2) {
        console.log(i);
    }