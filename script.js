// Write your JavaScript code here!

window.addEventListener("load",function(){
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {

      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let coPilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      
      if ( pilotNameInput.value === "" || coPilotNameInput.value === "" ) {
         alert(" Names are required!")
         event.preventDefault();
      };

      if (fuelLevelInput.value === "" || cargoMassInput.value === "" ) {
            alert("Fuel Level and cargo Mass are required");
            event.preventDefault();
         };
      if (isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value)) {
            alert("Insert Numbers for Fuel Level and cargo Mass");
            event.preventDefault();
         }
       
      
   })
})
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
