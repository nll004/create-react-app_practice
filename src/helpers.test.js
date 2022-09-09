import { choice, remove } from './helpers'

const testItems = ['🥝', '🍎', '🍍', '🍇', '🍐', '🍌'];
const fakeItems = ['🍫'];

describe('choice() from helpers.js', function(){
    test('choice should return a random item in the intended array', function(){
        expect(testItems.includes(choice(fakeItems))).toBeFalsy();
        expect(testItems.includes(choice(testItems))).toBeTruthy();
    })
    test('if invalid arguement, error is thrown', function(){
        try{ choice() }
        catch(e){ expect(e instanceof Error).toBeTruthy() }
        try{ choice(2) }
        catch(e){ expect(e instanceof Error).toBeTruthy() }
        try{ choice([]) }
        catch(e){ expect(e instanceof Error).toBeTruthy() }
    })
})

describe('remove() from helpers.js', function(){
    test('remove should remove and return a specified item from array', function(){
        expect(remove("🥝", testItems)).toEqual("🥝");
        console.log(testItems)
        expect(remove('🍇', testItems)).toEqual('🍇');
        expect(remove('🍌', testItems)).toEqual('🍌');
        console.log(testItems)
        expect(testItems.length).toEqual(3);
    })

    test('if specified item is not in array, return undefined', function(){
        expect(remove('🍔', testItems)).toEqual(undefined);
    })

    test('throw error if no item or array args', function(){
        try{ remove() } catch(e){ expect(e instanceof Error).toBeTruthy()}
        try{ remove("1") } catch(e){ expect(e instanceof Error).toBeTruthy()}
        try{ remove("1", ) } catch(e){ expect(e instanceof Error).toBeTruthy()}
    })
})
