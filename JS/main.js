window.onload = function () {
    getTasks();
}

function getTasks(){
    const List = document.getElementById("task-list");
    List.innerHTML= "";
fetch('https://radiant-peak-35787.herokuapp.com/tasks', {
       method: 'GET'
    }).then(function (response) {
        if (response.ok) {
            return response.json();
        } else {
            return Promise.reject(response);
        }
    }).then(function (data) {
        // Do something with your data
        data.forEach( function (task){
            let li = document.createElement("li")
            li.innerText = task.title;
            List.appendChild(li);
        })
    }).catch(function (err) {
        console.warn('Something went wrong.', err);
    });
}
    