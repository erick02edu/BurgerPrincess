var animation=document.getElementById('sprite');

animation.style.animationPlayState="paused";

document.addEventListener('DOMContentLoaded', function() {
    //Botones
    var btnCompra=document.querySelectorAll('.btnCompra');
    var btnCerrar=document.getElementById('btnModalCompra');
    //Modal
    var ModalCompra=document.getElementById('vtnModal-compra');

    //Abrir modal
    btnCompra.forEach(function(btn) {
        btn.addEventListener('click', function() {
            animation.style.animationPlayState="running";
            ModalCompra.style.transform="translate(-50%,-50%)";
        });
    });

    //Cerrar modal
    btnCerrar.addEventListener('click',()=>{   
        animation.style.animationPlayState="paused"; 
        ModalCompra.style.transform="translate(-50%,200%)";
    });
});





