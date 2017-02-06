(function() {
	var ismousedown = false,
	    client,
	    cvs = $('#canvas'),
	    ctx = cvs[0].getContext('2d');
    
    cvs.mousedown(function(ev) {
    	ev.stopPropagation();
    	ismousedown = true;
    	client = getClient(cvs[0],ev.clientX,ev.clientY);
    	draw(ctx,client,globalUser);
    });

    cvs.mousemove(function(ev) {
    	ev.stopPropagation();
    	if (ismousedown) {
    		client = getClient(cvs[0],ev.clientX,ev.clientY);
    		draw(ctx,client,globalUser);
    	}
    });

    cvs.mouseup(function(ev) {
    	ismousedown = false;
    });

    cvs.mouseout(function(ev) {
    	ismousedown = false;
    })
})();
