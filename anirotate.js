//Rotation - Object creation function

    ani.rotate = function () {

		this.start = function(anim)
		{ 
			this.step(anim, anim.from.deg);		
			anim.current.deg = anim.from.deg
		}

		this.play = function(anim)
		{
		//console.log("rotate-elem: " + anim.to.deg );
			if (anim.current.deg < anim.to.deg){
				anim.current.deg = anim.current.deg + anim.step;
				this.step(anim, anim.current.deg)
			} else {

			anim.done = true
    var evt = jQuery.Event('animationStateChanged');
    evt.state = "rotate";
 	console.log("Rotate-trigger!");
   jQuery(window).trigger(evt);

			}
		}

		this.step  = function(anim, deg)
		{

			jQuery(anim.selector).css("-webkit-transform-style: preserve-3d");
			jQuery(anim.selector).css({
			"webkitTransform":"rotate(" + deg.toString() + "deg)",
			"MozTransform":"rotate(" + deg.toString() + "deg)",
			"msTransform":"rotate(" + deg.toString() + "deg)",
			"OTransform":"rotate(" + deg.toString() + "deg)",
			"transform":"rotate(" + deg.toString() + "deg)"
			});
		}
	}
