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
$("#catpho").attr("src", "image/eat.gif")
$("#audio").attr("src", "audio/eat.mp3")[0].play();

var c = this.hunger - f;
var h = this.happiness + f / 2;
this.happiness = Math.min(100, h);
if (c <0) {
    this.rest += -c;
    this.hunger = 0;
        Message("Your cat is full and rest" + this.rest + " food")
    }
   
    else{  this.hunger = c;
        var vx = 100 - this.hunger;
        $(".happiness").css("width",this.happiness+"%")
        $(".happiness").html(this.happiness+"%")
        $(".hunger").css("width",this.hunger+"%")
        $(".hunger").html(this.hunger+"%")
    
 
}
}



var sleep = function (min) {
    $("#catpho").attr("src", "image/sleep.gif")
    $("#audio").attr("src", "audio/sleep.mp3")[0].play();
    var sl = this.tiredness - min
    var han = this.hunger + min 
    var lon= this.lonliness +min
     var hay =this.happiness -min
     this.happiness=Math.max(0, hay)
    this.lonliness=Math.min(100, lon)
    this.hunger = Math.min(100, han)
    this.tiredness = Math.max(0, sl)
    $(".happiness").css("width",this.happiness+"%")
    $(".happiness").html(this.happiness+"%")
    $(".lonliness").css("width",this.lonliness+"%")
    $(".lonliness").html(this.lonliness+"%")
    $(".hunger").css("width",this.hunger+"%")
    $(".hunger").html(this.hunger+"%")
    $(".tiredness").css("width",this.tiredness+"%")
    $(".tiredness").html(this.tiredness+"%")
    if (this.hunger===100){Message("Your cat is hangry and he need to eat")}
    if(this.lonliness===100){Message("your cat feels alone and need to play")}
    
}

var play = function (p) {
    $("#catpho").attr("src", "image/play.gif")
    $("#audio").attr("src", "audio/play.mp3")[0].play();
    var seul = this.lonliness - p
    var tir = this.tiredness + p 
    var hap = this.happiness + p
    var phan=this.hunger+p
    this.hunger    =Math.min(100, phan)
    this.lonliness = Math.max(0, seul)
    this.tiredness = Math.min(100, tir)
    this.happiness = Math.min(100, hap)
    
        $(".happiness").css("width",this.happiness+"%")
        $(".happiness").html(this.happiness+"%")
        $(".hunger").css("width",this.hunger+"%")
        $(".hunger").html(this.hunger+"%")
        $(".tiredness").css("width",this.tiredness+"%")
        $(".tiredness").html(this.tiredness+"%")
        $(".lonliness").css("width",this.lonliness+"%")
        $(".lonliness").html(this.lonliness+"%")
        if (this.hunger===100){Message("Your cat is hangry and he need to eat")}
        if(this.tiredness===100){Message("your cat is tired and need to sleep")}
}

$('#feed-b').click(function()  {w.feed(20)})
$('#sleep-b').click(function() {w.sleep(20)})
$('#play-b').click(function()  {w.play(20)})

function Message(msg) {
    $('#message').text(msg);
}

var w = cat()
