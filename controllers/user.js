// const userModel = require("../models/User");

// //Display all users
// const getUsers = async (req, res, next) => {
//   try {
//     const users = await userModel.find({});
//     res.json(users);
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// };

// //Display one user
// const getUser = async (req, res, next) => {
//   try {
//     const {
//       params: { id },
//     } = req;
//     const user = await userModel.findById(id);
//     res.json(user);
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// };

//   //Create a new user
//   const createUser = async (req, res, next) => {
//     try {
//       const {
//         body: { userName, location, email, password, phone },
//       } = req;
//       const newUser = await userModel.create({
//         userName,
//         location,
//         email,
//         password,
//         phone,
//       });
//       res.json(newUser);
//     } catch (error) {
//       res.status(500).send(error.message);
//     }
//   };

//Modify existing user
//   const updateUser = async (req, res, next) => {
//     try {
//       const {
//         params: { id },
//       } = req;

//       const {
//         body: { userName, location, email, password, phone },
//       } = req;
//       const user = await postModel.findByIdAndUpdate(id, {
//         userName, location, email, password, phone
//       });
//       res.json(user);
//     } catch (error) {
//       res.status(500).send(error.message);
//     }
//   };

//   //Remove existing user
//   const deleteUser = async (req, res, next) => {
//     try {
//       const {
//         params: { id },
//       } = req;
//       const user = await userModel.findByIdAndDelete(id);
//       res.json(user);
//     } catch (error) {
//       res.status(500).send(error.message);
//     }
//   };

// module.exports = {
//   getUsers,
//   getUser,
//   // createUser,
//   // updateUser,
//   // deleteUser,
// };
