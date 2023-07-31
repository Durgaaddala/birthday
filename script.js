var messages = ["Happy birthday to lucky",
	"Happy birthday to lucky",
	"Happy birthday to lacchappa"];

var i = messages.length;
var s = Math.floor(Math.random() * i);

document.getElementById("msg")
	.innerHTML = '" ' + messages[s] + ' "';
