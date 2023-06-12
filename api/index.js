const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const User = require('./models/user');
const post = require('./models/post');
const bcrypt = require('bcryptjs');
const app=express();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const uploadMiddelware = multer({dest : 'uploads/'});
const fs = require('fs');

app.use(cors({credentials:true,origin:'http://localhost:3000'}));
app.use(express.json());
app.use(cookieParser());
app.use('/uploads', express.static(__dirname + '/uploads'));

mongoose.connect('mongodb+srv://sanjeevmadhavarapu3:XLx0kgJT48KM2rV7@cluster0.twvslra.mongodb.net/?retryWrites=true&w=majority');
const salt = bcrypt.genSaltSync(10);
const secret = 'akmioaiojfscklnsoaznoen'

app.post('/register', async (req,res) => {
  const {username,password} = req.body;
  try{
    const userDoc = await User.create({
      username,
      password:bcrypt.hashSync(password,salt),
    });
    res.json(userDoc);
  } catch(e) {
    console.log(e);
    res.status(400).json(e);
  }
});

app.post('/login',async (req,res)=>{
  const {username,password} = req.body;
  const userDoc = await User.findOne({username});
  const passok = bcrypt.compareSync(password,userDoc.password);
  
  if(passok){
    jwt.sign({username,id:userDoc._id}, secret, {}, (err,token) => {
      if (err) throw err;
      res.cookie('token', token).json({
        id:userDoc._id,
        username,
      });
    });
  }else{
    res.status(400).json('wrong credentials');
  }
});

app.get('/profile', (req,res) => {
  const {token} = req.cookies;
  jwt.verify(token, secret, {}, (err,info) => {
    if (err) throw err;
    res.json(info);
  });
});

app.post('/logout', (req,res) => {
  res.cookie('token', '').json('ok');
});

app.post('/post',uploadMiddelware.single('file'),async(req,res)=>{
  const {originalname,path} = req.file;
  const parts = originalname.split('.');
  const ext = parts[parts.length-1];
  const newPath = path+'.'+ext;
  fs.renameSync(path,newPath);

  const {token} = req.cookies;
  jwt.verify(token, secret, {}, async (err,info) => {
    if (err) throw err;
    const {title,summary,content} = req.body;
    const postDoc = await post.create({
      title,
      summary,
      content,
      cover:newPath,
      author:info.id,
    });
    res.json(postDoc);
  });
})

app.put('/post',uploadMiddelware.single('file'), async (req,res) => {
  let newPath = null;
  if (req.file) {
    const {originalname,path} = req.file;
    const parts = originalname.split('.');
    const ext = parts[parts.length - 1];
    newPath = path+'.'+ext;
    fs.renameSync(path, newPath);
  }

  const {token} = req.cookies;
  jwt.verify(token, secret, {}, async (err,info) => {
    if (err) throw err;
    const {id,title,summary,content} = req.body;
    const postDoc = await post.findById(id);
    const isAuthor = JSON.stringify(postDoc.author) === JSON.stringify(info.id);
    if (!isAuthor) {
      return res.status(400).json('you are not the author');
    }
    await postDoc.updateOne({
      title,
      summary,
      content,
      cover: newPath ? newPath : postDoc.cover,
    });

    res.json(postDoc);
  });

});

app.get('/post',async (req,res)=>{
const posts = await post.find().populate('author',['username']).sort({createdAt:-1}).limit(20);
res.json(posts);
})

app.get('/post/:id',async (req,res)=>{
  const {id} = req.params;
  const postDoc = await post.findById(id).populate('author',['username']);
  res.json(postDoc);
})

//XLx0kgJT48KM2rV7

//mongodb+srv://sanjeevmadhavarapu3:XLx0kgJT48KM2rV7@cluster0.twvslra.mongodb.net/?retryWrites=true&w=majority

app.listen(4000);