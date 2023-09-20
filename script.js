var menu = document.getElementsByClassName("menu")[0]
var nav = document.getElementsByClassName("nav")[0]
var pages = document.getElementsByClassName("pages")[0]

var navbar = "oppen"
const menuFun =()=> {
	if (navbar == "oppen") {
		nav.style.width = "250px"
		pages.style.display = "block"
		navbar = "close"
		nav.style.borderRight = "solid 3px blue"
		pages.style.posisionLeft = "10px"
	}else{
		nav.style.width = "0px"
		nav.style.borderRight = "solid 0px blue"
		pages.style.display = "none"
		navbar = "oppen"
	}
}

menu.onclick = menuFun

var home = document.getElementsByClassName("home")[0]
var language = document.getElementsByClassName("language")[0]

const yo =()=> {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	})
}
home.onclick = yo

const to =()=> {
	window.scrollTo({
		top: 1050,
		behavior: "smooth",
	})
}

language.onclick = to


