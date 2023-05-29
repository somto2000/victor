const enrollee = require('../models/enrollee');
const Enrollee = require('../models/enrollee');

const getEnrolleeProfile = async (req, res) => {
  try {
    const enrollee = await Enrollee.findById(req.user.enrolleeId).select('-password');
    res.json({
      enrolleeId: enrollee.enrolleeId,
      name: enrollee.name,
      email: enrollee.email,
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch enrollee profile' });
  }
};

const updateEnrolleeProfile = async (req, res) => {
  try {
    const enrollee = await Enrollee.findById(req.user.enrolleeId);

    if (enrollee) {
      enrollee.name = req.body.name || enrollee.name;
      enrollee.email = req.body.email || enrollee.email;

      if (req.body.password) {
        enrollee.password = req.body.password;
      }

      const updatedEnrollee = await enrollee.save();

      res.json({
        _id: updatedEnrollee.id,
        name: updatedEnrollee.name,
        email: updatedEnrollee.email,
      });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update enrollee profile' });
  }
};

// const getEnrolleeProfile = async (req, res) => {
//   try {
//     const enrollee = await Enrollee.findById(req.user.enrolleeId).select('-password');
//   res.json({
//     enrolleeId: user.enrolleeId,
//     name: user.name,
//     email: user.email,
//   });
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch enrollee profile' });
//   }
// };

// const updateEnrolleeProfile = async (req, res) => {
//   const enrollee = await Enrollee.findById(req.user.enrolleeid);

//   if (enrollee) {
//     enrollee.name = req.body.name || enrollee.name;
//     enrollee.email = req.body.email || enrollee.email;

//     if (req.body.password) {
//       user.password = req.body.password;
//     }

//     const updatedEnrollee = await enrollee.save();

//     res.json({
//       _id: updatedEnrollee.id,
//       name: updatedEnrollee.name,
//       email: updatedEnrollee.email,
//     });
//   } else {
//     res.status(404);
//     throw new Error('User not found');
//   }
// };


module.exports = {
  getEnrolleeProfile,
  updateEnrolleeProfile,
};
