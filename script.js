//this is our front end js// 
function moreDetail(animal){
    var a = parseInt(animal);
    switch (a){
    case (1): 
          window.location.href="moreCapybara.html";
          break;
    case (2): 
          window.location.href="moreCat.html";
          break;
    case (3): 
          window.location.href="moreDog.html";
          break;
    case (4): 
          window.location.href="moreGiantpanda.html";
          break;    
    case (5): 
          window.location.href="moreHedgehog.html";
          break;   
    case (6): 
          window.location.href="moreHorse.html";
          break;  
    case (7): 
          window.location.href="morePenguin.html";
          break;
    case (8): 
          window.location.href="moreRabbit.html";
          break;
    case (9): 
          window.location.href="moreRedpanda.html";
          break;
    case (10): 
          window.location.href="moreTiger.html";
          break;
    case (11): 
          window.location.href="moreWombat.html";
          break;
    }
}

function home(){
    window.location.href="FrontPage.html";
}

function back(){
    window.history.back(); 
}
function liked(){
      window.location.href="LikedPage.html";
}

