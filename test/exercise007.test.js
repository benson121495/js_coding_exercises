import {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner,
} from "../challenges/exercise007";

describe("sumDigits", () => {

    test(" get the number and returns the sum of all of the digits", () => {
        expect(sumDigits(123)).toBe(6);
    });

    test(" another sample for the sum of all of the digits", () => {
        expect(sumDigits(246)).toBe(12);
    });
});

describe("createRange", () => {
    test("return numbers to a range of numbers in an array.", () => {
        expect(createRange(2, 6, 1)).toEqual([2, 3, 4, 5, 6]);
    });

    test("return numbers to different range in the array.", () => {
        expect(createRange(3, 21, 2)).toEqual([3, 5, 7, 9, 11, 13, 15, 17, 19, 21]);
    });
});

describe("getScreentimeAlertList", () => {
    test("return the screentime is above 100 minutues. ", () => {
        expect(getScreentimeAlertList(
            [
                {
                    username: "beth_1234",
                    name: "Beth Smith",
                    screenTime: [
                        { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                        { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                        { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                        { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
                    ]
                },
                {
                    username: "sam_j_1989",
                    name: "Sam Jones",
                    screenTime: [
                        { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
                        { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
                        { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
                    ]
                },
            ], "2019-05-04")
        ).toEqual(["beth_1234"])

    });
});

describe("hexToRGB", () => {
    test("Transform hex code to RGB code.", () => {
        expect(hexToRGB("#FF1133")).toBe("rgb(255,17,51)")
    });


});

describe("findWinner", () => {
    test("return 'X'  ", () => {
        expect(findWinner([
            ["X", "0", null],
            ["X", null, "0"],
            ["X", null, "0"]
        ])).toBe('X')
    });

    test("return '0'  ", () => {
        expect(findWinner([
            ["X", "0", "X"],
            ["0", "0", "0"],
            ["X", null, "X"]
        ])).toBe('0')
    });

    test("return 'NULL'  ", () => {
        expect(findWinner([
            ["X", "0", "0"],
            ["0", "X", "X"],
            ["X", "0", "X"]
        ])).toBe(null)
    });


});