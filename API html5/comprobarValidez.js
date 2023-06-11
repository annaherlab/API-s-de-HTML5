const reproductor = document.getElementById("video");
document.getElementById("selector").addEventListener("change", MostrarVideo);

function MostrarVideo(){
	reproductor.style.display = "block";
}



function cargarVideo(fichero)
	{
		//alert(fichero.type);
		if(!fichero.type == 'video/mp4')
			{
				alert('El fichero no es de tipo mp4');
				return;
			}
			reproductor.src = URL.createObjectURL(fichero);
			mensajeCarga.style.display = "block";

			reproductor.addEventListener("canplaythrough", (event) => {
			mensajeCarga.style.display = "none";
			  });

	}