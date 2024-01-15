const itemArray=localStorage.getItem("items")?JSON.parse(localStorage.getItem("items")):[]
console.log(itemArray)

document.querySelector("#enter").addEventListener("click",()=>{
    const item =document.querySelector("#item")
    createItem(item)
    location.reload()
})
function createItem(item){
    itemArray.push(item.value)
    localStorage.setItem("items",JSON.stringify(itemArray))
}

function displayItems() {
    let items=""
    for(let i=0;i<itemArray.length;i++){
        items+=`
        <div class="item">
        <div class="input-controller">
            <textarea disabled">${itemArray[i]}</textarea>
            <div class="edit-controller">
                <i class="fa-regular fa-trash-can deleteBtn"></i>
                <i class="fa-regular fa-pen-to-square editBtn"></i>
            </div>
        </div>
        <div class="update-controller">
            <button class="saveBtn">Save</button>
            <button class="cancelBtn">Cancel</button>
        </div>
    </div>
        `
    }
    document.querySelector(".todo-list").innerHTML=items
    activateDeleteListeners()
    activateEditListeners()
    activateSaveListeners()
    activateCancelListeners()


}


function activateSaveListeners(){
    const saveBtn=document.querySelectorAll(".saveBtn")
    const inputs=document.querySelectorAll(".input-controller textarea")
    saveBtn.forEach((sb,i)=>{
        sb.addEventListener("click",()=>{
            updateItem(inputs[i].value,i)
        })
    })
} 
function updateItem(text,i){
     itemArray[i]=text
     localStorage.setItem("items",JSON.stringify(itemArray))
     location.reload
}

function activateCancelListeners(){
    const cancelBtn=document.querySelectorAll(".cancelBtn")
    const updateController=document.querySelectorAll(".update-controller")
    const inputs=document.querySelectorAll(".input-controller textarea")
    cancelBtn.forEach((cb,i)=>{
        cb.addEventListener("click",()=>{
            updateController[i].style.display="none"
            inputs[i].disabled=true
        })
        
    })
}

function activateDeleteListeners(){
 let deleteBtn=document.querySelectorAll(".deleteBtn")
 deleteBtn.forEach((db,i)=>{
    db.addEventListener("click",()=>{ deleteItem(i)})
 })
}
function deleteItem(i) {
    itemArray.splice(i,1)
    localStorage.setItem("items",JSON.stringify(itemArray))
    location.reload()
}

function activateEditListeners(){
    const editBtn=document.querySelectorAll('.editBtn')
    const updateController=document.querySelectorAll(".update-controller")
    const inputs=document.querySelectorAll(".input-controller textarea")
    editBtn.forEach((eb,i)=>{
        eb.addEventListener("click",()=>{
            updateController[i].style.display="block"
            inputs[i],disabled=false
        })
    })
}



function displayDate(){
    let date= new Date()
    date=date.toString().split(" ");
    document.querySelector("#date").innerHTML=date[0]+", "+date[1] + " " + date[2]+" " +date[3]; 
}

window.onload=function(){
    displayDate();
    displayItems()
} 
