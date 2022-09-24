let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
 
const inputBtn = document.getElementById("input-btn")
const inputEL = document.getElementById("input-el")
const ulEL = document.getElementById("ul-el")



inputBtn.addEventListener("click", function(){
   myLeads.push(inputEL.value)
   console.log(myLeads)
})



for(let i = 0; i< myLeads.length; i ++){
   ulEL.innerHTML += "<li>"  + myLeads[i] + "</li> "
}
  

