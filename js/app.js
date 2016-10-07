(function (document) {
	$(document).ready(function () {
		var app = {
			steps: ['step-0', 'step-1', 'step-2', 'step-3', 'step-4', 'step-5', 'step-6', 'step-7', 'step-8'],
			init: function () {
				this.goToStep.init();
				$('body').show();
			},
			goToStep: {
				init: function () {
					var hash = window.location.hash.substring(1);
					
					if(hash && app.steps.indexOf(hash)) {
						$('body').removeClass().addClass(hash);
					}
					
					$('.go-to-step').on('click', function(e){
						e.preventDefault;
						
						var url = $(this).attr('href'), idx = url.indexOf('#')
						var step = idx != -1 ? url.substring(idx+1) : '';
						
						if(!step && app.steps.indexOf(step)) {
							return;
						}
						
						$('body').removeClass().addClass(step);
						
					});
				},
				go: function () {

				}

			}

		};

		app.init();
	});
}(document));