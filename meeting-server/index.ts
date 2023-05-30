const express = require('express');
const cors= require('cors');
const bodyparser =require('body-parser')
const server = express();
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/collection');
 console.log("db connect");
}

const userSchema = new mongoose.Schema({
  clientName: String,
  duration: Number,
  time: String,
  cost: Number,
  start: Date,
});
//model name is user
const User = mongoose.model('User', userSchema);


server.use(cors());
server.use(bodyparser.json());
server.post('/collection', async(req :any, res: any) => {

  let user=new User();
  user.clientName=req.body.clientName;
  user.duration=req.body.duration;
  user.time=req.body.time;
  user.cost=req.body.cost;
  user.start=req.body.start;
  const doc=await user.save();

  console.log(doc)
  res.json(doc);
});
 
server.get('/collection', async (req :any, res: any) => {
const docs =await User.find({});
res.json(docs);
});

const PORT=process.env.PORT || 8080;

if(process.env.NODE_ENV=="production"){
  server.use(express.static("scheduling-meeting/build"));
}

server.listen(PORT, () => {
  console.log("'server started");
});
