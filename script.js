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

// function archive(form, state) {
//   console.log("state")
//   console.log(state)
//   url = Object.keys(form)[0]
//   state.url = form.url
//   chrome.storage.sync.set({forms: state})
// };



// function scrapeForm() {
//   input_fields = document.getElementsByTagName("input");
  
//   id_value_object = {};
//   for (const field of input_fields) {
//     if (field.type == "hidden") continue;
//     if (field.id == "") continue;
//     id_value_object[field.id] = field.value;
//   };

//   url = document.URL
//   console.log(url)
//   page_object = {}[url] = id_value_object

//   return page_object;
// };

// main(); 

function save() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
      console.log(response.farewell);
    });
  });
}

function load() {
  console.log("load");
  alert("load")
}


function main() {
  document.getElementById("save").addEventListener("click", save);
  document.getElementById("load").addEventListener("click", load);
}

main()