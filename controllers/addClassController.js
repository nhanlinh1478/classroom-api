const crClass = require("../models/createClass");
const addClass = async (req, res, next) => {
  try {
    const { className, section, subject, room } = req.body;
    const data = await crClass
      .create({
        className: className,
        section: section,
        subject: subject,
        room: room,
        image: "https://picsum.photos/200/300",
      })
      .then((data) => {
        const res = { success: true, data: data, message: "Saved success" };
        return res;
      })
      .catch((error) => {
        const res = { success: false, message: error };
        return res;
      });
    res.status(200).json(data);
  } catch (error) {
    const data = { success: false, message: error };
    res.json(data);
  }
};
module.exports = {
  addClass,
};
