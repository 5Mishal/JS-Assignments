var guestList = ["Junaid Akram","Allama Iqbal","Irfan Junejo","Daniyal Sheikh"];
var guestNotComing = "Allama Iqbal";
console.log(`${guestNotComing} can't make it.`)

guestList.unshift("Ahmed");
guestList.splice(3,0,"Sana");
guestList.push("Maham");

for(var i = 0; i < guestList.length; i++) {
    if(guestList[i] === "Allama Iqbal") {
        guestList[i] = "Miss Fiza"
    }
    console.log(`Dear ${guestList[i]}, we are waiting for you to join us on this dinner`)
}
