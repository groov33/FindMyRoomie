var express = require('express');
var router = express.Router();


// const userModel = require("./users");
const passport = require('passport');
const localStrategy = require("passport-local");

// const FormDataModel = require("./users");

const { userModel, FormDataModel} = require("./users");

router.use(express.static('./public'));

passport.use(new localStrategy(userModel.authenticate()));

/* GET home page. */
router.get('/registration', function(req, res, next) {
  res.render('registeration');
});

router.get('/register-home', isLoggedIn, function(req,res) {
  res.render("registerpage");
});

router.get("/", function(req,res) {
  res.render("homepage");
});

router.get('/open', function(req, res, next) {
  res.render('login');
});

// router.get('/profile', isLoggedIn, function(req, res, next) {
//   res.render('dashboard-male');
// });

router.get('/wait-sp',isLoggedIn, function (req,res) {
  res.render("underprocess");
})
router.get("/b9u8HrmcVNSCw6yTWAtRxPKkaYUFDX", isLoggedIn, function(req,res) {
  res.render("dashboard-male");
});

router.get('/vasKYrp68qVRxnLDh9JfdyZXQ2mMcH', isLoggedIn, function(req,res) {
  res.render("dashboard-female");
});

router.get("/Mxu9aS52CrYwtXQV8FD4NW", isLoggedIn, function(req, res, next) {
  res.render('dashboard-male');
});

router.get("/F5bGL48ur6zB3kMHNqegtp", isLoggedIn, function(req, res, next) {
  res.render('dashboard-female');
});

router.get("/form", isLoggedIn, function(req,res) {
  res.render("registerpage");
});

// router.get("/formex1", function(req,res) {
//   res.render("registerpage2");
// });

// router.get("/formex2", function(req,res) {
//   res.render("registrationpage3");
// });

// router.get("/formex3", function(req,res) {
//   res.render("registrationpage4");
// });

// router.get("/formex3", function(req,res) {
//   res.render("textarea");
// });

router.get("/aboutus", function(req,res) {
  res.render("aboutus");
});

router.post('/register', function (req,res) {
  var userdata = new userModel({
    name: req.body.name,
    username: req.body.username,
    gender: req.body.gender,
    mobileNumber: req.body.mobileNumber
  });

  userModel.register(userdata, req.body.password)
.then(function (registereduser) {
  passport.authenticate("local") (req,res,function () {
    res.redirect('/form');
  })
});

});

router.get('/waiting', isLoggedIn, function (req,res,next) {
  res.render("underprocess");
})

router.post('/submitform1', function(req,res,next) {
  var formData1 = new FormDataModel({
    name: req.body.name,
    email: req.body.email,
    mobileNumber: req.body.mobileNumber,
    gender: req.body.gender,
    perstate: req.body.perstate,
  corstate: req.body.corstate,
  Languages:req.body.Languages,
  dept: req.body.dept,
  clean: req.body.clean,
  loud: req.body.loud,
  sleep: req.body.sleep,
  lights: req.body.lights,
  friend: req.body.friend,
  interests: req.body.interests,
  review: req.body.review
  });

  formData1.save()
  .then(savedData => {
    console.log('Data saved successfully:', savedData);
    res.redirect('/waiting'); // Redirect to a thank you page or wherever needed
  })
  .catch(err => {
    console.error(err);
    res.status(500).send('Error saving form data');
  });
});

router.get('/database',function(req,res,next) {
    FormDataModel.find({})
  .then(data => {
    res.json(data);
  })
  .catch(err => {
    console.error(err);
    res.status(500).send('Error retrieving form data');
  });
});

// router.post('/login', passport.authenticate("local", {
//   successRedirect: "/profile",
//   failureRedirect: "/login"
// }), function (req,res) {});

router.post('/login', passport.authenticate("local", {
  failureRedirect: "/login"
}), function(req, res) {
  // Check the gender of the logged-in user
  userModel.findOne({ username: req.body.username })
    .then(user => {
      if (!user) {
          return res.status(404).send("User not found");
      }
      
      // Redirect to different pages based on gender
      if (user.gender === "Male") {
          res.redirect("/b9u8HrmcVNSCw6yTWAtRxPKkaYUFDX");
      } else if (user.gender === "Female") {
          res.redirect("/vasKYrp68qVRxnLDh9JfdyZXQ2mMcH");
      } else {
          res.redirect("/error"); // Default homepage if gender not specified or handled
      }
  })
  .catch(err => {
      console.error("Error:", err);
      return res.status(500).send("Error fetching user data");
  })
  });



router.get("/logout", function (req,res,next) {
  req.logout(function(err){
    if(err) return next(err);
    res.redirect("/open");
  })
});

function isLoggedIn(req,res,next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect("/");
}

module.exports = router;
