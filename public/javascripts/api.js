let baseURL;
document.addEventListener('DOMContentLoaded', () => {
  baseURL = window.location.origin;
  document.querySelector('.test').addEventListener('click', ()=>{
      testAPIs();
  });
});

function testAPIs() {
    console.log("Testing the APIs");
    
    // list all tasks before api calls
    callAPI('GET', '/api/tasks', null) 
    .then((tasks) => {
        console.log(" ");
        console.log("All tasks before the four CRUD operations:");
        console.log(tasks);
        
        // create
        let data = { 
            "_id": 4, 
            "name": "Walk the dog",
            "createdDate": "04/24/2022",
            "status": "pending"
        }
        callAPI('POST', '/api/tasks', data)
        .then((task) => {
            const savedtask = task;
            console.log(" ");
            console.log("POST")
            console.log("Created new task:");
            console.log(task);

            // find
            callAPI('GET', `/api/tasks/${savedtask._id}`, null)
            .then((task) => {
                console.log(" ");
                console.log("GET ONE")
                console.log("Found task:");
                console.log(task);

                // update
                let changedData = {
                    "_id": 4, 
                    "name": "Walk the dog",
                    "createdDate": "04/24/2022",
                    "status": "completed"
                }
                callAPI('PUT', `/api/tasks/${savedtask._id}`, changedData)
                .then((task) => {
                    console.log(" ");
                    console.log("PUT")
                    console.log("Updated task:")
                    console.log(task);

                    // delete
                    callAPI('DELETE', `/api/tasks/${savedtask._id}`, null)
                    .then((result) => {
                        console.log(" ");
                        console.log("DELETE")
                        console.log("Result from delete:");
                        console.log(result);

                        // list all tasks after api calls
                        callAPI('GET', '/api/tasks', null) 
                        .then((tasks) => {
                            console.log(" ");
                            console.log("All tasks after the four CRUD operations:");
                            console.log(tasks);
                        })
                    })
                })
            })
        })
    })
    .catch((error) => {
        console.log(error);
    })
}

async function callAPI(method, uri, body) {
    try {
        let options = {
            method: method,
            headers: {
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers'
            }
        }
        if (method == 'POST' || method == 'PUT') {
            options.body = JSON.stringify(body);
        } 
        var response = await fetch(baseURL + uri, options)
        return response.json();
    } catch(error) {
        console.error(error);
        return '{"status": "error"}'
    }
}