
//searchData = {};


chrome.webRequest.onBeforeRequest.addListener(
  function(details){
    if(details.url.indexOf('searchresults/?') > -1){
        //console.log(details);
        if(details.method == 'POST'){
          if(details.requestBody){
            //saveSearch(details.requestBody.formData, details.tabId);
            formData = details.requestBody.formData;
            var newUrl = details.url;
            newUrl += 'quicksrc_name=' + formData['quicksrc_name'][0];
            newUrl += '&quicksrc_auth=' + formData['quicksrc_auth'][0];
            newUrl += '&quicksrc_game=' + formData['quicksrc_game'][0];
            return {redirectUrl:newUrl};
          }
        }
    }
    
  },
  {urls: ["*://*.nexusmods.com/*"]},
  ["blocking", "requestBody"]);

// function saveSearch(formdata, tabId){
//   var id = 'id_' + tabId;
//   var data = {
//         name : formdata.quicksrc_name[0],
//         author : formdata.quicksrc_auth[0],
//         game : formdata.quicksrc_game[0]
    
//   };
//   searchData[id] = data;
//   console.log(searchData);
  
// }

// function getTabSearchData(tab){
//   var id = 'id_' + tab;
//   return searchData[id];
// }