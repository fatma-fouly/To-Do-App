let addedTasks = document.getElementById('addedTasks');
let task       = document.getElementById('task') ;

let storedList = localStorage.getItem("item");
let list = storedList ? JSON.parse(storedList)  : [];


function addTask(){
    if(task.value === "") {
     alert('no task added yet!');
     return;
    }
    else {
        list.push(task.value)
        console.log(list);
        localStorage.setItem("item" , JSON.stringify(list) );
        task.value = "" ;
        display();
    }
}

function display (){
    if (list.length > 0 ){
        addedTasks.classList.add("p-2")
    }
    else {
        addedTasks.classList.remove("p-2")
    }
    addedTasks.innerHTML = ""
    list.forEach((element , index) => {
     addedTasks.innerHTML += `
      <div class="task-item d-flex flex-column flex-sm-row justify-content-between align-items-center p-2 mb-2 bg-white rounded">
      <span class="task-name">${element}</span>
     <div class="d-flex gap-2">
           <button onclick='Completed(this)' class="btn btn-success btn-sm">Completed</button>
      <button onclick='Delete(${index})' class="btn btn-danger btn-sm">Delete</button>
     </div>
      </div>
      `
    });
}

function Delete(i) {
  list.splice(i , 1);
  localStorage.setItem("item", JSON.stringify(list));
  display()
}

function clearList(){
  list=[];
  localStorage.setItem("item" , JSON.stringify(list));
  display();
}
function Completed(button){
let taskName = button.closest(".task-item").querySelector(".task-name");
 taskName.classList.toggle("line-through");
}
display();
