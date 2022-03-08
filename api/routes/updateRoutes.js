const express = require("express");

const router = express.Router();
const userObj = require("../dummydatabase/users");

router.get("", (req, res) => {
  return res.status(200).json({ success: "true", data: "chal gaya!!!!" });
});

router.put("/:id", (req, res) => {
  var flag = 0;
  let obj = userObj[0].data;

  for (var i = 0; i < obj.length; i++) {
    if (
      req.params.id === obj[i].id &&
      req.body.email != null &&
      req.body.firstName != null
    ) {
      flag = 1;
      obj[i].firstName = req.body.firstName;
      obj[i].email = req.body.email;
    }
  }
  if (flag === 1) {
    res.status(200).json({ success: "true", message: "User Updated" });
  } else {
    res.status(500).json({ success: "true", message: "User Not Found !!" });
  }
});

module.exports = router;
