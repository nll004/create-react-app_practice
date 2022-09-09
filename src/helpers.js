/** Returns a randomly selected item from an array of items */

function choice(itemArray){
    if(!itemArray || !Array.isArray(itemArray)) throw new Error('choice(). No valid arguement received ');

    let randomIdx = Math.floor(Math.random() * itemArray.length);
    let item = String(itemArray.slice(randomIdx, randomIdx + 1))

    return item
}

/** Removes item from itemArray and returns it.
 *
 * If the item intended to be deleted doesn't exist, returns undefined.
 * */

function remove(item, itemArray){
    if(!item || !itemArray) throw new Error('remove(). Two arguements required');

    for(let i = 0; i < itemArray.length; i++){
        if (itemArray[i] === item){

            return String(itemArray.splice(i, 1));
        }
    }
    return
}

export { remove, choice}
