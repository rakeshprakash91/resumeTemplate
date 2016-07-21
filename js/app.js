(function(){
var
	form = $('#resume'),
	cache_width = form.width(),
	a4  =[ 840,  800];  // for a4 size paper width and height

$('#create_pdf').on('click',function(){
	$('body').scrollTop(0);
	createPDF();
});
//create pdf
function createPDF(){
	getCanvas().then(function(canvas){
		var
		img = canvas.toDataURL("image/png"),
		doc = new jsPDF({
          unit:'px',
          format:'a4'
        });
        doc.addImage(img, 'jpeg', 20, 20);
        var d = new Date;
        doc.save('Rakesh_Prakash_Resume'+d.toUTCString()+'.pdf');
        form.width(cache_width);
	});
}

// create canvas object
function getCanvas(){
    form.width(a4[0]);
	return html2canvas(form,{
    	imageTimeout:2000,
    	removeContainer:true
    });
}

}());
