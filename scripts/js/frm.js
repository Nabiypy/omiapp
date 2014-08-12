var startTime = (new Date()).getTime();
var html = "";
html += "Enter Name : <input type=text value='' />";
$("#home div:jqmData(role=content)").append (html);

var endtime = (new Date()).getTime();
alert(endtime - startTime);
