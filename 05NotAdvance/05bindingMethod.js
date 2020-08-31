// The bind() method creates a new function that, 
// when called, has its this keyword set to the 
// provided value, with a given sequence of 
// arguments preceding any provided when 
// the new function is called.

const gyamzo = {
    fname: "gyamzo",
    lname: "sherpa",
    role: "admin",
    getInfo: function(){
        console.log(`
            First name is ${this.fname}
            last name is ${this.lname}
            his role is ${this.role}
        `);
    },
};

const mg = {
  fname: "luck",
  lname: "suck",
  role: "sub-admin"
};

// gyamzo.getInfo();
// mg.getInfo();

// gyamzo.getInfo.bind(mg)();
        //  0R
// var mgInfo = gyamzo.getInfo.bind(mg);
// mgInfo();

gyamzo.getInfo.call(mg); //call directly