checkWindowsSize();
var width,height;

function checkWindowsSize(){
width = this.innerWidth;
height = this.innerHeight;
    
    if(width < 1200){
        document.getElementById('top_menu').style.display = 'none';
        document.getElementById('social').style.display = 'none';
        document.getElementById('menu').style.display = 'block';
    }
    else {
        document.getElementById('top_menu').style.display = 'block';
        document.getElementById('social').style.display = 'block';
        document.getElementById('menu').style.display = 'none';
    }
    
    
    
    setTimeout(checkWindowsSize);
}

function showMenu(){
    document.getElementById("menu_nav").style.display = 'block';
    
}


function Onclose(){
    document.getElementById("menu_nav").style.display = "none";
}

VANTA.TOPOLOGY({
    el: "#vantajs",
   
  
  })
  
  VANTA.TOPOLOGY('#vantajs')