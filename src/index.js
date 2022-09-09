import foodItems from "./foods";
import { choice, remove } from "./helpers";

console.log(foodItems);

let randFruit = choice(foodItems);

console.log(`I'd like one ${randFruit} please!`);

console.log(`Here you go: ${remove(randFruit, foodItems)}`);

console.log(foodItems);

console.log(`Delicious! May I have another?`);

console.log(`I'm sorry, we're all out. We have ${foodItems.length} other fruits left.`);

console.log(foodItems);
