var Grid = (function() {

	var _settings = {
		speed: .25,
		gridItems: '.grid__item'
	}

	return {
		show: function() {

			// Stagger effect using the GSAP library
			// @see https://greensock.com/tweenmax
			// @param {Object || Array} element(s) - The element(s) to add tween to
			// @param {Number} seconds - Over many seconds the tween lasts
			// @param {Object} css - The properites of the element to tween
			// @param {Object} ease - Easing Properties built into Tweenmax
			// @param {Number} delay - How many seconds before the next item 
			// in the animation loop starts it's tween after previous has finished
			TweenMax.staggerTo(
				_settings.gridItems,
				_settings.speed, {
					opacity: 1,
					transform: 'scale(1)',
					top: 0,
					ease: Power4.easeIn
				}, .08);

		}
	}


})();

$(document).ready(function() {
	setTimeout(function(){
		Grid.show();
	}, 500)
})

module.exports = Grid;