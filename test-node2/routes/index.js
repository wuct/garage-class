
/*
 * GET home page.
 */

exports.homepage = function(req, res){
  res.render('index', { title: 'Express' });
};
exports.profilepage = function(req, res){
  res.render('index', { title: 'Profile' });
};