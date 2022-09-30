let terminosA=document.getElementById("terminosA");
let modalTerminos=document.getElementById("modalTerminos");
let cerrarModal=document.querySelector(".cerrarModal");


terminosA.addEventListener("click",()=>{
    modalTerminos.style.display="block";
})

cerrarModal.addEventListener("click",()=>{
    modalTerminos.style.display="none"; 
})

window.addEventListener("click",(e)=>{
    if(e.target==terminosA){
        terminosA.style.display="flex"; 
    }
})