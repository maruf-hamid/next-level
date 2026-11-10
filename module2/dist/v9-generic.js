// Generic type
const wrapInArray = (value) => {
    return [value];
};
const numArr = wrapInArray(1232);
const strArr = wrapInArray("abc");
strArr.map((item) => item.toUpperCase);
const userResponse = {
    data: {
        name: "maruf",
        role: "manager",
    },
    success: true,
    statusCode: 123,
};
export {};
