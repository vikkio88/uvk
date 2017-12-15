import { randomizer } from '../src';
import { range } from '../src';

describe('randomizer test', () => {
    test('simulates the chance always true if 100 selected', () => {
        expect(randomizer.chance(100)).toBe(true);
    });

    test('simulates the chance always false if 0 selected', () => {
        expect(randomizer.chance(0)).toBe(false);
    });

    test('rand int is getting an int between a range', () => {
        expect(randomizer.int(0, 1)).toBeLessThan(2);
    });

    test('random picker choose one item from array', () => {
        const sample = [1, 2, 4, 5];
        expect(sample).toContain(randomizer.pickOne(sample));
    });

    test.skip('simulates the chance always false if 0 selected', () => {
        let t = 0;
        let f = 0;
        range(1000).forEach(() => {
            if (randomizer.chance(10)) {
                t++;
            } else {
                f++;
            }
        });
        console.log(`true: ${t} ; false: ${f}, t: ${Math.round((t / 1000) * 100)} % f: ${Math.round((f / 1000) * 100)} %`)
    });
});