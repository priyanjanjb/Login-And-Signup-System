const router = require("express").Router();
const CareLabelSchema = require("../model/CareLabelSchema");

router.route("/").get(async (req, res) => {
  console.log("route");
  req.body;

  await addCareLabel(res);

  async function addCareLabel(res) {
    const careLabel = new CareLabelSchema({
      strnum: "123",
      contrctNum: "123",
      season: "123",
      tdept: "123",
    });

    careLabel
      .save()
      .then((result) => {
        console.log(result);
        res.send(result); // Sending the saved document as a response
      })
      .catch((err) => {
        console.log("Not saved data\n", err);
        res.status(500).send("Internal Server Error");
      });
  }
});

router.route("/add").post((req, res) => {
  console.log("add");
  req.body;
  res.send("add");
});

module.exports = router;
