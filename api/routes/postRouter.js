const express = require("express");
var uuid = require("uuid");
const router = express.Router();
const userObj = require("../dummydatabase/users");

router.get("", (req, res) => {
  return res.status(200).json({ success: "true", data: "chal gaya!!!!" });
});

router.post("", (req, res) => {
  let firstname = req.body.firstName;
  let email = req.body.email;
  console.log(firstname == null, email == null);
  if (firstname != null && email != null) {
    let uid = uuid.v4();
    console.log(req.body);
    let ob = {
      id: uid,
      lastName: "",
      firstName: firstname,
      email: email,
      title: "mr",
      picture: "https://randomuser.me/api/portraits/men/81.jpg"
    };
    userObj[0].data.push(ob);

    return res.status(200).json({ success: "true", data: "User added" });
  } else {
    return res
      .status(500)
      .json({ success: "true", data: "User cannot be added" });
  }
});

module.exports = router;
