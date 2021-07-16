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


for (const toy of toys) {
    console.log(toy.name);
}