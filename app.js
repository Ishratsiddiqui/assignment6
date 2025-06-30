// question-1,Declare and initialize an empty multidimensional array.
// (Array of arrays)
 var myArray = [13, 2, 28, 14];
 console.log(myArray);

// question-2,Declare and initialize a multidimensional arrayrepresenting the following matrix:
  var nums = [0,1,2,3];
   var nums2 = [1,0,1,2];
    var nums3 = [2,1,0,1];
     var isho = [nums, nums2, nums3];
     console.log(isho);
//   question 3. Write a program to print numeric counting from 1 to 10.
  for(var i = 1; i <=10; i++){
    console.log(i);
  }
  
  

// question 4. Write a program to print multiplication table of any number using for loop. Table number & length should be
// taken as an input from user.
// enter a number to show its multiplication table//
var favNum = +prompt("enter your fav num");
for(var i = 1; i <= 10; i++){
    console.log(favNum + " + " + i + " = " + favNum*i)
}

// enter length multiplication table//

var favNum = +prompt("enter your fav num");
for(var i = 1; i <= 15; i++){
    console.log(favNum + " + " + i + " = " + favNum*i)
}
// question 5. Write a program to print items of the following arrayusing for loop:
// fruits = ["apple", “banana”, “mango”, “orange”,“strawberry”]
  var arr = ["Apple", "Banana", "Mango", "Orange","strawberry]"];
  var fruit = ["Fruit"]
  for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < fruit.length; j++){
      console.log(arr[i] , fruit[j])
    }
  };
  // question 6. Generate the following series in your browser. Seeexample output.
 
 document.write("a. Counting:  ");
  document.write("1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15" );
 document.write("b. Reverse counting:  ");
  document.write("10, 9, 8, 7, 6, 5, 4, 3, 2, 1")
  
    
 document.write("c. Even:   ")
 document.write ("0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20");
 
  document.write("d. Odd:   ")
  document.write("1, 3, 5, 7, 9, 11, 13, 15, 17, 19");
   
   document.write("c. Series:   ")
  document.write ("2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k");
// question 7. You have an arrayA = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item isfound in the list or not. Example:
  var myBakery = prompt("Welcome to my bakery! \n  What do you want to order sir/ma'am"); 
  alert(" Cake is avaiable in our bakery"); 

  var myBakery = prompt("Welcome to my bakery! \n  What do you want to order sir/ma'am"); 
  alert("We are sorry! patties  is not avaiable in our bakery \n THANK YOU "); 

// QUESTION 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].
var word = ["24, 53, 78, 91, 12" ];
console.log(91);

// question9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]
   var word = ["24, 53, 78, 91, 12" ];
console.log(12);

// question 10. Write a program to print multiples of 5 ranging 1 to
// 100.
document.write("5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100 \n" );