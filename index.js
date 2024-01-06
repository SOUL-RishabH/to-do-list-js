const addForm = document.querySelector(".add");
const tasks = document.querySelector(".tasks");
const clearAll = document.querySelector(".clear");
const resultSpan = document.querySelector(".message span");
const searchText = document.querySelector(".search");

function spanMessage(){
    const textLength = tasks.children.length;
    resultSpan.textContent = `You have ${textLength} Pending Tasks !`;
}
spanMessage();

addForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const value = addForm.task.value.trim()
    if (value.length) {
        tasks.innerHTML += `<li>
                                <span>${value}</span>
                                <i class="bi bi-trash-fill delete"></i>
                            </li>`;
        addForm.reset();
    }
    spanMessage();
});

tasks.addEventListener("click",function(event){
    if(event.target.classList.contains("delete")){
        event.target.parentElement.remove();
    }
    spanMessage();
});

clearAll.addEventListener("click",function(event){
    const data = tasks.querySelectorAll("li");
    data.forEach(function(d){
        d.remove();
    });
    spanMessage();
});

function fillterText(term){
   Array.from(tasks.children).filter(function(task){
        return !task.textContent.toLowerCase().includes(term);
    }).forEach(function(task){
        task.classList.add("hide");
    });
    Array.from(tasks.children).filter(function(task){
        return task.textContent.toLowerCase().includes(term);
    }).forEach(function(task){
        task.classList.remove("hide");
    });
    
}
searchText.addEventListener("keyup",function(event){
    const term = searchText.task.value.trim();
    fillterText(term);
});

searchText.addEventListener("click",function(event){
    if(event.target.classList.contains("reset")){
        searchText.reset();
        const term = searchText.task.value.trim();
        fillterText(term);
    }   
});