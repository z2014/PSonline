function move(target,goal,speed) {
	var timer;
	if (!timer) {
		timer = setInterval(function(){
	        var left = parseInt(target.css('left'));
	        if (left == goal) {
	        	clearInterval(timer);
	        }else {
	        	left = left + speed + 'px';
	        	target.css('left',left);
	        }
		},50);
	}
}

function downloadFile(src) {
    var a = document.createElement('a');
    a.download = 'pic.png';
    a.href = src;
    $('#picture').append(a);
    a.click(function() {
        console.log('download');
    })();
}

function getClient(cvs,x,y) {
    var box = cvs.getBoundingClientRect();
    return {x:x-box.left,y:y-box.top};
}

function draw(ctx,client,globalUser) {
    ctx.beginPath();
    ctx.arc(client.x,client.y,globalUser.weight/2,0,2*Math.PI,false);
    ctx.fillStyle = globalUser.color;
    ctx.fill();
    ctx.closePath();
}

$.fn.RangeSlider = function(cfg){
    this.sliderCfg = {
        min: cfg && !isNaN(parseFloat(cfg.min)) ? Number(cfg.min) : null, 
        max: cfg && !isNaN(parseFloat(cfg.max)) ? Number(cfg.max) : null,
        step: cfg && Number(cfg.step) ? cfg.step : 1,
        callback: cfg && cfg.callback ? cfg.callback : null
    };

    var $input = $('#progress');
    var min = this.sliderCfg.min;
    var max = this.sliderCfg.max;
    var step = this.sliderCfg.step;
    var callback = this.sliderCfg.callback;

    $input.attr('min', min)
        .attr('max', max)
        .attr('step', step);

    $input.bind("input", function(e){
        $input.attr('value', this.value);
        $input.css( 'background', 'linear-gradient(to right, #059CFA, white ' + this.value + '%, white)' );

        if ($.isFunction(callback)) {
            callback($input);
        }
    });
};