let doingArr = []
let doneArr = []
let completedArr = []

let user_id = 1

let user, theme, description, deadLine, date, doing, done, completed

function addNewTask() {
    doing = document.getElementById("doing")
    user = document.getElementById("user")
    theme = document.getElementById("theme")
    description = document.getElementById("description")
    deadLine = document.getElementById("deadLine")
    date = Date()

    if (user.value != "" && theme.value != "" && description.value != "" && deadLine.value != "") {
        doing.innerHTML += "<div class=\"m-2 p-2 border\"> <p><b>" +
            user.value.toUpperCase() + "</b>:</p><hr><p><b>" +
            theme.value + "</b></p><p>" +
            description.value + "</p><hr><p>DeadLine: " +
            deadLine.value + "</p><p>" +
            date.slice(16, 24) + "</p> <button onclick=\"toDone(" + user_id + ")\" class=\"btn btn-warning mt-3 w-100\">To Done</button> </div>"

        let newtask = {
            user_id: user_id,
            user: user.value,
            theme: theme.value,
            description: description.value,
            deadLine: deadLine.value,
            date: date.slice(16, 24)
        }
        doingArr.push(newtask)
        user_id++
    }
}

function toDone(id) {
    let cache = []
    doing = document.getElementById("doing")
    done = document.getElementById("done")
    doing.innerHTML = ""
    done.innerHTML = ""
    for (i = 0; i < doingArr.length; i++) {
        if (doingArr[i].user_id != id) {
            cache.push(doingArr[i])
            doing.innerHTML += "<div class=\"m-2 p-2 border\"> <p><b>" +
                doingArr[i].user.toUpperCase() + "</b>:</p><hr><p><b>" +
                doingArr[i].theme + "</b></p><p>" +
                doingArr[i].description + "</p><hr><p>DeadLine: " +
                doingArr[i].deadLine + "</p><p>" +
                doingArr[i].date + "</p> <button onclick=\"toDone(" + doingArr[i].user_id + ")\" class=\"btn btn-warning mt-3 w-100\">To Done</button> </div>"
        } else {
            doneArr.push(doingArr[i])
        }
    }
    doingArr = cache
    for (i = 0; i < doneArr.length; i++){
        done.innerHTML += "<div class=\"m-2 p-2 border\"> <p><b>" +
        doneArr[i].user.toUpperCase() + "</b>:</p><hr><p><b>" +
        doneArr[i].theme + "</b></p><p>" +
        doneArr[i].description + "</p><hr><p>DeadLine: " +
        doneArr[i].deadLine + "</p><p>" +
        doneArr[i].date + "</p> <button onclick=\"toDoing(" + doneArr[i].user_id + ")\" class=\"btn btn-danger mt-3 w-100\">To Doing</button><button onclick=\"toCompleted(" + doneArr[i].user_id + ")\" class=\"btn btn-success mt-3 w-100\">To Completed</button> </div>"
    }
}

function toCompleted(id) {
    let cache = []
    done = document.getElementById("done")
    completed = document.getElementById("completed")
    done.innerHTML = ""
    completed.innerHTML = ""
    console.log(doneArr)
    for (i = 0; i < doneArr.length; i++) {
        if (doneArr[i].user_id != id) {
            cache.push(doneArr[i])
            done.innerHTML += "<div class=\"m-2 p-2 border\"> <p><b>" +
            doneArr[i].user + "</b>:</p><hr><p><b>" +
            doneArr[i].theme + "</b></p><p>" +
            doneArr[i].description + "</p><hr><p>DeadLine: " +
            doneArr[i].deadLine + "</p><p>" +
            doneArr[i].date + "</p> <button onclick=\"toDoing(" + doneArr[i].user_id + ")\" class=\"btn btn-danger mt-3 w-100\">To Doing</button><button onclick=\"toCompleted(" + doneArr[i].user_id + ")\" class=\"btn btn-success mt-3 w-100\">To Completed</button> </div>"
        } else {
            completedArr.push(doneArr[i])
        }
    }
    console.log("hello")
    doneArr = cache
    for (i = 0; i < completedArr.length; i++){
        completed.innerHTML += "<div class=\"m-2 p-2 border\"> <p><b>" +
        completedArr[i].user + "</b>:</p><hr><p><b>" +
        completedArr[i].theme + "</b></p><p>" +
        completedArr[i].description + "</p><hr><p>DeadLine: " +
        completedArr[i].deadLine + "</p><p>" +
        completedArr[i].date+"</div>"
    }
}

function toDoing(id) {
    let cache = []
    doing = document.getElementById("doing")
    done = document.getElementById("done")
    doing.innerHTML = ""
    done.innerHTML = ""
    for (i = 0; i < doneArr.length; i++) {
        if (doneArr[i].user_id != id) {
            cache.push(doneArr[i])
            done.innerHTML += "<div class=\"m-2 p-2 border\"> <p><b>" +
                doneArr[i].user.toUpperCase() + "</b>:</p><hr><p><b>" +
                doneArr[i].theme + "</b></p><p>" +
                doneArr[i].description + "</p><hr><p>DeadLine: " +
                doneArr[i].deadLine + "</p><p>" +
                doneArr[i].date + "</p> <button onclick=\"toDoing(" + doneArr[i].user_id + ")\" class=\"btn btn-danger mt-3 w-100\">To Doing</button><button onclick=\"toCompleted(" + doneArr[i].user_id + ")\" class=\"btn btn-success mt-3 w-100\">To Completed</button> </div>"
        } else {
            doingArr.push(doneArr[i])
        }
    }
    doneArr = cache
    for (i = 0; i < doingArr.length; i++){
        doing.innerHTML += "<div class=\"m-2 p-2 border\"> <p><b>" +
        doingArr[i].user.toUpperCase() + "</b>:</p><hr><p><b>" +
        doingArr[i].theme + "</b></p><p>" +
        doingArr[i].description + "</p><hr><p>DeadLine: " +
        doingArr[i].deadLine + "</p><p>" +
        doingArr[i].date + "</p> <button onclick=\"toDone(" + doingArr[i].user_id + ")\" class=\"btn btn-warning mt-3 w-100\">To Done</button> </div>"
        

    }
}

