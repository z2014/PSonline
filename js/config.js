(function () {
	var colorArray = ['red','blue','green','yellow','gray',
	    'pink','orange','black'];
	var fragment = document.createDocumentFragment();
	for (var i = 0; i < 9; i++) {
		var div = document.createElement('div');
		div.className = 'color';
		div.style.backgroundColor = colorArray[i];	
		div.onclick = changeColor.bind(div);
		fragment.appendChild(div);
	}

	$('#colors').append(fragment);
	$('.eraser').click(useEraser);
	$('input').RangeSlider({ min: 0,   max: 100,  step: 0.1,  callback: change});

	function changeColor(e) {
		e.stopPropagation();
		$('.pen').removeClass().addClass('pen '+this.style.backgroundColor);
		move($('.eraser'),0,-4);
		globalUser.tool = 'pen';
		globalUser.color = this.style.backgroundColor;
	}

	function useEraser(e) {
		e.stopPropagation();
		move($('.eraser'),20,4);
		globalUser.tool = 'eraser';
		globalUser.color = 'white';
	}

	function change(input) {
		var weight = Math.floor(10*input.attr('value')/100) + 10;
		globalUser.weight = weight;
		$('#radius').css('width',weight);
		$('#radius').css('height',weight);
		$('#radius').css('borderRadius',weight);
	}

})()