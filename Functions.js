const fs = require('fs');
const path = require('path');

newPageGenerate(adress,file){
  try {

    app.listen(token,()=>{
      console.log(`Server works on port:token${token}`);
    });
  } catch (e) {
    console.log(e);
  }

app.get(adress',function(req,res){
  fs.readFile(
    path.join(__dirname, "html", file),
    (err, htmlData) => {
      if (err) {
        res.end("<h1>Page not found</h1>");
        // throw err
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(htmlData);
})
})
module.exports.newPageGenerate = newPageGenerate;
