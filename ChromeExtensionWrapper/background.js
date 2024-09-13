chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "performOperation",
    title: "Perform Operation on '%s'",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "performOperation") {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: showSelectedText,
      args: [info.selectionText]
    });
  }
});

function showSelectedText(selectedText) {
  alert("You selected: " + selectedText);
  // You can perform any operation on the selected text here.
}