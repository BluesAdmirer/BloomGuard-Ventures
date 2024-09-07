document.getElementById('runButton').addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      chrome.scripting.executeScript({
        target: {tabId: tabs[0].id},
        function: () => {
          alert("button clicked!");
        }
      });
    });
  });
  