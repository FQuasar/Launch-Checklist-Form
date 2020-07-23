// Write your JavaScript code here!

window.addEventListener("load",function(){
  let form = document.querySelector("form");

  let pilotNameInput = document.querySelector("input[name=pilotName]");
  let coPilotNameInput = document.querySelector("input[name=copilotName]");
  let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
  let cargoMassInput = document.querySelector("input[name=cargoMass]");

  let launchStatus = document.getElementById("launchStatus");
  let pilotStatus = document.getElementById("pilotStatus");
  let coPilotStatus = document.getElementById("copilotStatus");
  let fuelLevelStatus = document.getElementById("fuelStatus");
  let cargoStatus = document.getElementById("cargoStatus");

  const missionTarget = document.getElementById("missionTarget")
  


  form.addEventListener("submit", function(event) {  

    event.preventDefault();

    if (pilotNameInput.value === "" || coPilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === ""  ){
        alert("All fields are required!");
    } else if (isNaN (fuelLevelInput.value) || isNaN(cargoMassInput.value)) {
        alert ("Make sure to enter valid information for each field!");
    } else {
      //this is where you want to display that all fields are ready for launch
      
      pilotStatus.innerText = `Pilot ${pilotNameInput.value} is ready for launch `;
      pilotStatus.style.visibility = "visible";
            
      coPilotStatus.innerText = `Co-Pilot ${coPilotNameInput.value} is ready for launch `;
      coPilotStatus.style.visibility = "visible";

      if (fuelLevelInput.value < 10000) {
         fuelLevelStatus.innerText = `Fuel level too low for launch`;
         launchStatus.style.color = "red";
         launchStatus.innerText = "Shuttle not ready for launch"
      }
      fuelLevelStatus.style.visibility = "visible";

         //do the same check and update HTML if cargo mass is out of range
         
      if (cargoMassInput.value > 10000 ){
         cargoStatus.innerText = `Cargo mass too much for launch`;
         launchStatus.style.color = "red";
         launchStatus.innerText = "Shuttle not ready for launch" ;
      }
      cargoStatus.style.visibility = "visible";
    

      if ( cargoMassInput.value <= 10000 && fuelLevelInput.value >= 10000){
         launchStatus.innerText=`Shuttle is ready for launch`;
         launchStatus.style.color = "green";
      }
    };  
      let planetFetch =fetch('https://handlers.education.launchcode.org/static/planets.json');
      planetFetch.then(function(response) { 
         response.json().then(function(json){
            
            let x = 0;  
            missionTarget.addEventListener("click",function(){  

            let planetSpec = 
               `<h2>Mission Destination</h2>
               <ol>
                  <li>Name: ${json[x].name}</li>
                  <li>Diameter: ${json[x].diameter}</li>
                  <li>Star: ${json[x].star}</li>
                  <li>Distance from Earth: ${json[x].distance}</li>
                  <li>Number of Moons: ${json[x].moons}</li>
               </ol>
               <img src="${json[x].image}"></img>`;
                              
               missionTarget.innerHTML = planetSpec;
               x = (x+1) % json.length;
            })
         })
       })
   })
});


/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
