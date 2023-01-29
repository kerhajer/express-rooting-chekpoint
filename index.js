const express = require("express");
const app = express();
const path = require('path');
const router = express.Router();




 app.use(express.static(__dirname + "/PAGES"));

 const date = new Date()
 const hour = date.getHours()
 const day = date.getDay()
 
 if(day == 0 || day == 6) {
  router.get('/',(req,res)=>{
    res.sendFile(__dirname+'/PAGES/WARNING.html');
    
  });
 } else {
 
   if( (hour >= 9 && hour <= 17) ) {
    router.get('/',(req,res)=>{
      res.sendFile(path.join(__dirname+'/PAGES/Homepage.html'));
      
    });
   }
   else {  
     console.log("I apologize, the server is currently unavailable. Please check the working hours from 9h to 17h")
     router.get('/',(req,res)=>{
      res.sendFile(path.join(__dirname+'/PAGES/WARNING.html'));
      
    });
   }
   
 }



  
  router.get('/Home',(req,res)=>{
    res.sendFile(path.join(__dirname+'/PAGES/Homepage.html'));
  });
  
  router.get('/Services',(req,res)=>{
    res.sendFile(path.join(__dirname+'/PAGES/OurServices.html'));
  });

  router.get('/Contact',(req,res)=>{
    res.sendFile(path.join(__dirname+'/PAGES/Contactus.html'));
  });
  
  //add the router
  app.use('/', router);

    
      app.listen(5000, () => {
        console.log("server is running...");
      });
      
  