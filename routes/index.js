const mongodb = require("mongodb");
const getDb = require("../util/database").getDb;
const express = require("express");

const router = express.Router();

// router.get("/", (req, res) => {
//   res.send("it works");
// });

router.post("/", (req, res, next) => {
  const startDate = req.body.startDate;
  const endDate = req.body.endDate;
  const minCount = req.body.minCount;
  const maxCount = req.body.maxCount;

  if (!startDate || !endDate || !minCount || !maxCount) {
    console.log("invalid args");
    return res.send({ code: 400, msg: "invalid args", records: [] });
  }

  const db = getDb();
  return db
    .collection("records")
    .aggregate([
      {
        $match: {
          createdAt: { $gte: new Date(startDate), $lt: new Date(endDate) },
        },
      },
      {
        $project: {
          totalCount: { $sum: "$counts" },
          key: "$key",
          createdAt: "$createdAt",
        },
      },
      { $match: { totalCount: { $gte: minCount, $lt: maxCount } } },
    ])
    .toArray()
    .then((records) => {
      return res.send({ code: 0, msg: "success", records });
    })
    .catch((err) => {
      return res.send({ code: 500, msg: "failed", err, records: [] });
    });
});

module.exports = router;
