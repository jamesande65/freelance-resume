(function(e){function a(a){for(var t,s,n=a[0],c=a[1],i=a[2],p=0,v=[];p<n.length;p++)s=n[p],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&v.push(o[s][0]),o[s]=0;for(t in c)Object.prototype.hasOwnProperty.call(c,t)&&(e[t]=c[t]);d&&d(a);while(v.length)v.shift()();return l.push.apply(l,i||[]),r()}function r(){for(var e,a=0;a<l.length;a++){for(var r=l[a],t=!0,n=1;n<r.length;n++){var c=r[n];0!==o[c]&&(t=!1)}t&&(l.splice(a--,1),e=s(s.s=r[0]))}return e}var t={},o={app:0},l=[];function s(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=t,s.d=function(e,a,r){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var t in e)s.d(r,t,function(a){return e[a]}.bind(null,t));return r},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=a,n=n.slice();for(var i=0;i<n.length;i++)a(n[i]);var d=c;l.push([0,"chunk-vendors"]),r()})({0:function(e,a,r){e.exports=r("56d7")},"56d7":function(e,a,r){"use strict";r.r(a);r("e260"),r("e6cf"),r("cca6"),r("a79d");var t=r("7a23");function o(e,a,r,o,l,s){var n=Object(t["g"])("Index");return Object(t["f"])(),Object(t["c"])(n)}function l(e,a,r,o,l,s){var n=Object(t["g"])("Navigation"),c=Object(t["g"])("Header"),i=Object(t["g"])("Portfolio"),d=Object(t["g"])("About"),p=Object(t["g"])("Contact"),v=Object(t["g"])("Footer");return Object(t["f"])(),Object(t["c"])(t["a"],null,[Object(t["e"])(n),Object(t["e"])(c),Object(t["e"])(i),Object(t["e"])(d),Object(t["e"])(p),Object(t["e"])(v)],64)}var s={class:"success",id:"about"},n=Object(t["d"])('<div class="container"><div class="row"><div class="col-lg-12 text-center"><h2>About</h2><hr class="star-light"></div></div><div class="row"><div class="col-lg-4 col-lg-offset-2"><p>Hello! My name is ...</p></div><div class="col-lg-4"><p>Currently I&#39;m ...</p></div></div></div>',1);function c(e,a,r,o,l,c){return Object(t["f"])(),Object(t["c"])("section",s,[n])}var i={props:{}};i.render=c;var d=i,p={id:"contact"},v=Object(t["d"])('<div class="container"><div class="row"><div class="col-lg-12 text-center"><h2>Contact Me</h2><hr class="star-primary"></div></div><div class="row"><div class="col-lg-8 col-lg-offset-2"><div class="row control-group"><div class="form-group col-xs-12 floating-label-form-group controls"><label>Name</label><input type="text" class="form-control" placeholder="Name" id="name" required="" data-validation-required-message="Please enter your name."><p class="help-block text-danger"></p></div></div><div class="row control-group"><div class="form-group col-xs-12 floating-label-form-group controls"><label>Email Address</label><input type="email" class="form-control" placeholder="Email Address" id="email" required="" data-validation-required-message="Please enter your email address."><p class="help-block text-danger"></p></div></div><div class="row control-group"><div class="form-group col-xs-12 floating-label-form-group controls"><label>Phone Number</label><input type="tel" class="form-control" placeholder="Phone Number" id="phone" required="" data-validation-required-message="Please enter your phone number."><p class="help-block text-danger"></p></div></div><div class="row control-group"><div class="form-group col-xs-12 floating-label-form-group controls"><label>Message</label><textarea rows="5" class="form-control" placeholder="Message" id="message" required="" data-validation-required-message="Please enter a message."></textarea><p class="help-block text-danger"></p></div></div><br><div id="success"></div><div class="row"><div class="form-group col-xs-12"><button type="submit" class="btn btn-success btn-lg">Send</button></div></div></div></div></div>',1);function u(e,a,r,o,l,s){return Object(t["f"])(),Object(t["c"])("section",p,[v])}var b={props:{}};b.render=u;var f=b,g={class:"text-center"},m=Object(t["d"])('<div class="footer-above"><div class="container"><div class="row"><div class="footer-col col-md-12"><h3>About Us</h3><p> Freelance web developers that take pride in making websites and keeping websites up to date. </p></div></div></div></div><div class="scroll-top page-scroll hidden-sm hidden-xs hidden-lg hidden-md"><a class="btn btn-primary" href="#page-top"><i class="fa fa-chevron-up"></i></a></div>',2);function h(e,a,r,o,l,s){return Object(t["f"])(),Object(t["c"])("footer",g,[m])}var O={props:{}};O.render=h;var j=O,y=Object(t["d"])('<div class="container"><div class="row"><div class="col-lg-12"><img class="img-responsive" src="img/profile.png" alt=""><div class="intro-text"><span class="name">Dmitry Nasyrkulov</span><span class="name">Nikolay Slusar</span><hr class="star-light"><span class="skills">Web Developer - Frontend Development</span></div></div></div></div>',1);function x(e,a,r,o,l,s){return Object(t["f"])(),Object(t["c"])("header",null,[y])}var w={props:{}};w.render=x;var P=w,k={id:"mainNav",class:"navbar navbar-default navbar-fixed-top navbar-custom affix-top"},M=Object(t["d"])('<div class="container"><div class="navbar-header page-scroll"><button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"><span class="sr-only">Toggle navigation</span> Menu <i class="fa fa-bars"></i></button><a class="navbar-brand" href="#page-top">WildDev.net</a></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1"><ul class="nav navbar-nav navbar-right"><li class="hidden active"><a href="#page-top"></a></li><li class="page-scroll"><a href="#portfolio">Portfolio</a></li><li class="page-scroll"><a href="#about">About</a></li><li class="page-scroll"><a href="#contact">Contact</a></li></ul></div></div>',1);function N(e,a,r,o,l,s){return Object(t["f"])(),Object(t["c"])("nav",k,[M])}var q={props:{}};q.render=N;var A=q,S={id:"portfolio"},C=Object(t["d"])('<div class="container"><div class="row"><div class="col-lg-12 text-center"><h2>Portfolio</h2><hr class="star-primary"></div></div><div class="row"><div class="col-sm-4 portfolio-item text-center"><em>Coming Soon</em></div></div></div>',1);function _(e,a,r,o,l,s){return Object(t["f"])(),Object(t["c"])("section",S,[C])}var D={props:{}};D.render=_;var F=D,I={name:"Index",components:{Header:P,Navigation:A,Portfolio:F,About:d,Contact:f,Footer:j}};I.render=l;var H=I,T={name:"App",components:{Index:H}};T.render=o;var E=T;r("dd8e");Object(t["b"])(E).mount("#app")},dd8e:function(e,a,r){}});