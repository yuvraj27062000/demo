console.log("hello.....");


let obj = {
    name:'yuvraj',
    age:21,
    get value(){
        console.log("we are getting the value from object =  name "+ this.name+" age "+this.age);
    },
    set update(val){
        this.age = val;
        console.log("we are updating the value of object = Now the age = "+ this.age);
    }
}

console.log(obj.name);
obj.value;
obj.update = 22;