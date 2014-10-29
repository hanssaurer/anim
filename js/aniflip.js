//Flip - Object creation function

    ani.flip = function () {

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
			//console.log("flip-elem: " + anim.selector );
			if (anim.current.front < 90){
				anim.current.front = anim.current.front + anim.step;
				this.step(anim.selector + " .front", anim.current.front);
			} else {
				if (anim.current.back < 180){
					anim.current.back = anim.current.back + anim.step;
					this.step(anim.selector + " .back", anim.current.back);
				} else {
					//anim.done = true
					var evt = jQuery.Event('animationStateChanged');
					evt.state = "done";
					console.log("Flip-trigger!");
					jQuery(window).trigger(evt);
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

