// Generic type
const wrapInArray = <T>(value : T) => {
    return [value];
}

const numArr = wrapInArray<number>(1232);
const strArr = wrapInArray<string>("abc");
strArr.map((item) => item.toUpperCase);

// Another Use case
interface User {
    name: string;
    role : string;
}

interface Blog {
    title : string;
    description : string;
    date : string;
}

interface apiRespense <T> {
    data: T;
    success : boolean;
    statusCode : number;
}

type UserRes = apiRespense<User>;
type BlogRes = apiRespense<Blog>;

const userResponse : UserRes = {
    data : {
        name: "maruf",
        role: "manager",
    },
    success : true,
    statusCode: 123,
}