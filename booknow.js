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

$(document).ready(function () {
          if (!$.browser.webkit) {
              $('.wrapper').html('<p>Sorry! Non webkit users. :(</p>');
          }
      });


$(document).ready(function(){
    $('.submit_btn').click(function(event){
       
        
        var name = $('.name').val()
        var pilgrimsCount = $('.pilgrimsCount').val()
        var address = $('.address').val()
        var phone = $('.phone').val()
        var email = $('.email').val()
        var message = $('.message').val()
        var payment = $('.payment').val()
        
    })
})