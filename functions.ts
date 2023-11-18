const heros = ["supamen","G1one","Naruto"]

heros.map((heros:string):string=>{
    return `hero is ${heros}`
})

function consoleError(errmsg:string):void{
    console.log(errmsg)
}

//never is close to void as it returns nothing but mainly used for error handlers
function handleError(errmsg : string) : never{
    throw new Error(errmsg)
}