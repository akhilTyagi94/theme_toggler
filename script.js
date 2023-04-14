function onThemeToggler() {
  let checkbox = document.getElementById("theme-toggler");
  let body = document.getElementsByTagName("body")[0];
  let header = document.getElementsByClassName("header-wrpr")[0];
  let anchor = document.querySelectorAll(".header-wrpr .menu-wrpr nav ul li a");
  let darklogo = document.getElementsByClassName("dark-theme-logo")[0];
  let lightlogo = document.getElementsByClassName("light-theme-logo")[0];
  let banner = document.getElementsByClassName("banner-section")[0];
  let heading = document.getElementsByTagName("h1")[0];
  let paragraph = document.querySelector("section.description p");
  let footer = document.getElementsByTagName("footer")[0];
  let copyright = document.querySelector("footer p");
  if (checkbox.checked) {
    body.style.backgroundColor = "#181b2a";
    header.style.backgroundColor = "#181b2a";
    anchor.forEach((anchor) => {
      anchor.style.color = "#f8f0dc";
    });
    darklogo.style.display = "block";
    lightlogo.style.display = "none";
    banner.style.backgroundColor = "#f8f0dc";
    heading.style.color = "#181b2a";
    paragraph.style.color = "#f8f0dc";
    footer.style.backgroundColor = "#181b2a";
    copyright.style.color = "#f8f0dc";
  } else {
    body.style.backgroundColor = "#f8f0dc";
    header.style.backgroundColor = "#f8f0dc";
    anchor.forEach((anchor) => {
      anchor.style.color = "#181b2a";
    });
    darklogo.style.display = "none";
    lightlogo.style.display = "block";
    banner.style.backgroundColor = "#181b2a";
    heading.style.color = "#f8f0dc";
    paragraph.style.color = "#181b2a";
    footer.style.backgroundColor = "#f8f0dc";
    copyright.style.color = "#181b2a";
  }
}
