// Almacena las URLs previas por pestaña
let previousUrls = {};
let band=0;

console.log("Extension cargada");

chrome.tabs.onRemoved.addListener((tabId) => {
  delete previousUrls[tabId];
})



chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    
    if (changeInfo.url && changeInfo.url.includes("https://www.youtube")) {
     
      console.log("La URL de la pestaña ", tabId, " ha cambiado a: ", changeInfo.url);
      const index = changeInfo.url.indexOf("com");
  
   
      if (index !== -1) {
        
        const modifiedUrl = changeInfo.url.slice(0, index + 3) + "." + changeInfo.url.slice(index + 3);
        console.log( "URL Modificada: "+ modifiedUrl);
        chrome.tabs.update(tabId, { url: modifiedUrl });
        chrome.tabs.update(tabId, { url: modifiedUrl });
      }
    }
  });
  ;
