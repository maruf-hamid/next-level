//literal type
type status = "pending";

const name : status = "pending"

// basic union
type identity = string | number;
const id : identity = 2433;

// literal union
type Role = "user" | "admin" | "manager";
const userRole : Role = "admin";

// object union
type Admin = {id : number, role : "admin", previlige : string[]}
type Member = {id : number, role : "member", plans : string[]}
type user = Admin | Member;

const user1 : user = {id : 12123, role : "admin", previlige : []}