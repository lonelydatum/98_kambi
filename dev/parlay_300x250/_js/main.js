import {read, olg, bannerSize} from '../../_common/js/common.js'











function init(){	
	const tl = new TimelineMax({onComplete:()=>{
		if(document.getElementById("legalBtn")){			
			TweenLite.set("#legalBtn", {display:"block"})
		}
	}})

	console.log(`-=${bannerSize.h}`);

	
	tl.set(".frame1", {opacity:1})
	tl.from(".arrows", {opacity:0, duration:.3})
	tl.from(".phone_1a", {opacity:0, y:"+=80", duration:.3})
	tl.from(".t1", {opacity:0, duration:.3})

	tl.to(".t1", {opacity:0, duration:.3}, `+=${read.t1}`)
	tl.add("t2")
	tl.to(".phone_1a", {y:`-=${bannerSize.h}`, duration:.3}, "t2")	
	tl.from(".phone_1b", {y:`+=${bannerSize.h}`, duration:.3}, "t2")
	tl.from(".t2", {opacity:0, duration:.3}, "t2")
	
	tl.from(".hero", {opacity:0, duration:.3}, `+=${read.t2}`)
	tl.from(".txt_uyg_big", {opacity:0, y:"+=80", duration:.3})
	tl.to(".txt_uyg_big", {opacity:0, duration:.3}, "+=1")

	tl.from(".arrows_2", {opacity:0, y:"+=80", duration:.3})
	tl.from(".phone_2", {opacity:0, y:"+=80", duration:.3}, "-=.2")	
	tl.from(".txt_dta", {opacity:0, x:"-=40", duration:.3})

	tl.from([".playsmart", ".legal"], {opacity:0,  duration:.3})


	tl.add(olg())
	return tl
}
init()