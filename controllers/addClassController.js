const crClass = require("../models/createClass");
const addClass = async (req, res, next) => {
  let data = await crClass.create({
    className: "NMLT",
    section: "CTD",
    subject: "LT",
    room: "07",
    createdAt: "2021-05-12",
    updatedAt: "21/12/2021",
  });
  res.status(200).json(data);
};
module.exports = {
  addClass,
};
