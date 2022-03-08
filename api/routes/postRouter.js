const express = require("express");
var uuid = require("uuid");
const router = express.Router();
const userObj = require("../dummydatabase/users");

router.get("", (req, res) => {
  return res.status(200).json({ success: true, data: "chal gaya!!!!" });
});

router.post("", (req, res) => {
  let firstname = req.body.firstName;
  let email = req.body.email;

  for (var i = 0; i <= userObj[0].data.length; i++) {
    if (i.email === email) {
      console.log(i.email);
      return res
        .status(400)
        .json({ success: true, message: "User already exists !!" });
    }
  }

  if (firstname != null && email != null) {
    let uid = uuid.v4();
    console.log(req.body);
    let ob = {
      id: uid,
      firstName: firstname,
      email: email
    };
    userObj[0].data.push(ob);

    return res.status(200).json({ success: true, message: "User added" });
  } else {
    return res
      .status(400)
      .json({ success: true, message: "User cannot be added" });
  }
});

module.exports = router;
