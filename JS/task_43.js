var magicians = ["Criss Angel","Harry Houdini","Derren Brown"];
var greatMagicians = ["Criss Angel","Harry Houdini","Derren Brown"];

function show_magicians(magicians) {
    for(var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
show_magicians(magicians);

function make_great(greatMagicians) {
    for(var i = 0; i < greatMagicians.length; i++) {
        console.log(`Great ${greatMagicians[i]}`);
    }
}

make_great(greatMagicians);