const express = require("express");
const Model = require("../models/user.model");
const ModelRole = require("../models/role.model");
const routerUser = express.Router();

// {
//   "username": "khanhtmd",
//   "password": "Khanh@123",
//   "fullname": "Nguyễn Văn Khánh",
//   "phone": "0364606406",
//   "avatar": "",
//   "address": ""
//   "roleId": 1
// }

//Post Method
routerUser.post("/", async (req, res) => {
  let data = new Model({
    username: req.body.username,
    password: req.body.password,
    fullName: req.body.fullName,
    roleId: req.body.roleId,
    phone: req.body.phone ? req.body.phone : "",
    avatar: req.body.avatar ? req.body.avatar : "",
    address: req.body.address ? req.body.address : "",
    isAdmin: false,
  });
  try {
    const dataUsers = await Model.find();
    const filterUser = dataUsers.filter((el) => el.username === data.username);
    if (Object.keys(filterUser).length > 0) {
      res.status(400).json({ message: "Tài khoản đã tồn tại" });
    } else {
      const dataRole = await ModelRole.find();
      const findRole = dataRole.find((el) => el._id.toString() === data.roleId);
      if (findRole) {
        if (findRole.isActive) {
          data.isAdmin = findRole.isAdmin;
          const dataToSave = await data.save();
          res.status(200).json(dataToSave);
        } else {
          res.status(400).json({ message: "Role chưa được kích hoạt" });
        }
      } else {
        res.status(400).json({ message: "Không tìm thấy role" });
      }
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Get all Method
routerUser.get("/", async (req, res) => {
  try {
    const data = await Model.find(req.query ? req.query : null);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message + req.params });
  }
});

//Get by ID Method
routerUser.get("/:id", async (req, res) => {
  try {
    const data = await Model.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Update by ID Method
routerUser.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Model.findByIdAndUpdate(id, updatedData, options);

    res.send(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Delete by ID Method
routerUser.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Model.findByIdAndDelete(id);
    res.send(`Document with ${data.name} has been deleted..`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Register User
routerUser.post("/register", async (req, res) => {
  const data = new Model({
    username: req.body.username,
    password: req.body.password,
    fullName: req.body.fullName,
    phone: "",
    avatar: "",
    address: "",
  });

  try {
    const dataUsers = await Model.find();
    const filterUser = dataUsers.filter((el) => el.username === data.username);
    if (Object.keys(filterUser).length > 0) {
      res.status(400).json({ message: "Tài khoản đã tồn tại" });
    } else {
      const dataToSave = await data.save();
      if (dataToSave) {
        res.status(200).json({
          message: "Đăng ký tài khoản thành công",
          statusCode: 200,
        });
      } else {
        res.status(400).json({
          message: "Đăng ký tài khoản thất bại",
          statusCode: 200,
        });
      }
    }
  } catch (error) {
    res.status(500).json({ message: error.message, statusCode: 500 });
  }
});

//Login
routerUser.post("/login", async (req, res) => {
  const body = new Model({
    username: req.body.username,
    password: req.body.password,
  });

  try {
    const data = await Model.find();
    const findData = data.find(
      (el) => el.username === body.username && el.password === body.password
    );
    if (findData && findData.id) {
      res.status(200).json({
        message: "Đăng nhập thành công",
        token: findData,
        statusCode: 200,
      });
    } else
      res.status(400).json({
        message: `Tài khoản hoặc mật khẩu không đúng`,
        statusCode: 400,
      });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      statusCode: 500,
    });
  }
});

//Edit Profile
routerUser.put("/update-profile/:id", async (req, res) => {
  let data = new Model({
    _id: req.body.id,
    username: req.body.username,
    fullName: req.body.fullName,
    avatar: req.body.avatar,
    phone: req.body.phone,
    address: req.body.address,
  });

  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Model.findByIdAndUpdate(id, updatedData, options);
    console.log(result);

    res.status(200).json({
      message: "Cập nhật thông tin thành công",
      data: result,
      statusCode: 200,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      statusCode: 500,
    });
  }
});

module.exports = routerUser;
