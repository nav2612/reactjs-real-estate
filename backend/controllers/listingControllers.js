const mongoose = require("mongoose");
const List = require("../models/listingModel.js");
const ObjectID = mongoose.Types.ObjectId;
const path = require("path");
const multer = require("multer");

exports.createList = (req, res) => {
  uploadThumbnail(req, res, async (err) => {
    const user = req.decoded;
    if (err) {
      return res.status(500).json({
        status:false,
         message: err.message });
    }

    const { size, price, address } = req.body;

    // Validate required fields
    if (!price || !size || !address || !thumbnail) {
      return res.status(400).send({
        status: false,
        message: "All fields are required",
      });
    }
    const thumbnail = req.file.filename;
    try {
      const newList = new List({
        createdBy: user.id,
        size,
        price,
        address,
        thumbnail,
      });

      const savedList = await newList.save();

      res.status(201).json({
        message: "List created successfully",
        data: savedList,
      });
    } catch (error) {
      res.status(500).json({
        status: false,
        message: error.message,
      });
    }
  });
};

// // API for creating List
// exports.createList = async (req, res) => {
//   const user = req.decoded;
//   const { price, size, address } = req.body;

//   try {
//     // Upload the thumbnail
//     const thumbnail = await uploadThumbnail(req);

//     // Create a new list object with the required fields
//     const newList = new List({
//       createdBy: user._id,
//       price,
//       size,
//       address,
//       thumbnail: thumbnail.file_name,
//     });

//     // Save the new list object to the database
//     const savedList = await newList.save();

//     return res.status(201).send({
//       status: true,
//       message: "List created successfully",
//       data: savedList,
//     });
//   } catch (error) {
//     return res.status(500).send({
//       status: "false",
//       message: error.message,
//     });
//   }
// };

// function uploadThumbnail(req) {
//   return new Promise((resolve, reject) => {
//     console.log(req.files, "requestThumbnail");
//     //Logo validation
//     if (!req.files || Object.keys(req.files).length === 0) {
//       return reject({
//         status: false,
//         message: "Thumbnail is required",
//       });
//     } else {
//       var Img = req.files.thumbnail;
//       var extension = path.extension(Img.name);
//       var file_name = "img-" + Date.now() + extension;
//       //var uploadPath = "../images" + file_name;
//       const uploadPath = path.join(__dirname, '..', 'images', file_name);

//       Img.mv(uploadPath, function (err) {
//         if (err) {
//           return reject({
//             status: false,
//             message: err.message,
//           });
//         }
//         return resolve({
//           status: true,
//           message: "Thumbnail uploaded successfully!",
//           file_name: file_name,
//         });
//       });
//     }
//   });
// }

// Define storage for thumbnail file
const thumbnailStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../images"); // set destination folder
  },
  filename: function (req, file, cb) {
    cb(null, "thumbnail-" + Date.now() + path.extname(file.originalname)); // set file name with timestamp
  },
});

// Create multer object with storage options
const uploadThumbnail = multer({ storage: thumbnailStorage }).single(
  "thumbnail"
);

// Function to upload Thumbnails
// function uploadThumbnail(req) {
//   return Promise((resolve, reject) => {
//     //Logo validation
//     if (!req.files || Object.keys(req.files).length === 0) {
//       return reject({
//         status: false,
//         message: "Thumbnail is required",
//       });
//     } else {
//       var Img = req.files.thumbnail;
//       var extension = path.extension(Img.name);
//       var file_name = "img-" + Date.now() + extension;
//       var uploadPath = "../images" + file_name;

//       Img.mv(uploadPath, function (err) {
//         if (err) {
//           return reject({
//             status: false,
//             message: err.message,
//           });
//         }
//         return resolve({
//           status: true,
//           message: "Thumbnail uploaded successfully!",
//           file_name: file_name,
//         });
//       });
//     }
//   });
// }
