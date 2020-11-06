
function trigger() {
  var url = [
    "https://dnekobot.domathid.repl.co"
  ];
  for(var x = 0; x<url.length; x++){
    var uri = url[x];
    try{
      UrlFetchApp.fetch(uri);
    }catch(err){Logger.log(err.message)}
    
  }
  
}

