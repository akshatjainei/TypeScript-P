interface TakePhoto{
    cameraMode : string
    filter : string 
    burst : number
}

interface Story {
    createStory () : void
}

class Instagram implements TakePhoto{
    constructor(
        public cameraMode : string,
        public filter : string , 
        public burst :  number
    ){}
}

class YouTube implements TakePhoto , Story{
    constructor(
        public cameraMode : string,
        public filter : string , 
        public burst :  number,
        protected views : number
    ){}
    createStory(): void {
        console.log('Story Was Created');
    }
}