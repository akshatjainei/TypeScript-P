let score : number | string = 10

score = 40
score = "50"

type User = {
    name : string;
    id : number
}
type Admin = {
    username : string;
    id : number
}

let Akshat : User|Admin = {
    name : "Akshat" ,
    id : 8
}

Akshat = {
    username : "Joyboy",
    id : 9
}

function getDbId (id : string | number) {
    if(typeof id === 'string'){
        id.toUpperCase()
    }
}

// Union array

let arr : (number | string)[] = ["1" ,"2",3]