//flipback - Object creation function

    ani.flipBack = function () {

		this.start = function(anim)
		{ 
			this.step(anim.selector + " .front", 90);		
			this.step(anim.selector + " .back", 180);		
			anim.current = {};
			anim.current.front = 90;
			anim.current.back = 180;
		}

		this.play = function(anim)
		{
	
			if (anim.current.back > 90){
				anim.current.back = anim.current.back - anim.step;
				this.step(anim.selector + " .back", anim.current.back);
			} else {
				//Set y-Angle of front to 0° - visible
				if (anim.current.front > 0){
					anim.current.front = anim.current.front - anim.step;
					this.step(anim.selector + " .front", anim.current.front);
				} else {
					//anim.done = true
					var evt = jQuery.Event('animationStateChanged');
					evt.state = "done";
					console.log("Flip-trigger!");
					jQuery(window).trigger(evt);
				}
			}
		}
		
		//identisch mit step bei flip!
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
