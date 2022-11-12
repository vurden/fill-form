// function main() {

//   page_url = document.URL
//   chrome.storage.sync.get(["forms"], function(result) {
//     console.log(result.page_url)
//     if (result.page_url == undefined) {
//       console.log("Form not found. Creating form...")
//       form = scrapeForm();
//       console.log("Form created. Archiving form...")
//       archive(form, result.forms)
//       console.log("Form archived.")
//     } else {
//       console.log("Form found. Filling form...")
//       for (key in result.page_url) {
//         document.getElementById(key).value = result.page_url.key
//       }
//     }
//   })
// };




function archive(form) {
  chrome.storage.sync.get(["saved_forms"], function(result) {
    
    chrome.storage.sync.set({saved_forms: state})
    console.log(form)
    console.log(result)
  })
  
};


// main(); 

function save() {
  request_page_forms()
  
  
  
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, "save", function(response) {
      archive(response)
    });
  });
}

function request_page_forms() {}




function load() {
  console.log("load");
  alert("load")
}


function main() {
  try {chrome.storage.sync.get(["saved_forms"], function(result) {})}
  catch {chrome.storage.sync.set({saved_forms: {}})}

  document.getElementById("save").addEventListener("click", save);
  document.getElementById("load").addEventListener("click", load);
}

main()