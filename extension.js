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

async function request_page_forms() {
  let tabs = await chrome.tabs.query({active: true, currentWindow: true})
  let forms = await chrome.tabs.sendMessage(tabs[0].id, "get_input_values")
  url_form = {}
  url_form[tabs[0].url] = forms
  return url_form
};

async function archive(form) {
  let state = await chrome.storage.sync.get(['saved_forms'])
  console.log(state)
  let forms = state['saved_forms']
  let url = Object.keys(form)[0]
  forms[url] = form[url]
  chrome.storage.sync.set({'saved_forms': forms})
};


async function save() {
  let filled_forms = await request_page_forms()
  archive(filled_forms)
}

async function load() {
  let tabs = await chrome.tabs.query({active: true, currentWindow: true})
  let forms = await chrome.tabs.sendMessage(tabs[0].id, "load_input_values")
  url_form = {}
  url_form[tabs[0].url] = forms
  return url_form

  
}








function main() {
  try {chrome.storage.sync.get(["saved_forms"])}
  catch {chrome.storage.sync.set({saved_forms: {}})}

  document.getElementById("save").addEventListener("click", save);
  document.getElementById("load").addEventListener("click", load);
}

main()