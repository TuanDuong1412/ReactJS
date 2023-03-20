import {Animals} from './vidu.js'
class Cats extends Animals{
    constructor(name,age,color){
        super(name,age)
    }
    getcolor(){
        return this.color;
    }
}
const cat = new Cats("Begge",1,red)
console.log(cat.sing());