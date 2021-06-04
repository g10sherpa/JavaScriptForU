//event loop

const eno = () =>{
    console.log("i am user");
};

const deno = () => {
    setTimeout(() => {
        console.log("hurrayyyyyy");
    }, 3000)
  console.log("i am user no.2");
};

const feno = () => {
  console.log("i am user no.3");
};

const geno = () => {
  console.log("i am user no.4");
};

eno();
deno();
geno();
feno();