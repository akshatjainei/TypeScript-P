const User_obj = {
    name : "Akshat",
    email : "jainakshat447@gmail.com",
    isPaid : false
}

function createCourse({name : string , isPaid:boolean}):{name : string , isPaid:boolean}{
    return {name :"kaju",isPaid:true}
}

createCourse(User_obj)

type User = {
    name : string;
    email : string;
    isPaid : boolean;
}

function createUser(user : User):User{
    return {name : user.name , email : user.email , isPaid : user.isPaid}
}

createUser(User_obj)

//readonly and optional 
//readonly make the property immutable
// ? (optional) makes the propert optional
type Person = {
    readonly _id : string
    name : string
    isPaid : boolean
    credcard ?: number
}
export {}