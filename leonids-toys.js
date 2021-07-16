const toys = [
{
    id: 1,
    name: "Steve Brownlee Doll",
    price: 12.99,
    needsBatteries: true,
    amountInStock : 7,
},
{
    id: 2,
    name: "Blue Toy Car",
    price: 3.99,
    needsBatteries: false,
    amountInStock: 3,
},
{
    id: 3,
    name: "Bee Plushie",
    price: 16.99,
    needsBatteries: false,
    amountInStock: 8,
},
];

const hotWheelsTrack = {
    id: 4,
    name: "Hot Wheels Racing Track",
    price: 29.99,
    needsBatteries: true,
    amountInStock: 1,
}

const hotWheels20CarPack = {
    id: 5,
    name: "Hot Wheels 20-Car Pack",
    price: 23.99,
    needsBatteries: false,
    amountInStock: 4,
}

toys.push(hotWheelsTrack);
toys.push(hotWheels20CarPack);

// create a function to add toys, that will automatically add an id to the object

const addToy = (toyObject) => {
    const lastIndex = toys.length - 1
    const currentLastToy = toys[lastIndex]
    const maxId = currentLastToy.id

    const newToyId = maxId + 1
    toyObject.id = newToyId

    toys.push(toyObject)
}

const barbieDoll = {
    name: "Barbie Doll",
    price: 15.99,
    needsBatteries: false,
    amountInStock: 6,
}

addToy(barbieDoll);

console.log(toys)

// IT WORKS *happy dance*

//iteration through inventory
/*for (const toy of toys) {
    if (toy.amountInStock > 1) {
        console.log(`The ${toy.name} costs ${toy.price} and there are ${toy.amountInStock} in stock`);
    } else {
        console.log(`The ${toy.name} costs ${toy.price} and there is ${toy.amountInStock} in stock`);
    } 
} */

//increasing price
/*for (const toy of toys) {
    // add 5% to original price
    toy.price = toy.price * 1.05
    // log inventory with new prices
    if (toy.amountInStock > 1) {
        console.log(`The ${toy.name} costs ${toy.price} and there are ${toy.amountInStock} in stock`);
    } else {
        console.log(`The ${toy.name} costs ${toy.price} and there is ${toy.amountInStock} in stock`);
    }  
}*/

//finding specific id

//create a variable in the global scope to represent the id you want to find
// const toyToFind = 3

// for (const toy of toys) {
//     if (toy.id === toyToFind) {
//         toy.price = toy.price * 1.05

//         if (toy.amountInStock > 1) {
//             console.log(`The ${toy.name} costs ${toy.price} and there are ${toy.amountInStock} in stock`);
//         } else {
//             console.log(`The ${toy.name} costs ${toy.price} and there is ${toy.amountInStock} in stock`);
//         }  
//     }
// }



