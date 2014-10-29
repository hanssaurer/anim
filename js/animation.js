var ani = {}; 		//Namespace
ani.def = [];

$(document).ready(function(e) {
	
	//Read animations as JSON
    jQuery.getJSON('JSON/animations.json',function(animations){
        console.log('success');
		//animations contains named objects
        jQuery.each(animations,function(name,anim){
			console.log("animation:" + name + "type: " + anim.type);
			ani.def[name] = anim;
		});
    }).done(function() {	   
		prepareAnimations();
	}).fail(function(){
        console.log('error');
    });

	
// Sequences can have multiple animations
// Müssen auch noch gelesen werden
var sequences = [];
  sequences.push({"event":"ready", "animations":["t7flip", "t3rotate"]});
  sequences.push({"event":"click","element":"#t1", "animations":["t7flip","t7flipBack","t5rotate"]});


	function prepareAnimations() {
	//Prepares the animations
	//either by creating a sequence player
	//or by providing an callback function that creates a  seequence player
		jQuery.each(sequences, function (i,seq) {
			console.log ("Init sequence: " + i);	
			if (seq.element) {
				jQuery(seq.element).on(seq.event, function() {
					seq.player = new seqPlayer(seq.animations);
				})
			} else {
				seq.player = new seqPlayer(seq.animations);
			}
		})

	}  

//  "logoRotate": {"type": "move",     "selector": "img:eq(0)","from": {y:"out"}, "to":{dest: "origin"}, "step": 2, "interval": 40},
//  "rotatet3":   {"type": "rotate",    "selector": "#t3", "from": {deg: 0}, "to":{deg:360}, current:{deg:0}, "step": 1, "interval": 20},
//  "scaleLogoDown":  {"type": "scale",    "selector": "img:eq(0)", "from": {x:2,y:2}, "to":{x:0, y:0}, "step": 0.05, "interval": 50},
//  "scaleLogoUp":  {"type": "scale",    "selector": "img:eq(0)", "from": {x:0,y:0}, "to":{x:1, y:1}, "step": 0.05, "interval": 50},

	
	function AnimPlayer(def, sequencePlayer) {
		
		//var SP = sequencePlayer;
		
		//def.type holds the name of the animation object 
		//http://stackoverflow.com/questions/359788/how-to-execute-a-javascript-function-when-i-have-its-name-as-a-string
		var animation = new window["ani"][def.type](sequencePlayer);
		animation.start(def);
		console.log("animation started!");
		
        this.timer=window.setInterval(function(){animation.play(def)}, def.interval);

		
	}


	function seqPlayer(animations) {
	  //Ist das persistent?
	  var mySequence = animations;
	  var animationNr;
	  var animPlayer;

		this.playNext = function() {
			//The animations do have names, but the player traverses by index
			if (typeof animationNr === 'undefined') {
				animationNr = 0; 
			} else {
				animationNr = animationNr + 1; 
			}
			
			if (animationNr < mySequence.length) {
				this.play();
			} else {
				console.log("Sequence beemdet");
			}
		};

		this.play = function() {
			animPlayer = new AnimPlayer(ani.def[mySequence[animationNr]], this);
		};
		
		this.done  = function() {
		//animation is finished - play next animation, if there is next
			clearInterval(animPlayer.timer);
			animPlayer.timer
			this.playNext();
		}

		this.playNext();
		console.log("Sequence: " + animationNr + " started");

	}





});
