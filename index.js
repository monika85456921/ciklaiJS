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
// for (let index = 0; index <5; index++){
//     console.log(index);
//     if (index === 3){break}
// }
//6
// for(let i = 0; i < 11; i++){
//     if (i === 7){continue; }
//     console.log(i)
// }

/////////////////////////// for ... in ciklas pavyzdziai ///////////////////////////////////

let person = {
    name: "Sam",
    age: 33,
    job: "officer",
};
for (let key in person){
    console.log(key);
}

let zmogus = {
    name: "Will",
    age: 37,
    job: "actor",
    hobbies: {
        1: "swimming",
        2: "reading",
        3: "sleeping",
    } 
};
for(let key in zmogus.hobbies){
    let hobby = zmogus.hobbies[key];
    console.log(`My hobby are ${hobby}`)
}
for(let key in zmogus){
    if (key === 'hobbies'){
        for(let hobby in zmogus[key]){
            console.log(`My hobby is: ${zmogus[key][hobby]}`)
        }
    }
}

//1 uzd
const leFamily = {
    me : 33,
    father: 55,
    mother: 53,
    sister: 32,
    brother1: 28,
    brother2: 25,
    aunt: 61,
    uncle: 60,
    cousin1: 37,
    cousin2: 37,
    grandfather1: 79,
    gradmother1: 77,
    grandfather2: 81,
    grandmother1: 80,
    cat: 3,
    dog: 7,
    parrot: 2,
};
let skaitl = 0
for(let key in leFamily){
    console.log(key);
    console.log(leFamily[key])
    if (leFamily[key] > 65){
    skaitl++
    }
}
console.log(`Yra ${skaitl}`);

//2 uzd





