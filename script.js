document.addEventListener("keyup", e=>{

    if (e.target.matches("#buscador")){
  
        if (e.key ==="Escape")e.target.value = ""
  
        document.querySelectorAll(".nombre").forEach(nombres =>{
  
            nombres.textContent.toLowerCase().includes(e.target.value.toLowerCase())
              ?nombres.classList.remove("filtro")
              :nombres.classList.add("filtro")
        })
  
    }
  
  
  })