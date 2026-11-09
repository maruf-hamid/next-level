// type assertion

// type assertion as
type Status = "pending" | "approved" | "rejected";

const someStaus : string = "pending";

const currentStatus = (status : Status) => {
    console.log("Your current status is" + status);
};
currentStatus(someStaus as Status);

// non null type assertion
interface Config {
    port? : number;
}
const config : Config = {
    port : 5000
}

// const currentPort : number = config.port as number;
const currentPort : number = config.port!;

// constant assertion
const configuration = {
    port : 8080,
    prefix : "./api/v6",
} as const;