const inputBox= document.getElementById('input-box');
const listContainer =document.getElementById('list-container');

function addTask()
{
    if(inputBox.value==='')
    {
        alert("Please add a Task");
    }
    else
    {
        let li = document.createElement("li");
        li.innerHTML= inputBox.value;
        listContainer.appendChild(li);
        let span =document.createElement("span");
        span.innerHTML ="\u00d7";
       li.appendChild(span);
    }
    inputBox.value='';
    saveData();
}

listContainer.addEventListener("click",function(e)
{
   if(e.target.tagName==="LI")
   {
    e.target.classList.toggle("checked");
   }
   else if(e.target.tagName==="SPAN")
   {
     e.target.parentElement.remove();
   }
   saveData();
},false);

//Save in Browser

function saveData()
{
    localStorage.setItem("data",listContainer.innerHTML);
}
//recover data
function showData()
{
    listContainer.innerHTML =localStorage.getItem("data");
}
showData();