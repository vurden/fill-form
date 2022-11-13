function scrape_page() {
  let input_fields = document.getElementsByTagName("input");
  
  let input_value_pairs = {};
  for (const field of input_fields) {
    if (field.type == "hidden") continue;
    if (field.id == "") continue;
    input_value_pairs[field.id] = field.value
  };

  return input_value_pairs;
};

async function load_input_values() {
  let state = await chrome.storage.sync.get(['saved_forms'])
  state['saved_forms']
  
  
  
  let input_fields = scrape_page()
  for (field in input_fields) {
    document.getElementById(field).value = 
  }

}



















// Listen for message from extension
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    // console.log(sender.tab ?
    //             "from a content script:" + sender.tab.url :
    //             "from the extension");
    if (request == "get_input_values") {
      input_value_pairs = scrape_page();
      sendResponse(input_value_pairs);
    } else if (request == "get_input_values") {
      load_input_values();
      // sendResponse(input_value_pairs);
    };  
  }
);















// Listen for user to press activate extension and execute 
// chrome.action.onClicked.addListener(function(tab) {
//   try {chrome.storage.sync.get(["forms"], function(result) {})}
//   catch {chrome.storage.sync.set({forms: {}}) }

  
  // Remove "default_popup": "index.html" attribute to action key in manifest to use this code.
  // chrome.scripting.executeScript({
  //     target: {tabId: (tab.id)},
  //     files: ['script.js']
  // });
// });