// App:"Midterm-301197862"
// Student: Jocelyne Ojeda
// StudentId: 301197862
// Date: October 29th, 2022


exports.home = function(req, res, next) {
    console.log('===> Original URL: ' + req.session.url);
    res.render('index', { 
        title: 'Home',
        userName: req.user ? req.user.username : ''
    });
};

