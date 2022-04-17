const baseURL;
document.addEventListener('DOMContentLoaded', () => {
  baseURL = window.location.origin;
  document.querySelector('.test').addEventListener('click', ()=>{
      testAPIs();
  });
});

function testAPIs() {
  console.log("Testing the APIs");
  
  // list
  callAPI('GET', '/api/tasks', null) 
  .then((tasks) => {
    console.log(" ");
    console.log("GET ALL");
    console.log("All tasks:");
    console.log(tasks);
    
    // create
    let data = { 
      "title": "TestTitle", 
      "author": "TestAuthor",
      "category": "TestCategory",
      "content": "TestContent"
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
          "title": "TestTitleChanged", 
          "author": "TestAuthorChanged",
          "category": "TestCategoryChanged",
          "content": "TestContentChanged"
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