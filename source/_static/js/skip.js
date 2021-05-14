function setNavMenu(){
  let _Id = document.getElementsByTagName("body")[0];
  let _url = "https://www.sunfounder.com";
  let data = [
    {
      name: "RasPad",
      url: _url + "/products/raspberrypi-tablet-raspad",
    },
    {
      name: "Raspberry Pi Store",
      url: _url + "/collections/raspberry-pi-store",
    },
    {
      name: "Arduino Store",
      url: _url + "/collections/arduino-store",
    },
    {
      name: "SunFounder Special",
      url: _url + "/collections/sunfounder-specials",
    },
    {
      name: "Learn",
      url: "https://learn.sunfounder.com/",
    },
    {
      name: "Community",
      url: _url + "#",
    },
    {
      name: "Education",
      url: _url + "/pages/sunfounder-education",
    },
  ];
  
  let str = "";
  
  data.forEach(function (item, index) {
    str += `
              <li class="nav-bar__item" style="list-style: none;box-sizing: border-box!important;-webkit-font-smoothing: antialiased;position: relative;display: inline-block;margin-right: 50px;padding: 17px 0;color:#080808;";>
                  <a href="${item.url}" class="nav-bar__link link" data-type="menuitem" target=_blank>${item.name}</a>
              </li>
          `;
  });
  let ul = `
  <div id="sunFounderLogo" style="width:100%;border-bottom:1px solid #e1e3e4;padding:10px 0px;">
      <div class="sunFounderLogo_image" style="margin: 0 auto;max-width:1140px;">
      <a href="https://www.sunfounder.com">
      <img width="328" height="57" src="https://learn.sunfounder.com/wp-content/uploads/2020/10/logo.png" class="attachment-large size-large" alt="logo" loading="lazy" srcset="https://learn.sunfounder.com/wp-content/uploads/2020/10/logo.png 328w, https://learn.sunfounder.com/wp-content/uploads/2020/10/logo-300x52.png 300w" sizes="(max-width: 328px) 100vw, 328px">								</a>
      </div>
  </div>
  <div style="border-bottom:1px solid #e1e3e4;">
    <div id="wrapper" style="width:100%;overflow:hidden;margin:0 auto;max-width:1140px;">
      <div class="setMenu" style="width:100%;overflow-x:auto;"> 
                <ul class="nav-bar__linklist list--unstyled" id="test" data-type="menu">
                    ${str}
                </ul>
        </div>
                
    </div>
  </div>
  
      
      `;
  // 插入标签
  _Id.innerHTML = ul + _Id.innerHTML;
  document.getElementById("test").style.cssText =
    "margin: 0 auto;padding: 0;list-style: none;box-sizing: border-box!important;color:#080808;width:1140px;";
  // let navBar = document.getElementsByClassName("nav-bar__item"); //一级
  let navLink = document.getElementsByClassName("nav-bar__link"); // a 标签
  // let navDropDownUl = document.getElementsByClassName("nav-dropdown");
  for (let a = 0; a < navLink.length; a++) {
    navLink[a].style.cssText =
      " display: block;cursor: pointer;    text-decoration: none;    background-color: transparent;color: inherit;color:#080808; ";
    navLink[a].onmouseenter = function (event) {
      this.style.cssText =
        "color:#019cda;text-decoration: none;border-bottom:3px solid #019cda;padding-bottom:15px;";
    };
    navLink[a].onmouseleave = function (event) {
      this.style.cssText = "color:#080808;text-decoration: none;border:none;";
    };
  }
}
setNavMenu();