
// // const add = (a,b) => {
// //  return (a+b);
// // }

// // const subtract = (a,b) => {
// //   return (a - b);
// // }

// // const multiply = (a,b) => {
// //   return (a*b);
// // }

// // const exponent = (a,b) => {
// //   return (a ** b);
// // }


// // const mathFuncs = [add, subtract, multiply, exponent];

// // const doMath = (a,b,mathFuncs) => {
// //   for (let func of mathFuncs) {
// //     console.log(func(a,b));

    
    
// //   }
// //   //same as:
// //   console.log(add(a,b));
// //   console.log(subtract(a,b));
// //   console.log(multiply(a,b));
// //   console.log(exponent(a,b));
// // }



// // const bills = [102.54,33,78.45,105];

// // let total = 0;

// // bills.forEach(function(amount) {
// //   total += amount;
// // });

// // console.log('total', total);


// // for(amount of bills) {
// //   total = total + amount;

// // }

// // console.log('total', total);


// // const array = [4,104,4,5,4,3,1,8,7,6,5,66,76,45,57,5];

// // function forEach(array, callback) {
// //   for (let i = 0; i < array.length; i++) {
// //   callback(array[i])

// //   }
// // }


// // forEach([4,5,6], compare());

// // function compare() {
// //   for(num of array) {
// //     if(num === [4,5,6]) {
// //       console.log('num');
// //     }
// //   }
// // }



// const colors = ['red', 'blue', 'green'];

// // function forEach(arr, callback) {
// //   for (let i = 0; i < arr.length; i++) {
// //     callback(arr[i]) 
// //   }
// // };



// function forEach(colors, callback) {
//   for (let i = 0; i< colors.length; i++) {
//     callback(colors[i]);
//     callback(red, blue, green)
//     function(word) {console.log(word.toUppercase());}
//   }
// }





// forEach(colors, function(word){console.log(word.toUpperCase());})









// const mappedArray = [];

// function map(array, callback) {
//   for(i=0; i<array.length; array++) {
//     const value = callback(array[i])
//     mappedArray.push(array[i]);
//   }
//   return mappedArray;
// }



// const newArray = map([1,2,3,4], function(value){
//   return value * 3
// })






// forEach
//1
// function doubleValues(array) {
//   const newArray = [];
//   array.forEach(element => {
//   newArray.push(element * 2)
//   });
//   return newArray;
// }

// doubleValues([1,2,3]) // [2,4,6]
// doubleValues([5,1,2,3,10]) // [10,2,4,6,20]


//2

// const onlyEvenValues = (array) => {
//   const evenValuesArray = [];
//   array.forEach(element => {
//     if(element % 2 === 0) {
//       evenValuesArray.push(element)
//     }
//   });
//   return evenValuesArray;
  
// }

// onlyEvenValues([1,2,3]) // [2]
// onlyEvenValues([5,1,2,3,10]) // [2,10]


//3

// const showFirstAndLast  = (array) => {
//   const showFirstAndLastArray = [];

//   array.forEach(element => {
//     showFirstAndLastArray.push(element[0] + element[element.length -1])
//   });
//   return showFirstAndLastArray
// }


// showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
// showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']



//4

// const addKeyAndValue = (array, key, value) => {
//   // const addKeyAndValueArray = [];

//   array.forEach(element => {
//     element[key] = value;
//   });
//   return array;
// }

// addKeyAndValue(
//   [
//     {name: 'Elie'},
//     {name: 'Tim'},
//     {name: 'Matt'},
//     {name: 'Colt'}
//   ],
//     'title',
//     'instructor'
//   )
  
  /*
    [
      {name: 'Elie', title:'instructor'},
      {name: 'Tim', title:'instructor'},
      {name: 'Matt', title:'instructor'},
      {name: 'Colt', title:'instructor'}
    ]
  */

    //5

// const vowels = ['a', 'e', 'i', 'o', 'u'];
// let object = {};

// const vowelCount = (string) => {
//   const splitString = string.split('');
  // let letter = splitString[i].toLowerCase();
  


  // for( let i=0; i < splitString.length; i++) {
  //   let letter = splitString[i].toLowerCase();
  //   console.log('letter', letter.indexOf());


  // }
  




  // vowels.forEach(element => {
  //   if(element === splitString[i]) {

  //     let vocal = splitString[i];
  //     if(vocal )
  //     object[vocal] = 10;
  //     console.log('object', object);
  //     // console.log(splitString[i]);
  //     // console.log(vocal);
  //   }
  //   return object;
  // });

