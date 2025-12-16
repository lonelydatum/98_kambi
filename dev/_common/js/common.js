import {olg} from "./proline"
import {origin} from "./helpers/helpers.js"

const banner = document.getElementById('banner')
const bannerSize = {w:banner.offsetWidth, h:banner.offsetHeight}

gsap.defaults({
  ease: "power3.out"
});

const READ_PLAY_IN_STORE = { t1: 2, t2: 3.2 }
const READ_PLUS_BETTING_EASIER = { t1: 2, t2: 3.2 }
const EARLY_PAYOUT = { t1: 2, t2: 3.5 }
const PARLAY = { t1: 2, t2: 3.5 }



const READ_ALL = { parlay:PARLAY, plusEarlyPayout:EARLY_PAYOUT, playInStore: READ_PLAY_IN_STORE, plusBettingEasier:READ_PLUS_BETTING_EASIER}

const read = READ_ALL[universalBanner.name]
const {w, h} = bannerSize
 

function init(){	
	const tl = new TimelineMax({onComplete:()=>{
		if(document.getElementById("legalBtn")){			
			TweenLite.set("#legalBtn", {display:"block"})
		}
	}})


	
	tl.set(".frame1", {opacity:1})
	tl.from(".arrows", {opacity:0, duration:.3})
	tl.from(".phone_1a", {opacity:0, y:"+=80", duration:.3})
	tl.from(".t1", {opacity:0, duration:.3})

	tl.to(".t1", {opacity:0, duration:.3}, `+=${read.t1}`)
	tl.add("t2")
	tl.from(".t2", {opacity:0, duration:.3}, "t2")
	tl.from(".phone_1b", {opacity:0, duration:.3}, "t2")
	
	tl.from(".hero", {opacity:0, duration:.3}, `+=${read.t2}`)
	tl.from(".txt_uyg_big", {opacity:0, y:"+=80", duration:.3})
	tl.to(".txt_uyg_big", {opacity:0, duration:.3}, "+=1")


	tl.add("end")
	tl.add(olg(), "end")
	tl.from(".arrows_2", {opacity:0, duration:.3}, "end")
	tl.from(".phone_2", {opacity:0, y:"+=80", duration:.3}, "end+=.1")	
	tl.from(".txt_dta", {opacity:0, x:"-=40", duration:.3}, "end+=.7")

	tl.from([".playsmart", ".legal"], {opacity:0,  duration:.3}, "end")


	
	return tl
}


function init_320x50(){	
	const tl = new TimelineMax({onComplete:()=>{
		if(document.getElementById("legalBtn")){			
			TweenLite.set("#legalBtn", {display:"block"})
		}
	}})


	
	tl.set(".frame1", {opacity:1})
	tl.from(".arrows", {opacity:0, duration:.3})
	tl.from(".phone_1a", {opacity:0, y:"+=80", duration:.3})
	tl.from(".t1", {opacity:0, duration:.3})
	tl.from(".t2", {opacity:0, duration:.3}, `+=${read.t1}`)
	tl.from(".arrows_2", {opacity:0, y:"+=80", duration:.3},`+=${read.t2}`)
	tl.from(".phone_2", {opacity:0, y:"+=80", duration:.3})	
	tl.from(".txt_dta", {opacity:0, y:"+=40", duration:.3})

	tl.from([".playsmart", ".legal"], {opacity:0,  duration:.3})

	tl.add(olg())
	
	return tl
}


function init_728x90(){	
	const tl = new TimelineMax({onComplete:()=>{
		if(document.getElementById("legalBtn")){			
			TweenLite.set("#legalBtn", {display:"block"})
		}
	}})


	
	tl.set(".frame1", {opacity:1})
	tl.from(".arrows", {opacity:0, duration:.3})
	tl.from(".phone_1a", {opacity:0, y:"+=80", duration:.3})
	tl.from(".t1", {opacity:0, duration:.3})
	tl.to(".t1", {opacity:0, duration:.3}, `+=${read.t1}`)
	tl.from([".phone_1b", ".t2"], {opacity:0, duration:.3})

	tl.from(".hero", {opacity:0, duration:.3},`+=${read.t2}`)
	tl.from(".txt_uyg", {opacity:0, duration:.3})

	tl.from(".arrow_hero", {opacity:0, duration:.3}, "+=1")
	
	tl.from(".phone_2", {opacity:0, y:"+=80", duration:.3})	
	tl.from(".txt_dta", {opacity:0, y:"+=40", duration:.3})

	tl.from([".playsmart", ".legal"], {opacity:0,  duration:.3})

	tl.add(olg())
	
	return tl
}




 

export { init, olg, bannerSize, read, init_320x50, init_728x90 }