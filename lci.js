function activeClass() {
	var i;
	var secWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	var secHeight = (secWidth * 0.48);
	var c = document.getElementsByClassName("tab");
	for(i=0;i<c.length;i++)
		c[i].className = c[i].className.replace("active", "");
	if(window.pageYOffset < secHeight)
		c[0].className += " active";
	else if(window.pageYOffset < secHeight*2)
		c[1].className += " active";
	else if(window.pageYOffset < secHeight*3)
		c[2].className += " active";
	else if(window.pageYOffset < secHeight*4)
		c[3].className += " active";
	else if(window.pageYOffset < secHeight*5)
		c[5].className += " active";
	else
		c[4].className += " active";
}

var pic = 1;
var repeat;
showimage(pic);

function nextshow(n) {
	pic += n;
	showimage(pic);
}	
function show(n) {
	pic = n;
	showimage(pic);
}	
function showimage(pos) {
	clearTimeout(repeat);
	var i;
	var img = document.getElementsByClassName("slide");
	var dot = document.getElementsByClassName("dot");
	if(pos < 1)
		pos = img.length;
	if(pos > img.length)
		pos = 1;
	pic = pos;
	for(i=0;i<img.length;i++)
		img[i].style.display = "none";
	for(i=0;i<dot.length;i++)
		dot[i].className = dot[i].className.replace(" active", "");
	img[pos-1].style.display = "block";
	dot[pos-1].className += " active";
	repeat = setTimeout(function() {showimage(++pos);}, 2000);
}

var film = document.getElementsByClassName("reel");
var part = document.getElementsByClassName("thumbnails");
var i = 1;
function next() {
	if(i > 0 && i < part.length-3) {
	  film[0].style.transform = "translate(-" + 19.6*i + "vw, 0)";
	  i++;}
}
function prev() {
	if(i > 1 && i < part.length-2) {
	  i--;
	  film[0].style.transform = "translate(-" + 19.6*(i-1) + "vw, 0)";}
}

var fin = document.getElementsByTagName("input");
fin[0].addEventListener("focusout", function (){inName(0);});
fin[1].addEventListener("focusout", function (){inName(1);});
fin[2].addEventListener("focusout", function (){inAdm();});
fin[3].addEventListener("focusout", function (){inNo();});
function inName(i) {
	var info = document.getElementsByClassName("f1-1");
	var prevSty = fin[i].style;
	if(fin[i].value === "")
	{	info[i].innerHTML = "<i class='fa fa-exclamation-circle'></i> " + fin[i].placeholder + " should not be empty.";
		info[i].style.display = "block";
		fin[i].style.border = "2px solid red"; 
		return false; }
	else if(Number(fin[i].value) || (fin[i].value == "0"))
	{	info[i].innerHTML = "<i class='fa fa-exclamation-circle'></i> " + fin[i].placeholder + " can't be a number.";
		info[i].style.display = "block";
		fin[i].style.border = "2px solid red";
		return false; }
	else {fin[i].style = prevSty;
		info[i].style.display = "none";
		return true; }
}
function inAdm() {
	var warn = document.getElementById("f1-2");
	var prsvSty = fin[2].style;
	if(fin[2].value === "")
	{	warn.innerHTML = "<i class='fa fa-exclamation-circle'></i> " + fin[2].placeholder + " should not be empty.";
		warn.style.display = "block";
		fin[2].style.border = "2px solid red";
		return false; }
	else if((fin[2].value.length < 8) || (fin[2].value.length > 10))
	{	warn.innerHTML = "<i class='fa fa-exclamation-circle'></i> " + fin[2].placeholder + " should have 8 to 10 characters.";
		warn.style.display = "block";
		fin[2].style.border = "2px solid red";
		return false; }
	else {fin[2].style = prsvSty;
		warn.style.display = "none";
		return true; }
}
function inNo() {
	var warn = document.getElementById("f1-3");
	var prsvSty = fin[3].style;
	fin[3].value.split("");
	if(fin[3].value === "")
	{	warn.innerHTML = "<i class='fa fa-exclamation-circle'></i> " + fin[3].placeholder + " should not be empty.";
		warn.style.display = "block";
		fin[3].style.border = "2px solid red";
		return false; }
	else if((fin[3].value.length != 10) || (fin[3].value.charAt(0) < 6) || isNaN(fin[3].value))
	{	warn.innerHTML = "<i class='fa fa-exclamation-circle'></i> Not valid " + fin[3].placeholder;
		warn.style.display = "block";
		fin[3].style.border = "2px solid red";
		return false; }
	else {fin[3].style = prsvSty;
		warn.style.display = "none";
		return true; }
}
function submitData() {
	var check = [];
	check[0] = inName(0);
	check[1] = inName(1);
	check[2] = inAdm();
	check[3] = inNo();
	if(check[0] && check[1] && check[2] && check[3])
		return true;
	else
		return false;
}