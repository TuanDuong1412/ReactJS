interface PersonInterface{
    name:string;
    age:number;

    introduce:(message:string) => string;
}

let person:PersonInterface = {
    name:'abc',
    age:20,
    introduce(message:string){
        return message;
    }
}