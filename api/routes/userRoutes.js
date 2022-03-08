const express = require("express");
const router = express.Router();
const userObj = require("../dummydatabase/users");

router.get("", (req, res) => {
  return res.status(200).json({
    message: "Users retrieved",
    success: true,
    users: userObj[0].users
  });
});

router.get("/:id", (req, res) => {
  let obj = userObj[0].users;
  let processed_data = obj.find(o => o.id === req.params.id);

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
