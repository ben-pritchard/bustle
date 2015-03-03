Bustle.Router.map(function() {
  this.resource('posts', {path: "/"});
  this.resource('headline1');
  this.resource('headline2');
  this.resource('headline3');
  this.resource('headline4');
  this.resource('about');
  this.resource('contact', function() {
    this.resource('monty-info');
    this.resource('ben-info');
  });
});
