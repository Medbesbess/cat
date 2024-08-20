// my cat
function cat() {
    return {
        
        tiredness: 100,
        hunger: 100,
        lonliness: 100,
        happiness: 0,
        feed: feed,
        sleep: sleep,
        play:play,
        rest: 0,
        history:[],
    }
}
var feed = function (f) {
    var c = this.hunger - f
    var h = this.happiness + f / 2
    this.happiness = Math.min(50, h)
    if (c <= 0) {
        this.rest += -c
        this.hunger = 0
        this.history.push('feed')
        return ("is full and rest" + this.rest + " food")
    }
   
    else this.hunger = c
    var vx = 100 - this.hunger
    console.log("your cat happy by " + this.happiness.toFixed(0) + "%     and he is  is full of  " + vx + "   your cat hunger rate is   " + this.hunger + "  %")
}
var w = cat()

var sleep = function (min) {
    var sl = this.tiredness - min
    var han = this.hunger + (min / 5)
    var lon= this.lonliness +min
    this.lonliness=Math.min(100, lon)
    this.hunger = Math.min(100, han)
    this.tiredness = Math.max(0, sl)

    console.log(" cat sleep " + min + "  his tiredness rate is " + this.tiredness + "%  and his hunger rate is " + this.hunger.toFixed(0) + "%  and hid lonliness rate is"+ this.lonliness+"%")

}
var w = cat()

var play = function (p) {
}
   