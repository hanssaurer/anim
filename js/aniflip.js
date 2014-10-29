//Flip - Object creation function

    ani.flip = function (player) {
	
		var myPlayer = player;

		this.start = function(anim)
		{ 
			this.step(anim.selector + " .front", 0);		
			this.step(anim.selector + " .back", 90);		
			anim.current = {};
			anim.current.front = 0;
			anim.current.back = 90;
		}

		this.play = function(anim)
		{
			if (anim.current.front < 90){
				anim.current.front = anim.current.front + anim.step;
				this.step(anim.selector + " .front", anim.current.front);
			} else {
				if (anim.current.back < 180){
					anim.current.back = anim.current.back + anim.step;
					this.step(anim.selector + " .back", anim.current.back);
				} else {
					console.log("Flip done!");
					myPlayer.done();
				}
			}
		}

		this.step  = function(selector, deg)
		{
			jQuery(selector).css("-webkit-transform-style: preserve-3d");
			jQuery(selector).css({
				"webkitTransform":"rotateY(" + deg.toString() + "deg)",
				"MozTransform":"rotateY(" + deg.toString() + "deg)",
				"msTransform":"rotateY(" + deg.toString() + "deg)",
				"OTransform":"rotateY(" + deg.toString() + "deg)",
				"transform":"rotateY(" + deg.toString() + "deg)"
			});
		}
	}

