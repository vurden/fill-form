// Listen for user to press activate extension and execute 
chrome.storage.sync.set({forms: {}})
chrome.action.onClicked.addListener(function(tab) {
  try {chrome.storage.sync.get(["forms"], function(result) {
    console.log(result)
  })}
  catch {chrome.storage.sync.set({forms: {}}) }

  chrome.scripting.executeScript({
      target: {tabId: (tab.id)},
      files: ['script.js']
  });
});