var Clarifai = require("clarifai")
var app = new Clarifai.App("IXWuI_iP0ZYPs-qDdgUC7Tv3AsVn6tzvJUqCqDVb","6DnEJDgXWGOp0qq7j4TnfpRcotLX3SMo2u0mcFtG")

app.models.predict({
  id: Clarifai.GENERAL_MODEL,
  language: "ja"
},"https://samples.clarifai.com/metro-north.jpg").then(
  function(res){
    console.log(res)
  },
  function(err){
    console.log(err)
  }
)
