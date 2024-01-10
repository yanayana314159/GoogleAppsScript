function sendLINE(sentcon) {
 
 // LINEから取得したトークン
 let token = "XXXXXXXXXXX"
 let options = {
   "method" : "post",
   "headers" : {
     "Authorization" : "Bearer "+ token
   },
   "payload" : {
     "message" : sentcon
   }
 }


 let url  = "XXXXXXXXXXXX"
//Line通知API用のURL
 UrlFetchApp.fetch(url, options)
}
