(function(e){function a(a){for(var s,t,i=a[0],n=a[1],c=a[2],p=0,v=[];p<i.length;p++)t=i[p],Object.prototype.hasOwnProperty.call(o,t)&&o[t]&&v.push(o[t][0]),o[t]=0;for(s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s]);d&&d(a);while(v.length)v.shift()();return r.push.apply(r,c||[]),l()}function l(){for(var e,a=0;a<r.length;a++){for(var l=r[a],s=!0,i=1;i<l.length;i++){var n=l[i];0!==o[n]&&(s=!1)}s&&(r.splice(a--,1),e=t(t.s=l[0]))}return e}var s={},o={app:0},r=[];function t(a){if(s[a])return s[a].exports;var l=s[a]={i:a,l:!1,exports:{}};return e[a].call(l.exports,l,l.exports,t),l.l=!0,l.exports}t.m=e,t.c=s,t.d=function(e,a,l){t.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:l})},t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,a){if(1&a&&(e=t(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(t.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var s in e)t.d(l,s,function(a){return e[a]}.bind(null,s));return l},t.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},t.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],n=i.push.bind(i);i.push=a,i=i.slice();for(var c=0;c<i.length;c++)a(i[c]);var d=n;r.push([0,"chunk-vendors"]),l()})({0:function(e,a,l){e.exports=l("56d7")},"1a1c":function(e,a,l){"use strict";l("856b")},"56d7":function(e,a,l){"use strict";l.r(a);l("e260"),l("e6cf"),l("cca6"),l("a79d");var s=l("7a23");function o(e,a,l,o,r,t){var i=Object(s["e"])("HelloWorld");return Object(s["d"])(),Object(s["b"])(i,{msg:"Welcome to Your Vue.js App"})}var r=Object(s["c"])('<nav id="mainNav" class="navbar navbar-default navbar-fixed-top navbar-custom affix-top"><div class="container"><div class="navbar-header page-scroll"><button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"><span class="sr-only">Toggle navigation</span> Menu <i class="fa fa-bars"></i></button><a class="navbar-brand" href="#page-top">Devspress.net</a></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1"><ul class="nav navbar-nav navbar-right"><li class="hidden active"><a href="#page-top"></a></li><li class="page-scroll"><a href="#portfolio">Portfolio</a></li><li class="page-scroll"><a href="#about">About</a></li><li class="page-scroll"><a href="#contact">Contact</a></li></ul></div></div></nav><header><div class="container"><div class="row"><div class="col-lg-12"><img class="img-responsive" src="img/profile.png" alt=""><div class="intro-text"><span class="name">Dmitry Nasyrkulov</span><span class="name">Nikolay Slusar</span><hr class="star-light"><span class="skills">Web Developer - Frontend Development</span></div></div></div></div></header><section id="portfolio"><div class="container"><div class="row"><div class="col-lg-12 text-center"><h2>Portfolio</h2><hr class="star-primary"></div></div><div class="row"><div class="col-sm-4 portfolio-item text-center"><em>Coming Soon</em></div></div></div></section><section class="success" id="about"><div class="container"><div class="row"><div class="col-lg-12 text-center"><h2>About</h2><hr class="star-light"></div></div><div class="row"><div class="col-lg-4 col-lg-offset-2"><p>Hello! My name is ...</p></div><div class="col-lg-4"><p>Currently I&#39;m ...</p></div></div></div></section><section id="contact"><div class="container"><div class="row"><div class="col-lg-12 text-center"><h2>Contact Me</h2><hr class="star-primary"></div></div><div class="row"><div class="col-lg-8 col-lg-offset-2"><div class="row control-group"><div class="form-group col-xs-12 floating-label-form-group controls"><label>Name</label><input type="text" class="form-control" placeholder="Name" id="name" required="" data-validation-required-message="Please enter your name."><p class="help-block text-danger"></p></div></div><div class="row control-group"><div class="form-group col-xs-12 floating-label-form-group controls"><label>Email Address</label><input type="email" class="form-control" placeholder="Email Address" id="email" required="" data-validation-required-message="Please enter your email address."><p class="help-block text-danger"></p></div></div><div class="row control-group"><div class="form-group col-xs-12 floating-label-form-group controls"><label>Phone Number</label><input type="tel" class="form-control" placeholder="Phone Number" id="phone" required="" data-validation-required-message="Please enter your phone number."><p class="help-block text-danger"></p></div></div><div class="row control-group"><div class="form-group col-xs-12 floating-label-form-group controls"><label>Message</label><textarea rows="5" class="form-control" placeholder="Message" id="message" required="" data-validation-required-message="Please enter a message."></textarea><p class="help-block text-danger"></p></div></div><br><div id="success"></div><div class="row"><div class="form-group col-xs-12"><button type="submit" class="btn btn-success btn-lg">Send</button></div></div></div></div></div></section><footer class="text-center"><div class="footer-above"><div class="container"><div class="row"><div class="footer-col col-md-12"><h3>About Us</h3><p> Freelance web developers that take pride in making websites and keeping websites up to date. </p></div></div></div></div></footer><div class="scroll-top page-scroll hidden-sm hidden-xs hidden-lg hidden-md"><a class="btn btn-primary" href="#page-top"><i class="fa fa-chevron-up"></i></a></div>',7);function t(e,a,l,s,o,t){return r}var i={name:"HelloWorld",props:{}};i.render=t;var n=i,c={name:"App",components:{HelloWorld:n}};l("1a1c");c.render=o;var d=c;l("dd8e");Object(s["a"])(d).mount("#app")},"856b":function(e,a,l){},dd8e:function(e,a,l){}});
//# sourceMappingURL=app.a365e38b.js.map