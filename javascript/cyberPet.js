let nameOfPet = document.getElementById(`petName`).value;
let typeOfPet = document.getElementById(`petType`).value;
let petCreate = document.getElementById(`createPet`);

petCreate.addEventListener(`click`, () =>{
    let 
    // if (typeOfPet = "cat"){
    //     nameOfPet = new Cat;
    // }   else if (typeOfPet = "dog") {
    //     nameOfPet = new Dog;
    // } else {
    //     nameOfPet = new Fish;
    // }
})



// ########################################################################################################
class cyberPet{
    constructor(petName){
        this._petName = petName;
        this._petHunger = 50;
        this._petThirst = 50;
        this._petPlay = 50;
    };
        get petName(){
            return this._petName;
        };
        get petType(){
            return this._petType;
        };
        get petHunger(){
            return this._petHunger;
        };
        get petThirst(){
            return this._petThirst;
        };
        get petPlay(){
            return this._petPlay;
        };
            petPlay(){
                this._petPlay++;
                this._petThirst -= 5;
                this._petHunger -= 5;
            };
            petHunger(){
                this._petHunger++;
                this._petThirst -= 5;
                this._petPlay -= 2;
            };
            petThirst(){
                this._petThirst++;
                this._petHunger -= 2;
                this._petPlay -= 1;
            };
    }

    class Cat extends cyberPet{
        constructor(petName){
            super(petName);
            this._petType = "Cat";
        };
    };

    class Dog extends cyberPet{
        constructor(petName){
            super(petName);
            this._petType = "Dog";
        };
    };

    class Fish extends cyberPet{
        constructor(petName){
            super(petName);
            this._petType = "Fish";
        };
    };

    class Alien extends cyberPet{
        constructor(petName){
            super(petName);
            this._petType = "Alien";
        };
    };

// bob = new Cat("BoB");

// console.log(bob);

// #################################\\
//              test site           \\
// #################################\\

// let hunger = 50;
// let play = 50;
// let thirst = 50;
// let petName = "Bob";
// const petPlay = () => {
//     play++;
//     thirst -= 5;
//     hunger -= 5;
// };
// const petHunger = () => {
//     hunger++;
//     thirst -= 5;
//     play -= 2;
// };
// const petThirst = () => {
//     thirst++;
//     hunger -= 1;
//     play -= 1;
// };


// const thePet = () => {
//     if (hunger <= 50){
//     console.log (`${petName} is hungry`);
//     } else if (thirst <= 50){
//         console.log(`${petName} is thirsty`);
//     } else if (play <= 50){
//         console.log(`${petName} wants to play`);
//     } else {
//         console.log(`${petName} is fine`);
//     }
// }

//     const feedPet = () => {
//         for (i = 0; i <= hunger; i++){
//             petHunger();
//         } if (thirst || play == 50){
//             console.log(`${petName} os no longer hungry`);
//         }
//     }


// thePet()

// #################################\\
// #################################\\
// #################################\\

// #################################\\
//        the chopping block        \\
// #################################\\

// const WhatPet = (){
//     if (typeOfPet = "cat"){
//         nameOfPet = new Cat;
//     }   else if (typeOfPet = "dog") {
//         nameOfPet = new Dog;
//     } else {
//         nameOfPet = new Fish;
//     }
// }

// #################################\\
// #################################\\
// #################################\\
