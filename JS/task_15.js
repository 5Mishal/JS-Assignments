var guestList = ["Junaid Akram","Allama Iqbal","Irfan Junejo","Daniyal Sheikh"];
var guestNotComing = "Allama Iqbal";


for(var i = 0; i < guestList.length; i++) {
    if(guestList[i] === guestNotComing) {
        console.log(`${guestList[i]} can't make it.`)
        guestList[i] = "Miss Fiza"
    }
    console.log(`Hello ${guestList[i]}, you are warmly invited to join us at the dinner.`)
}