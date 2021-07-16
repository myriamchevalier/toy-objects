/* const steveBrownleeDoll = {
    id: 1,
    name: "Steve Brownlee Doll",
    price: 12.99,
    isElectric: true,
    amountInStock : 7,
}

const blueToyCar = {
    id: 2,
    name: "Blue Toy Car",
    price: 3.99,
    isElectric: false,
    amountInStock: 3,
}

const beePlushie = {
    id: 3,
    name: "Bee Plushie",
    price: 16.99
    isElectric: false,
    amountInStock: 8,
}*/
const toys = [
{
    id: 1,
    name: "Steve Brownlee Doll",
    price: 12.99,
    isElectric: true,
    amountInStock : 7,
},
{
    id: 2,
    name: "Blue Toy Car",
    price: 3.99,
    isElectric: false,
    amountInStock: 3,
},
{
    id: 3,
    name: "Bee Plushie",
    price: 16.99,
    isElectric: false,
    amountInStock: 8,
}
];

for (const toy of toys) {
    console.log(toy.name);
}