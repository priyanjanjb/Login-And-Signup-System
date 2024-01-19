const router = require("express").Router();
const CareLabelSchema = require("../model/CareLabelSchema");

// router.post("/", (req,res)=>{

//   const strknum=req.body.strknum;
//   const contrctNum=req.body.contrctNum;
//   const season=req.body.season;
//   const tdept=req.body.tdept;
 
//   const newCareLable=new Carelabel({
//     strknum,
//     contrctNum,
//     season,
//     tdept,
//   }).save().then(()=>{
//       res.json("careLabel Added");
//   }).catch((err)=>{
//       console.log(err);
//   })
// })

router.route("/").post(async (req, res) => {
  const { strkNum, contrctNum, season, tdept } =  req.body;

    const careLabel =  new CareLabelSchema({
      strkNum: strkNum,
      contrctNum: contrctNum,
      season: season,
      tdept: tdept,
    })
    await careLabel.save().then(() => {
      res.json("careLabel Added");
    }).catch((err) => {
      console.log(err);
    })
  }
);

router.route("/add").post((req, res) => {
  console.log("add");
  req.body;
  res.send("add");
});

module.exports = router;
