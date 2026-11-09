// type assertion
const someStaus = "pending";
const currentStatus = (status) => {
    console.log("Your current status is" + status);
};
currentStatus(someStaus);
const config = {
    port: 5000
};
// const currentPort : number = config.port as number;
const currentPort = config.port;
// constant assertion
const configuration = {
    port: 8080,
    prefix: "./api/v6",
};
export {};
