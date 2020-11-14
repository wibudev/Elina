
function trigger() {
  var url = [
    "Your Project Url",
    "Your Project Url"
  ];
  for(var x = 0; x<url.length; x++){
    var uri = url[x];
    try{
      UrlFetchApp.fetch(uri);
    }catch(err){Logger.log(err.message)}
    
  }
  
}

