const $corredor = document.getElementById("corredor");
const $body = document.body;
const $mensaje = document.getElementById("mensaje");
$corredor.addEventListener('animationend', (e)=>{
    if(e.animationName === "subir"){
        $corredor.style.animation = "salir 5s forwards"
        $mensaje.innerText="¡¡Llegó!! ¡¡Fiestaa!!";
        $body.style.animation="fiesta 1s linear infinite"
    }
})