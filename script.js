document.querySelector('#add_button').onclick = function() {
    if(document.querySelector('#input_task').value.length == 0){
        alert("Enter something!")
    }
    else {
        document.querySelector('#lists').innerHTML += `
            <div class="task">
                <span class="taskname">
                    ${document.querySelector('#input_task').value}
                </span>
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
            </div>
            <hr>
        `;

        input_task.value = "";

        let deletelist = document.querySelectorAll(".delete");
        for(let i=0; i<deletelist.length; i++) {
            deletelist[i].onclick = function() {
                let taskElement = this.parentNode;
                let hrElement = taskElement.nextElementSibling;
                taskElement.remove();
                hrElement.remove();
            }
        }

        let editlist = document.querySelectorAll(".edit");
        for(let i=0; i<editlist.length; i++) {
            editlist[i].onclick = function() {
                let taskElement = this.parentNode;
                let taskNameElement = taskElement.querySelector(".taskname");
                let taskText = taskNameElement.textContent;
                document.querySelector('#input_task').value = taskText;
            }
        }
    }
}

