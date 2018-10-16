var image = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'imagen.jpg');

var imageViewImage= Ti.UI.createImageView({
	image:image.read(),
	height:'50%',
	width:'50%',
	backgroundColor:'blue',
	top:'10'
});

function AbrirCamara(e) {
	if(!Ti.Media.hasCameraPermissions()){
		Ti.Media.requestCameraPermissions(function(e){
			if(e.succes){
				alert('imagen abrir');
				camaraFoto();
			}else{
				Ti.API.error('No se puede tener permisos a la camara');
			}
		});
	}else{
		camaraFoto();
	}
	
}

function camaraFoto(event){
	Ti.Media.showCamera({
		saveToPhotoGallery:true,
		allowEditing:false,
		autohide:false,
		
		success:function(event){
		 	imageViewImage.image=event.media;
		 	var imageSave =Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,'image.jpg');
		 	imageSave.write(imageViewImage.image);
		 	alert('Imagen guadada en galeria');
		}
	});
}

$.index.open();