// }





// const vowelCount = (string) => {
//   let object = {};
//   let splitArray = string.split('');
//   const vowels = ['a', 'e', 'i', 'o', 'u'];

//     splitArray.forEach(element => {
//      const lowerCasedLetter = element.toLowerCase();
//      if(vowels.indexOf(lowerCasedLetter) !== -1) {
//       if(object[lowerCasedLetter]) {
//         object[lowerCasedLetter]++;
//       } 
//       else {
//        object[lowerCasedLetter] = 1; 
//       }
//      }

//     });

//     return object;
// }

// vowelCount('Elie') // {e:2,i:1};
// vowelCount('Tim') // {i:1};
// vowelCount('Matt') // {a:1})
// vowelCount('hmmm') // {};
// vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1}



//MAP
//6

// const doubleValuesWithMap = (array) => {
//   return array.map(element => {
//     return element * 2
//   })
// }


// doubleValuesWithMap([1,2,3]) // [2,4,6]
// doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]
 

//7

// const valTimesIndex = (array) => {
//   return array.map( (element, index)=>{
//     return element * index
//   })
// }

// valTimesIndex([1,2,3]) // [0,2,6]
// valTimesIndex([1,-2,-3]) // [0,-2,-6]

//8

// const extractKey = (array, key) => {
//   return array.map((value)=>{
//     return value[key]
//   })
// }




// extractKey(
//   [
//     {name: 'Elie'},
//     {name: 'Tim'},
//     {name: 'Matt'},
//     {name: 'Colt'}
//   ],
//   'name'
// )

  // ['Elie', 'Tim', Matt', 'Colt']

  //9

//   const extractFullName = (array) => {
//     return array.map(value => {
//       return value["first"] + ' ' +  value['last'];
//     })
//   }

  

// extractFullName([
//   {first: 'Elie', last:"Schoppik"},
//   {first: 'Tim', last:"Garcia"},
//   {first: 'Matt', last:"Lane"},
//   {first: 'Colt', last:"Steele"}
// ])

  // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']



  //FILTER

  //10

// const filterByValue = (array, key) => {
//   return array.filter((value)=>{
//     return value[key]
//   })
// }

//   filterByValue(
//     [
//       {first: 'Elie', last:"Schoppik"},
//       {first: 'Tim', last:"Garcia", isCatOwner: true},
//       {first: 'Matt', last:"Lane"},
//       {first: 'Colt', last:"Steele", isCatOwner: true}
//     ],
//     'isCatOwner'
//     )
    
    /*
      [
        {first: 'Tim', last:"Garcia", isCatOwner: true},
        {first: 'Colt', last:"Steele", isCatOwner: true}
      ]
    */

  //11

//   const find = (array, value) => {
//     return array.filter((element)=>{
//       return element === value
//     })[0]
//   }
  
// find([1,2,3,4,5], 3) // 3
// find([1,2,3,4,5], 10) // undefined

//12


// const findInObj = (array, key, searchValue) => {
//   return array.filter((element)=>{
//     return element[key] === searchValue
//   })
// }

// findInObj(
//   [
//     {first: 'Elie', last:"Schoppik"},
//     {first: 'Tim', last:"Garcia", isCatOwner: true},
//     {first: 'att', last:"Lane"},
//     {first: 'Colt', last:"Steele", isCatOwner: true}
//   ],
//   'isCatOwner',
//   true
// )

// {first: 'Tim', last:"Garcia", isCatOwner: true}

//13

const removeVowels = (string) => {
  const vowels = 'aeiou';
  const lowerCaseArray = string.toLowerCase().split('');
  // console.log('tcs', lowerCaseArray);

  return lowerCaseArray.filter((char)=>{
    return vowels.indexOf(char) === -1
  })
  .join('')
}

removeVowels('Elie') // ('l')
removeVowels('TIM') // ('tm')
removeVowels('ZZZZZZ') // ('zzzzzz')

//14

// const doubleOddNumbers = (array) => {

  
//   const arrayFiltered = array.filter(element=>{return element % 2 !== 0})
//   // console.log(arrayFiltered);
  
//   const arrayFilteredAndMapped = arrayFiltered.map(element=>{
//     return element * 2
//   })

//   return arrayFilteredAndMapped;
  
// }

const doubleOddNumbers = (array) => {

  return array
  .filter(element=>{
    return element % 2 !== 0;
  })
  .map(element=>{
    return element * 2;
  })
}

doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
doubleOddNumbers([4,4,4,4,4]) // []