var guestList = ["Junaid Akram","Allama Iqbal","Irfan Junejo","Daniyal Sheikh"];
var guestNotComing = "Allama Iqbal";
console.log(`${guestNotComing} can't make it.`)

guestList.unshift("Ahmed");
guestList.splice(3,0,"Sana");
guestList.push("Maham");


while(guestList.length > 2) {
console.log(`Dear ${guestList.pop()}, accept our apology.The dinner has been canceled due to some reason`);
}


for(var i = 0; i < guestList.length; i++) {
    if(guestList[i] === "Allama Iqbal") {
        guestList[i] = "Miss Fiza"
    }
    console.log(`Dear ${guestList[i]}, we are waiting for you to join us on this dinner`)
}

guestList.pop();
guestList.pop();
console.log("Guest List: ",guestList)