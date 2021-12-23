const stockage = JSON.parse(localStorage.getItem("plantesStockage"));
var verif = false;

function ajoutStockage()
{          
  // console.log(stockage);
  // console.log(stockage[0].nom);

  var nom = document.getElementById("nom").value;
  var description = document.getElementById("description").value;
  // console.log(nom, description);
  if (verif == false)
  {    
    verif = true;
    let array = [{nom, description}];
    localStorage.setItem("plantesStockage",JSON.stringify(array));
    // creationDiv();
  }
  else
  {
    console.log(verif);
    stockage.push({nom, description});
    localStorage.setItem("plantesStockage",JSON.stringify(stockage)); 
    // creationDiv();
  }
  alert("La plante est ajouté");
}  

const divPlantesStockage = `
<div class="col-12 col-md-4">
      <div class="card">
      <div class="card-body">
          <h5 class="card-title">__top__. __title__</h5>
          <p class="card-text">
              __description__
          </p>
      </div>
      </div>
    </div>
</div>
`;

// function creationDiv()
// {    
//   const divListStockage =(document.getElementById("lists"));
//   console.log(divListStockage);
//   for (let i=0; i<stockage.length; i++)
//   {
//       const newDivPlante = divPlantesStockage
//         .replace("__top__", i + 7)
//         .replace("__title__", stockage[i].nom)
//         .replace("__description__", stockage[i].description);
//       divListStockage.appendChild(htmlToElement(newDivPlante));
//   } 
// }