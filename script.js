// menu

function abrirMenu(){   
    var navFechada = window.document.getElementById(`nav-2`)
    var iconMenuFechado = window.document.getElementById(`menuEscondido`)
    var iconMenuAberto = window.document.getElementById(`iconMenuAberto`)

    if(navFechada.style.display === "none"){
        navFechada.style.display = "block"
    
       
    }else{
        navFechada.style.display = "none"
        }
        if(iconMenuAberto.style.display === "none"){
         iconMenuAberto.style.display = "block"
         iconMenuFechado.style.display = "none" 
        
        }else{
            iconMenuAberto.style.display = "none" 
           
        }
        
  
}

// fechar menu
function fecharMenu(){
    var navFechada = window.document.getElementById(`nav-2`)
    var iconMenuFechado = window.document.getElementById(`menuEscondido`)
    var iconMenuAberto = window.document.getElementById(`iconMenuAberto`)

    if(navFechada.style.display === "block"){
        navFechada.style.display = "none"
    
       
    }else{
        navFechada.style.display = "block"
        }

        if(iconMenuAberto.style.display === "block"){
         iconMenuAberto.style.display = "none"
         iconMenuFechado.style.display = "block"  
         
        
        }else{
            iconMenuAberto.style.display = "block" 
           
        }
        
}


const body = document.body;

body.addEventListener('click', (event) => {
  const toggleButton = document.getElementById('menuEscondido');
  var divMenu = window.document.getElementById(`nav-2`)
  var mudarIcon = window.document.getElementById(`menuEscondido`)
  var iconFechado = window.document.getElementById(`iconMenuAberto`)
 


  // Verifica se o clique ocorreu fora do menu e fora do botão
  if (!divMenu.contains(event.target) && event.target !== toggleButton) {
    // Oculta o menu
    divMenu.style.display = 'none';
    mudarIcon.style.display = "block"
    iconFechado.style.display = "none"

    

  }
});



// video escondido
function abrirVideo(){
    var video = window.document.getElementById(`video-escondido`)
    if(video.style.display === "none"){
        video.style.display = "block"
    }else{
        video.style.display = "none"
    }
}
// fecharVideo

function fecharVideo(){
    var fecharVideo = window.document.getElementById(`video-escondido`)
    if(fecharVideo.style.display === "block"){
        fecharVideo.style.display = "none"
    }else{
        fecharVideo.style.display = "block"
    }
}