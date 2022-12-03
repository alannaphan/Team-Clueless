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
     default: 
     return true;
    }
}

function home(){
    window.location.href="FrontPage.html";
}

function back(){
    window.history.back(); 
}
function liked(animal){
      $.post("http://localhost:8000/api/like/" + animal, function(data) {
            var response = data;
      })
      window.alert("You added 1 like to "+animal+"!");
}

function likedPage() {
      window.location.href="LikedPage.html";
}

/**
 * Load data from database for liked page
 */
function loadLikedPage() {
      $.getJSON("http://localhost:8000/likes", function(data) {
            var response = data;
            var mainDiv = document.getElementById("likedList");

            // for loop to iterate through the response array of animals
            for (var i = 0; i < response.length; i++) {
                var animalData = document.createElement("div");
                animalData.setAttribute("id", "div" + response[i].name);


                // change animal name to include spaces for Red Panda and Giant Panda
                var animalTitle = response[i].name;
                if (animalTitle=="RedPanda") {
                      animalTitle = "Red Panda";
                }
                else if (animalTitle=="GiantPanda") {
                      animalTitle = "Giant Panda";
                }

                // create span to hold animal name
                var animalName = document.createElement("span");
                animalName.setAttribute ("id", "name" + response[i].name);
                animalName.setAttribute("value", animalTitle);
                animalName.innerText = animalTitle;
                  
                //switch case to change the image of the animal
                var newImage = document.createElement("img");
                switch (response[i].name) {
                    case ("RedPanda"):
                        newImage.setAttribute("src", "./photos/red panda/redP.jpg");
                        break;
                    case ("Dog"):
                        newImage.setAttribute("src", "./photos/dogs/dog.jpg");
                        break;
                    case ("Tiger"):
                        newImage.setAttribute("src", "./photos/tigers/tiger.jpg");
                        break;
                    case ("Rabbit"):
                        newImage.setAttribute("src", "./photos/rabbits/rabbit.jpg");
                        break;
                    case ("GiantPanda"):
                        newImage.setAttribute("src", "./photos/giantPA/giantPA.jpg");
                        break;
                    case ("Penguin"):
                        newImage.setAttribute("src", "./photos/penguins/penguin.jpg");
                        break;
                    case ("Capybara"):
                        newImage.setAttribute("src", "./photos/copybara/copyB.jpg");
                        break;
                    case ("Hedgehog"):
                        newImage.setAttribute("src", "./photos/hedgehog/hedge.jpg");
                        break;
                    case ("Horse"):
                        newImage.setAttribute("src", "./photos/horses/horse.jpg");
                        break;
                    case ("Wombat"):
                        newImage.setAttribute("src", "./photos/wombats/womB.jpg");
                        break;
                    case ("Cat"):
                        newImage.setAttribute("src", "./photos/cats/cat.jpg");
                        break;
                }

                //create span to hold animal likes
                var likesAnimals = document.createElement("span");
                likesAnimals.setAttribute("id",response[i].name + "likes");
                likesAnimals.setAttribute("value", response[i].likes);
                likesAnimals.innerText = response[i].likes + " likes";

                animalData.append(animalName);
                animalData.append(newImage);
                animalData.append(likesAnimals);
                
                mainDiv.append(animalData);

            }
      })
}
