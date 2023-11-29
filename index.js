// UZDUOTYS for ciklas
// 1
// for(let skaicius = 1; skaicius <= 10; skaicius++){
//     console.log(skaicius);
// }
//2
// for(let skaicius = 10; skaicius >=1; skaicius--){
//     console.log(skaicius);
// }

//3
// for(let skaicius = 1; skaicius <= 10; skaicius++){
//     console.log(skaicius++);
// }
//4
// for(let skaicius = 1; skaicius <= 10 ; skaicius++){
//     console.log(skaicius*2);
// }
//5
// for (let i = 0; i <5; i++){
//     console.log(i);
//     if (i === 3)
//     break;
// }
//6
// for(let i = 0; i < 11; i++){
//     if (i === 7)
//     continue; 
//     console.log(i)
// }

/////////////////////////// for ... in ciklas pavyzdziai ///////////////////////////////////

// let person = {
//     name: "Sam",
//     age: 33,
//     job: "officer",
// };
// for (let key in person){
//     console.log(key);
// }

// let zmogus = {
//     name: "Will",
//     age: 37,
//     job: "actor",
//     hobbies: {
//         1: "swimming",
//         2: "reading",
//         3: "sleeping",
//     } 
// };
// for(let key in zmogus.hobbies){
//     let hobby = zmogus.hobbies[key];
//     console.log(`My hobby are ${hobby}`)
// }
// for(let key in zmogus){
//     if (key === 'hobbies'){
//         for(let hobby in zmogus[key]){
//             console.log(`My hobby is: ${zmogus[key][hobby]}`)
//         }
//     }
// }

//1 uzd
// const leFamily = {
//     me : 33,
//     father: 55,
//     mother: 53,
//     sister: 32,
//     brother1: 28,
//     brother2: 25,
//     aunt: 61,
//     uncle: 60,
//     cousin1: 37,
//     cousin2: 37,
//     grandfather1: 79,
//     gradmother1: 77,
//     grandfather2: 81,
//     grandmother1: 80,
//     cat: 3,
//     dog: 7,
//     parrot: 2,
// };
// let skaitl = 0;
// for(let key in leFamily){
//     // console.log(key);
//     // console.log(leFamily[key])
//     if (leFamily[key] > 65){
//     skaitl++
//     }
// }
// console.log(`Yra ${skaitl} dideniu nei 65`);

//2 uzd
//1 var
// let skaitl2 = 0;
// for (let key in leFamily){
//     if (leFamily[key] % 2 === 0){
//         skaitl2++
//     }
// }
// console.log(`yra ${skaitl2} lyginiai skaiciai`)

// let skaitl3 = 0;
// for (let key in leFamily){
//     if (leFamily[key] % 2 !== 0){
//         skaitl3++
//     }
// }
// console.log(`yra ${skaitl3} nelyginiai skaiciai`)
// 2var
// let lyg = 0;
// let neLyg = 0;
// for (let key in leFamily){
//     if (leFamily[key] % 2 === 0){
//         lyg++
//     }
//     else{
//         neLyg++
//     }
// }
// console.log("lyginiu: " + lyg +" ," + "nelyginiu " + neLyg)

////for...of
//1uzd
// const numbers = [2, 34, 54, 67,77,1,99];
// let kiekSk = 0
// for(let number of numbers){
//     kiekSk+=number
// }
// console.log("skaiciu suma " + kiekSk);

//2uzd
//1var
// const words = ["Geros","dienytes","geros","kavytes"];
//  for(let word of words){
//     for(let char of word){
//         console.log(`${word}: ${word.length}`);
//         break;
//     }
//  }
//2var
//  for(let i of words){
//      let zod = 0;
//      for(let a of i){
//          zod++
//      }
//      console.log(`${i}=${zod}, ${i.length}`)
//  }


 // WHILE ciklas

 //1uzd

//  let skaicius = 1;
//  while(skaicius <= 10){
//      console.log(skaicius);
//      skaicius++;
//  }

// 2uzd
// let i = 10;
// while(i >= 1){
//     console.log(i);
//     i--;
// }

//3uzd

// let skaiciusNeLyg = 1;
// while(skaiciusNeLyg <= 10){
//     if(skaiciusNeLyg % 2 !== 0){
//         console.log(skaiciusNeLyg);
//     }
//     skaiciusNeLyg++;
// }

/////////////////Do.... while
//1uzd 1var
// let skaicius = 0;
// let suma = 0;
// let vidurkis = 0;
// let skaitl = 0;
// do{
//     suma += skaicius;
//     vidurkis = suma / skaicius;
//     skaicius = parseInt(prompt("Iveskite neigiama skaiciu: " ));
// }while(skaicius < 0);

// console.log("Skaicius suma yra " + suma + " Skaiciu vidurkis " + vidurkis);
//2 var 
// let sk = 0;
// let suma = 0;
// let vidurkis = 0;
// let skaic = 0;
// do {
//   skaic = parseInt(prompt("Iveskite skaiciu: "));
//   if (skaic >= 0) {
//     sk++;
//     suma += skaic;
//   } else {
//     vidurkis = suma / sk;
//     console.log(vidurkis);
//   }
// } while (skaic >= 0);
// console.log(`${suma} suma, ${vidurkis} vidurkis`);


//2 uzd
// function getRandomToTen(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }
 
// const randomNum = getRandomToTen(1, 10);
// console.log(randomNum);
 
// do {
//   const userInput = prompt("enter a num: ");
//   const num = parseFloat(userInput);
 
//   if (num === randomNum) {
//     alert("you guessed it right!");
//     break;
//   } else if (num < randomNum) {
//     alert("too low. try again");
//   } else {
//     alert("too high. try again");
//   }
// } while (true); // vartotojas turi testi spejimus toil, kol atspes teisinga skaiciu

