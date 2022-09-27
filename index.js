let myLeads = []
 
const inputBtn = document.getElementById("input-btn")
const inputEL = document.getElementById("input-el")
const ulEL = document.getElementById("ul-el")



inputBtn.addEventListener("click", function(){
   myLeads.push(inputEL.value)
   inputEL.value = " "
   console.log(myLeads)
   
   renderLeads()
})


function renderLeads(){


let listItems = " "

for(let i = 0; i< myLeads.length; i ++){
   //listItems += "<li><a target ='_blank' href=' " + myLeads[i] + "'>"  +  myLeads[i]     + "</a></li> "

   //simpler and better way.. using template

   listItems += `
   <li>
    <a target='_blank' href='${myLeads[i]}'>
    ${myLeads[i]} </a>

      </li>
      `

   ulEL.innerHTML = listItems

}
}

