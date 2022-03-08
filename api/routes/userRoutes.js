const express = require("express");
const router = express.Router();
const userObj = require("../dummydatabase/users");

router.get("", (req, res) => {
  return res
    .status(200)
    .json({ message: "Users retrieved", success: true, user: userObj });
});
// router.get("/new", (req, res) => {
//   return res.status(200).json({ success: "true", data: "user created" });
// });
router.get("/:id", (req, res) => {
  // console.log(userObj[0].find(o => o.title == "mrs"));
  let obj = userObj[0].data;
  let processed_data = obj.find(o => o.id === req.params.id);
  // console.log(obj.find(o => o.id === req.params.id));
  // return res.status(200).json({
  //   success: "true",
  //   user: obj.find(o => o.id === req.params.id)
  // });

  if (processed_data != undefined) {
    return res.status(200).json({
      success: true,
      user: {
        email: processed_data.email,
        firstName: processed_data.firstName,
        id: processed_data.id
      }
    });
  } else {
    return res.status(400).json({
      success: true,
      message: "No users found !"
    });
  }
});

module.exports = router;
