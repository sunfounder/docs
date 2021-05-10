window.onload =function(){
    // x=document.getElementsByClassName("wy-side-scroll")[0];
    // x.innerHTML += `<div><a href="../html/_static/pdf/docs-sunfounder-com-en-latest.pdf" target = "_blank" style="position: absolute;bottom: 0px;left: 0px;">Download PDF</a></div>`;

	document.getElementsByClassName("icon-home")[0].setAttribute('href','https://www.sunfounder.com' );
	document.getElementsByClassName("icon-home")[0].setAttribute('target','_blank');
    nav = document.getElementsByClassName("wy-body-for-nav")[0];

    // fotter = document.getElementsByTagName("footer")[0];
    // fotter.innerHTML = `<hr/><div role="contentinfo"><p>&copy; Copyright 2021, SunFounder</p></div>`

    document.getElementsByTagName("footer")[0].innerHTML=`<hr/><div role="contentinfo"><p>Copyright 2021, SunFounder</p></div>`;
    
}

