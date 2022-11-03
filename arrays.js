let backpack = [];

//lets add sword, shield, food
backpack.push('sword', 'shield', 'food');
console.log(backpack);


let sword = backpack.splice(0, 1);
//console.log(backpack);

let furCoat = 'fur Coat';

backpack.push(furCoat);

backpack.pop();

let itemCount = backpack.length;

backpack.push('flint');
backpack.push('blanket');
backpack.push('knife');
backpack.push('toothbrush');

let backpack2 = backpack.splice(2, 4)

//console.log(...backpack2);

for(let i = 0; i < backpack.length; i++) {
    console.log(backpack[i]);
}
for(let i = 0; i < 3; i++) {
    console.log(backpack2[i]);
}

console.log(`Backpack count: ${itemCount}`);
console.log(`Backpack: `,backpack);
console.log(`Backpack2: `,backpack2);
