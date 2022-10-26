var current_users = ["Junaid Akram","Allama Iqbal","Irfan Junejo","admin","Daniyal Sheikh"];
var new_users = ["Irfan Junejo","Hiba","Fiza","Junaid Akram","Moiz"];

for(var i = 0; i < new_users.length;i++) {
        if(current_users.includes(new_users[i])) {
            console.log(new_users[i], "this user name is already exist, please try another username")
        } else {
            console.log(`The username ${new_users[i]} is available");
        }
}