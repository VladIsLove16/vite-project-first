const express = require('express');
const bodyParser = require('body-parser');
// var connection  = require('express-myconnection'); 
var mysql = require('mysql')
const cors = require('cors')

const app = express(); 
app.use(bodyParser.json());
app.use(cors())
// app.use(express.json)
const host = 'localhost'
const connection = mysql.createConnection({

            host: host, //'localhost',
            user: 'root',
            password : '123123',
            port : 3306, //port mysql
            database:'depocomputers'
          },'pool'); //or single 

// app.get('/add_Book',(req,res)=>{

//   let {login,password,} = req.body;
//   if(!login) return res.status(400).json('Login cant be blank');
//   if(!password) return res.status(400).json('Password cant be blank');

//   var data={login:login,
//             password:password};


//     var query = connection.query("INSERT INTO users set ? ",data, 
//     (err, rows) =>{

//     if (err){
//         res.status(400).json('Sorry!!Unable To Add');
//         console.log("Error inserting : %s ",err );
//         }
//     else
//     res.status(200).json('Book Added Successfully!!')
//   });
// });

app.get('/getUsers',(req,res)=>{
  const sql = "Select * from users " 
  connection.query(sql,(err,data)=>{
    if(err) return res.json(err);
    if(data.length>0)
      return res.json(data)
    else
    return res.json("no data")
  })
});
app.get('/',(req,res)=>
{
  return res.json ("none")
})

app.post('/register', (req,res)=>
{
  let {login,password} = req.body;
  let values = [
    [login, password], 
  ]
  console.log(`regitering with ${login} ${password}` );

  if(!login) return res.status(401).json('Login cant be blank');
  if(!password) return res.status(402).json('Password cant be blank');
 const userExist = "SELECT login FROM users WHERE login = ?"
 connection.query(userExist, login,(err, data) =>{
    if (err){
     res.json(err);}
   else 
    if( data.length>0){
    res.json("user exist");
    }
  else
  {
    const sqlInsert ="insert into users (login, password) VALUES  ? ";
    connection.query(sqlInsert, [values],(err2, data) =>{
      if (err2){
          return res.json(err2);
          }
          else
          { res.status(200).json('user '+login+ ' registered'); }})
  }
  });
});

app.post('/login',(req,res)=>
{
  let {login,password} = req.body;
  
  console.log(`logining with ${login} ${password}` );
  if(!login) return res.status(400).json('Login cant be blank');
  if(!password) return res.status(400).json('Password cant be blank');
    const sql ="Select * from users where (login = 'vlad' AND password = '123')"
    let values = [
      [login, password], 
    ]
    connection.query(sql,(err3,data) =>{
      if(data.length==0)
      {console.log("no rec");
        res.json("No record")
      }
    else if (err3){
        console.log("ERROR!!!!"+ err3);
        res.status(401).json(err3);
        }
    else
    { console.log("OK");
      res.status(200).json("LOGIN COMPLETED")}
  });
})
const port = 5172
app.listen(port, host,()=> {
  console.log(`app is running on port ${port}`);});