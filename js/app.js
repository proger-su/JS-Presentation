(function (document, window) {
	$(document).ready(function () {
		var app = {
			init: function () {
				this.progressBar.init();
				this.goToStep.init();
				$('body').show();
			},
			goToStep: {
				first: null,
				pager: null,
				init: function () {
					this.first = $('.steps .step').first();
					this.pager = $('.next-step, .prev-step');

					this.pager.on('click', this.go);
					
					//Go to step by hash
					this.goByHash();
				},
				go: function () {
					//Move slider
					var $current = $('.steps .current');
					var $next = $(this).hasClass('next-step') ? $current.next() : $current.prev();
					var hash = 'step-' + $next.index();
					
					if(!$next.length){
						return;
					}
					
					app.goToStep.move($next.index());
					
					app.progressBar.move($next.index());
					
					//Update step class
					$current.removeClass('current');
					$next.addClass('current');
					
					//Update body class
					$('body').removeClass().addClass(hash);
					
					//Update hash
					window.location.hash = '#' + hash;
				},
				
				goByHash: function(){
					var hash = window.location.hash.substring(1);
					var index = hash.replace(/\D/g,'');
					
					if(!index){
						return;
					}
					
					var target = $('.steps').children().eq(index);
					
					if(!target.length){
						return;
					}
					
					$('body').removeClass().addClass(hash);
					$('.steps').find('.current').removeClass('current');
					target.addClass('current');
					
					this.move(index);
					
					app.progressBar.move(index);
				},
				
				move: function(index){
					this.first.css({
						'margin-left': '-' + index + '00%'
					});
				}
				
			},
			
			progressBar: {
				bar: null,
				bullet: null,
				steps: null,
				
				init: function(){
					this.bar = $('.progress-bar');
					this.bullet = $('.bullet', this.bar);
					this.steps = $('.steps .step').length;
				},
				move: function(index){
					this.bullet.css({
						'left': ((100 / this.steps) * index) + '%'
					});
					this.bullet.text(index);
				}
			},

		};

		app.init();
	});
}(document, window));