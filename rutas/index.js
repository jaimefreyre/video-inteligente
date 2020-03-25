/*
 * GET home page.
 */
 var path = require('path')

exports.index = function(req, res){
  //res.render('index', { title: 'Express' });
  res.sendFile(path.join(__dirname + '/../views/index.html'));
};
exports.emisor = function(req, res){
  //res.render('emisor', { title: 'Express' });
  res.sendFile(path.join(__dirname + '/../views/emisor.html'));
};
exports.display = function(req, res){
  //res.render('display', { title: 'Express' });
  res.sendFile(path.join(__dirname + '/../views/display.html'));
};