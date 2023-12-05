const tabIsEnabledDict = {};

chrome.action.onClicked.addListener((tab) => {
    // Get isEnabled state from current tab
    let isEnabled = tabIsEnabledDict[tab.id] === undefined ? true : tabIsEnabledDict[tab.id];
    isEnabled = !isEnabled;
    tabIsEnabledDict[tab.id] = isEnabled;

    if (isEnabled) {
        // Enable the addon.
        setIcons(tab.id, {
            16: '../images/icon-enabled-16.png',
            32: '../images/icon-enabled-32.png'
        });
        chrome.scripting.executeScript({
            target: {tabId: tab.id},
            func: () => {
                bed.style.display = "block";
            }
        });
    } else {
        // Disable the addon.
        setIcons(tab.id, {
            16: '../images/icon-disabled-16.png',
            32: '../images/icon-disabled-32.png',
        });
        chrome.scripting.executeScript({
            target: {tabId: tab.id},
            func: () => {
                bed.style.display = "none";
            }
        });
    }
})

function setIcons(tabId, path) {
    chrome.action.setIcon({
        tabId: tabId,
        path: path
    });
}
