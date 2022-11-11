chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting === "hello")
      sendResponse({farewell: "goodbye"});
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