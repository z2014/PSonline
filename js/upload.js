$('#file').change(function() {
	if (typeof FileReader != 'undefined') {
	　　var acceptedTypes = {
	　　　　'image/png': true,
	　　　　'image/jpeg': true,
	　　　　'image/gif': true
	　　};
	　　if (acceptedTypes[document.getElementById('file').files[0].type] === true) {
	　　　　var reader = new FileReader();
	　　　　reader.onload = function (event) {
	　　　　　　var image = new Image();
	　　　　　　image.src = event.target.result;
	            image.id = 'img';
	　　　　　　image.width = 100;
	　　　　　　$('#picture').append(image);
	　　　　};
	　　　　reader.readAsDataURL(document.getElementById('file').files[0]);
	　　}
	};
})
$('#render').click(function() {
	if ($('#img')) {
        var ctx = $('#canvas')[0].getContext('2d');
        var image = new Image();
        image.src = $('#img').attr('src');
        image.onload = function() {
        	ctx.drawImage(image,0,0,$('#canvas')[0].width,$('#canvas')[0].height);
        }
	}
})

$('#download').click(function() {
	var src = $('#canvas')[0].toDataURL('image/png');
	downloadFile(src);
})





// var form = $('#img-upload');
// form.on('submit',function() {
// 	if (window.FormData) {
// 		var formdata = new FormData($('#img-upload')[0]);
// 		$.ajax({
// 			url:'http://www.baidu.com',
// 			type:'post',
// 			formdata,
// 			contentType:'application/json;charset=utf-8',
// 			success:function(data) {
//                 console.log(data);
// 			},
// 			error:function(err) {
// 				console.log(err);
// 			}
// 		})
// 	}
// })