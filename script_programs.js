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

// Enhanced scroll reveal animations
function initScrollReveal() {
    const elements = document.querySelectorAll('.fade-in-on-scroll, .columns .column');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    elements.forEach(element => {
        observer.observe(element);
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initScrollReveal();
    
    // Add staggered animation delays to columns
    const columns = document.querySelectorAll('.columns .column');
    columns.forEach((column, index) => {
        column.style.animationDelay = `${index * 0.1}s`;
    });
});

// Re-initialize on window resize
window.addEventListener('resize', () => {
    initScrollReveal();
});