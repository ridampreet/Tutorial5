const express = require("express");
var uuid = require("uuid");
const router = express.Router();
const userObj = require("../dummydatabase/users");

router.get("", (req, res) => {
  return res.status(200).json({ success: true, message: "POST request" });
});

router.post("", (req, res) => {
  let firstname = req.body.firstName;
  let email = req.body.email;
  if (email == null) {
    res.status(400).json({ success: true, message: "User email missing" });
  }

  if (firstname != null && email != null) {
    let uid = uuid.v4();

    let ob = {
      id: uid,
      firstName: firstname,
      email: email
    };
    userObj[0].users.push(ob);

    return res.status(200).json({ success: true, message: "User added" });
  } else {
    return res
      .status(400)
      .json({ success: true, message: "User cannot be added" });
  }
});

module.exports = router;
