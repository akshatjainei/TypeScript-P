// class Usera {
//     private email : string
//     public name : string
//     readonly city : string = "Jaipur"
//     constructor(name : string , email : string){
//         this.email = email
//         this.name = name
//     }
// }

class Usera {
    _courseCount : number = 1
    readonly city : string = "Jaipur"
    constructor(
        public name : string , 
        private email : string
        ){
    }
    //Getter
    get getAppleEmail () : string{
        return `apple${this.email}`
    }
    get courseCount():number{
        return this.courseCount
    }
    set courseCount(count){
        if(count <=1){
            throw new Error('Cannot be less than 1')
        }
        this._courseCount = count
    }
}

const akshata = new Usera("Akshat" , "a@a.com")
console.log(akshata.courseCount)