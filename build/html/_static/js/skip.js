window.onload =function(){
    x=document.getElementsByClassName("wy-side-scroll")[0];
    x.innerHTML += `<div><a href="http://www.baidu.com" target = "_blank" style="position: absolute;bottom: 0px;left: 0px;">Download PDF</a></div>`;

	document.getElementsByClassName("icon-home")[0].setAttribute('href','https://www.sunfounder.com' );
	document.getElementsByClassName("icon-home")[0].setAttribute('target','_blank')
}