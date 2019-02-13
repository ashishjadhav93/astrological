//Start code for Dropdown
$(document).ready(function() {
 $(".scroll-down img").click(function() {
  $('html,body').animate({
    scrollTop: $(".section-2").offset().top + 200
   },
   'slow');
 });
 $(".btn-horoscope").click(function() {
  $(".browser_pop_up").show();
 });
 $(".pop_up_close").click(function() {
  $(".browser_pop_up").hide();
 });
 var nVer = navigator.appVersion;
 var nAgt = navigator.userAgent;
 var browserName = navigator.appName;
 var fullVersion = '' + parseFloat(navigator.appVersion);
 var majorVersion = parseInt(navigator.appVersion, 10);
 var nameOffset, verOffset, ix;
 if (window.navigator.userAgent.indexOf("Edge") > -1) {
  browserName = "edge";
  $(".browser_pop_up_inner").addClass("comn");
 }
 else if ((verOffset = nAgt.indexOf('MSIE ')) != -1) {
  browserName = "Microsoft Internet Explorer";
  $(".browser_pop_up_inner").addClass("comn");
  $(".pop_up_p").html("Browser Not Supported");
 }
 else if ((verOffset = nAgt.indexOf("Safari")) != -1) {
  browserName = "Safari";
  $(".browser_pop_up_inner").addClass("chrome");
 }
 else if ((verOffset = nAgt.indexOf("Firefox")) != -1) {
  browserName = "Firefox";
  $(".browser_pop_up_inner").addClass("firefox");
 } 
 else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) <
  (verOffset = nAgt.lastIndexOf('/'))) {
  browserName = nAgt.substring(nameOffset, verOffset);
  fullVersion = nAgt.substring(verOffset + 1);
  if (browserName.toLowerCase() == browserName.toUpperCase()) {
   browserName = navigator.appName;
  }
 }
});
/* Code end select */