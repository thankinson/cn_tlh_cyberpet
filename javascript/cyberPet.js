let petPlay = document.getElementById(`petPlay`);
let petFeed = document.getElementById(`petFeed`);
let petDrink = document.getElementById(`petDrink`);
let petCreate = document.getElementById(`createPet`);
let petImg = document.getElementById(`thePetImg`);

let levelPlay = document.getElementById(`levelPlay`);
let levelHunger = document.getElementById(`levelHunger`);
let levelThirst = document.getElementById(`levelThirst`);

let nameOfPet = document.getElementById(`petName`).value;
let typeOfPet = document.getElementById(`petType`).value;
// creates pet
petCreate.addEventListener(`click`, () =>{
   
    console.log(nameOfPet, typeOfPet)
    if (typeOfPet == "cat"){
        nameOfPet = new Cat(nameOfPet);
        petImg.src = "/images/crazy_cat.gif";
        petCreate.style.visibility = 'hidden';
        stats();
        console.log(nameOfPet);
    }   else if (typeOfPet == "dog") {
        nameOfPet = new Dog(nameOfPet);
        console.log(nameOfPet);
        petImg.src = "/images/strangedog.gif";
        petCreate.style.visibility = 'hidden';
        stats();
    } else if (typeOfPet == "fish"){
        nameOfPet = new Fish(nameOfPet);
        console.log(nameOfPet);
        petImg.src = "/images/fish.gif";
        petCreate.style.visibility = 'hidden';
        stats();
    } else {
        alert(`Please enter a pet name!`);
    }
    
});




// play with pet

petPlay.addEventListener(`click`, () =>{
 
    console.log(nameOfPet.getHunger);
    if (nameOfPet.getHunger < 1 || nameOfPet.getThirst < 1){
            alert(`${nameOfPet.getName} your pet has died`);
            location.reload();
    } else if (nameOfPet.getPlay >= 60){
        console.log(`${nameOfPet.getName} is tired`);
        alert(`${nameOfPet.getName} is extreamly tired and wants to rest`)
    } else {
        console.log(`${nameOfPet.getName}`);
        console.log(nameOfPet);
        nameOfPet.playPet();
        stats();
    }
    

});

petFeed.addEventListener(`click`, () =>{

    // nameOfPet.petHunger();
    console.log(nameOfPet.getHunger);
    if (nameOfPet.getPlay <= 0 || nameOfPet.getThirst <= 0){
            alert(`${nameOfPet.getName} your pet has died`);
            location.reload();
            
    } else if (nameOfPet.getHunger >= 60){
        console.log(`${nameOfPet.getName} has had enogh`);
        alert(`${nameOfPet.getName} is stuffed and dosnt want anymore food`);
    } else {
        console.log(`${nameOfPet.getName}`);
        nameOfPet.petHunger();
        stats();
    }
    

});

petDrink.addEventListener(`click`, () =>{

    // nameOfPet.petHunger();
    console.log(nameOfPet.getHunger);
    if (nameOfPet.getPlay < 1 || nameOfPet.getHunger < 1){
            alert(`${nameOfPet.getName} your pet has died`);
           location.reload();
    } else if (nameOfPet.getThirst >= 60){
        console.log(`${nameOfPet.getName} has had enogh`);
        alert(`${nameOfPet.getName} is no longer thirsty and dosnt want anymore water`);
    } else {
        console.log(`${nameOfPet.getName}`);
        nameOfPet.petThirst();
        stats();
    }
    

});

let stats = () =>{
    levelPlay.innerHTML = nameOfPet.getPlay
    levelHunger.innerHTML = nameOfPet.getHunger
    levelThirst.innerHTML = nameOfPet.getThirst
};


// ########################################################################################################
class cyberPet{
    constructor(petName){
        this._petName = petName;
        this._petHunger = 50;
        this._petThirst = 50;
        this._petPlay = 50;
    };
        get getName(){
            return this._petName;
        };
        get getType(){
            return this._petType;
        };
        get getHunger(){
            return this._petHunger;
        };
        get getThirst(){
            return this._petThirst;
        };
        get getPlay(){
            return this._petPlay;
        };
            playPet(){
                this._petPlay += 3;
                this._petThirst -= 3;
                this._petHunger -= 5;
            };
            petHunger(){
                this._petHunger += 2;
                this._petThirst -= 5;
                this._petPlay -= 2;
            };
            petThirst(){
                this._petThirst++;
                this._petHunger -= 2;
                this._petPlay -= 1;
            };
    };

    class Cat extends cyberPet{
        constructor(petName){
            super(petName);
            this._petType = "Cat";
            this._favFood = "Fish";
        };
    };

    class Dog extends cyberPet{
        constructor(petName){
            super(petName);
            this._petType = "Dog";
            this.faveFood = "Biscuits";
        };
    };

    class Fish extends cyberPet{
        constructor(petName){
            super(petName);
            this._petType = "Fish";
            this._favFood = "worms";
        };
    };



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

    // class Alien extends cyberPet{
    //     constructor(petName){
    //         super(petName);
    //         this._petType = "Alien";
    //     };
    // };

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
