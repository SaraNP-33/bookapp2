var express=require("express");

var router=express.Router();

var db =require("../models");

router.get("/", function(req,res){
    db.Books.findAll({raw:true}).then(function(data){
        var renderhbs={
            books:data
        };
        // console.log(data);
        // console.log(renderhbs);
        // console.log("*********************************")
        res.render("index", renderhbs);
    });
});

router.get("api/books",function(req,res){
    db.Books.findAll({}).then(function(results){
        res.json(results);
    });
});

router.post("/api/books",function(req,res){
    db.Books.create({
        title:req.body.title,
        devoured:0
    }).then(function(result){
        res.json(result);
    }) .catch(function(err){
        res.json(err);
    });
});

router.put("/api/books/:id", function(req,res){
    console.log("update:", req.body);
    console.log("##########################");
    db.Books.update({
        devoured:req.body.devoured
    },
    {
        where:{
            id:req.params.id
        }
    }).then(function(result){
        res.json(result);
    }).catch(function(err){
        res.json(err);
    });
});

router.delete("/api/books/:id",function(req,res){
    db.Books.destroy({
        where:{
            id:req.params.id
        }
    }).then(function(result){
        res.json(result);
    });
});


module.exports=router;