const names = ["youtube", "facebook","instagram","amazon","netflix"];

// for of
for (const n of names){
    console.log(n);
}

const symbols = {
    yt:"youtube",
    ig:"instagram",
    fb:"facebook",
}

// for in 
for (const n in symbols){
    console.log(`key is:${n} and value is: ${symbols[n]}`);
}
