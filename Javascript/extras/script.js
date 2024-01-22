var trailer=document.getElementById("trailer")

window.onmousemove= e=>{
    const x=e.clientX - trailer.offsetWidth /2
          y=e.clientY - trailer.offsetHeight/2
    trailer.style.left=x
    trailer.style.top=y

    const keyframes={
        transform:`translate(${x}px, ${y}px`
    }
    trailer.animate(keyframes,{
        duration: 900,
        fill:"forwards"
    });

}