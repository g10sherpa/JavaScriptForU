var User = function (firstName, fallInLove){
    this.firstName = firstName;
    this.fallInLove = fallInLove;
    this.getFallInLove = function (){
        console.log(`falll in love: ${this.fallInLove}`);
    };
};

User.prototype.getFirstName = function(){
    console.log(`your name is : ${this.firstName}`);
}

var gyamzo = new User("Gyamzo", 4);
gyamzo.getFallInLove();
gyamzo.getFirstName();
// console.log(gyamzo);

var Laxmi = new User("Laxmi",1);
Laxmi.getFallInLove();
// console.log(Laxmi);