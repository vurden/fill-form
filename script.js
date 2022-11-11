function main() {
  console.log("test");
}

chrome.action.onClicked.addListener(function(tab) {
  chrome.scripting.executeScript({
      target: {tabId: (tab.id)},
      func: main
  });
});

