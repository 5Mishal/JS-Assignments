var magicians = ["Criss Angel","Harry Houdini","Derren Brown"];

function make_great(array) {
        for(var i = 0; i < array.length; i++) {
        magicians[i] = `Great ${array[i]}`;
    }
    return magicians;
}

function show_magicians(array) {
    for(var i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

show_magicians(make_great(magicians));
