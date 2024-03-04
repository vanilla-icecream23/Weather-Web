
function changeCity(){
        let city = prompt("What city do you live?");
        let temperature = prompt("What temperature is it?");
        let h1 = document.querySelector("h1");
        
        
        if (temperature >= 0){
            h1.innerHTML= "😊" +"<br>" + " Currently" +" "+ temperature +"°C in " + city ;
        }else{
            (temperature<0);
                h1.innerHTML="🥶" + "<br>" + " Currently" +" "+ temperature +"°C in " + city;
            
        }
    
      }
        
      let cityButton = document.querySelector("button");

      cityButton.addEventListener("click" , changeCity );