const express = require("express");
const app = express();



app.get("/", (req, res) => {
    res.status(200).json({
      mensagem: `teste `
    })
});

// 

app.listen(3000, () => {
  console.log("Felipe, Servidor ligado");
});