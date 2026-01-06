import express from "express"
import { distance } from "./util.js";
const app = express()
const port = 3000
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/name',(req,res)=>
{
  res.send("Praneeth")
})
app.get('/distance',(req,res)=>{
  const {a,b} = req.query;
  if(!a||!b)
  {
    return res.send("Please proveide both Strings");
  }
  const ans = distance(a,b)
    return res.send(`result : ${ans}`);
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
