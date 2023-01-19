import {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered,
} from "../challenges/exercise006";

describe("sumMultiples", () => {

    test("it returns the sum of any numbers that are a multiple of 3 or 5", () => {
        expect(sumMultiples([1, 9, 10])).toBe(19);
    });

    test("return 0 if there are no multiple of 3 or 5", () => {
        expect(sumMultiples([1, 4.0, 8.0, 13, 7])).toBe(0);
    });
});

describe("isValidDNA", () => {

    test("A valid DNA string may contain characters C, G, T or A only.", () => {
        expect(isValidDNA("CGTA")).toBe(true);
    });

    test("false test with the different characters inside", () => {
        expect(isValidDNA("CGTAABGCG")).toBe(false);
    });

    test("empty with the string", () => {
        expect(isValidDNA("")).toBe(false);
    });
});

describe("getComplementaryDNA", () => {

    test("return standard form with Pair TGAC", () => {
        expect(getComplementaryDNA("ACTG")).toBe("TGAC");
    });

    test("return false with extra Value in TGAC", () => {
        expect(getComplementaryDNA("ACFTG")).toBe(false);
    });
});

describe("isItPrime", () => {

    test("return true , it is a prime number", () => {
        expect(isItPrime(7)).toBe(true);
    });

    test("return false it is not a prime number", () => {
        expect(isItPrime(4)).toBe(false);
    });
});

describe("createMatrix", () => {
    test("test the sample array with foo", () => {
        expect(createMatrix(3, "fool")).toEqual([
            ["fool", "fool", "fool"],
            ["fool", "fool", "fool"],
            ["fool", "fool", "fool"]
        ]);
    });

    test("test 5times matri with other sample words ", () => {
        expect(createMatrix(5, "javaScript")).toEqual([
            ["javaScript", "javaScript", "javaScript", "javaScript", "javaScript"],
            ["javaScript", "javaScript", "javaScript", "javaScript", "javaScript"],
            ["javaScript", "javaScript", "javaScript", "javaScript", "javaScript"],
            ["javaScript", "javaScript", "javaScript", "javaScript", "javaScript"],
            ["javaScript", "javaScript", "javaScript", "javaScript", "javaScript"]
        ]);
    });
});

describe("areWeCovered", () => {
    test(" return true depending on whether there are enough staff on thescheduled for the given day.", () => {
        expect(
            areWeCovered([
                { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
                { name: "Mark", rota: ["Saturday", "Sunday", "Tuesday", "Thursday"] },
                { name: "Jason", rota: ["Monday", "Sunday", "Friday"] },
                { name: "Katie", rota: ["Monday", "Wednesday", "Thursday"] },
                { name: "Jack", rota: ["Monday", "Wednesday", "Sunday"] },
            ], 'Monday')).toBe(true)
    });

    test("return false when there are not enough staff on the scheduled for the given day", () => {
        expect(
            areWeCovered([
                { name: "Sally", rota: ["Friday"] },
                { name: "Mark", rota: [ "Thursday"] },
                { name: "Jason", rota: ["Friday"] },
                { name: "Katie", rota: ["Thursday"] },
                { name: "Jack", rota: [ "Sunday"] },
            ], 'Friday')).toBe(false)
    });
});