document.querySelector('#add_button').onclick = function() {
    if(document.querySelector('#input_task').value.length == 0){
        alert("Enter something!")
    }
    else {
        document.querySelector('#lists').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#input_task').value}
                </span>
                <div id="buttons">
                    <button id="edit">Edit<button>
                    <button id="delete">Delete</button>
                </div>
                <hr>
            </div>
        `;

        input_task.value = "";

        let deletelist = document.querySelectorAll("#delete");
        for(let i=0; i<deletelist.length; i++) {
            deletelist[i].onclick = function() {
                this.parentNode.remove();
            }
        }
        // let editlist = document.querySelectorAll("#edit");
        // for(let i=0; i<editlist.length; i++){
        //     editlist[i].onclick = function() {
        //         editlist.replaceWith(input);
        //     }
        // }
    }
}