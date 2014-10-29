//Rotation - Object creation function

    ani.rotate = function (player) {

		var myPlayer = player;
		
		this.start = function(anim)
		{ 
			this.step(anim, anim.from.deg);		
			anim.current.deg = anim.from.deg
		}

		this.play = function(anim)
		{
			if (anim.current.deg < anim.to.deg){
				anim.current.deg = anim.current.deg + anim.step;
				this.step(anim, anim.current.deg)
			} else {

				myPlayer.done();
				console.log("Rotate done!");
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
