import React, { useEffect, useRef } from "react"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import port01 from "../assets/img/mbc_prot01_code_99.png"
import port02 from "../assets/img/mbc_prot02_eof.png"
import port03 from "../assets/img/mbc_prot03__joteam.png"
import port04 from "../assets/img/mbc_prot04__scoops.png"
import port05 from "../assets/img/mbc_prot05_tamyok.png"

const PortText = [
	{
		num: "01",
		title: "code_99",
		img: port01,
		img_alt: "code_99",
		desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione odio quam quod atque quidem maxime. Eos ullam, aspernatur, voluptatibus qui voluptate saepe numquam dignissimos consectetur perspiciatis assumenda accusamus. Doloribus, ducimus.",
		site: "http://tnwjd3887.dothome.co.kr/port1_5",


	},
	{
		num: "02",
		title: "eof",
		img: port02,
		img_alt: "eof",
		desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione odio quam quod atque quidem maxime. Eos ullam, aspernatur, voluptatibus qui voluptate saepe numquam dignissimos consectetur perspiciatis assumenda accusamus. Doloribus, ducimus.",
		site: "http://tjsdudis.dothome.co.kr/team",
	},
	{
		num: "03",
		title: "조현호와 아이들",
		img: port03,
		img_alt: "조현호와 아이들",
		desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione odio quam quod atque quidem maxime. Eos ullam, aspernatur, voluptatibus qui voluptate saepe numquam dignissimos consectetur perspiciatis assumenda accusamus. Doloribus, ducimus.",
		site: "http://tlswnsxor.dothome.co.kr/joteam/",
	},
	{
		num: "04",
		title: "210승",
		img: port04,
		img_alt: "210승",
		desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione odio quam quod atque quidem maxime. Eos ullam, aspernatur, voluptatibus qui voluptate saepe numquam dignissimos consectetur perspiciatis assumenda accusamus. Doloribus, ducimus.",
		site: "http://mieum0915.dothome.co.kr/scoops/",
	},
	{
		num: "05",
		title: "무모한도전",
		img: port05,
		img_alt: "무모한도전",
		desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione odio quam quod atque quidem maxime. Eos ullam, aspernatur, voluptatibus qui voluptate saepe numquam dignissimos consectetur perspiciatis assumenda accusamus. Doloribus, ducimus.",
		site: "http://ds1djs.dothome.co.kr/mainpage",
	},
	{
		num: "06",
		title: "code_99",
		img: port01,
		img_alt: "code_99",
		desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione odio quam quod atque quidem maxime. Eos ullam, aspernatur, voluptatibus qui voluptate saepe numquam dignissimos consectetur perspiciatis assumenda accusamus. Doloribus, ducimus.",
		site: "http://tnwjd3887.dothome.co.kr/port1_5",


	},
	{
		num: "07",
		title: "eof",
		img: port02,
		img_alt: "eof",
		desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione odio quam quod atque quidem maxime. Eos ullam, aspernatur, voluptatibus qui voluptate saepe numquam dignissimos consectetur perspiciatis assumenda accusamus. Doloribus, ducimus.",
		site: "http://tjsdudis.dothome.co.kr/team",
	},
	{
		num: "08",
		title: "조현호와 아이들",
		img: port03,
		img_alt: "조현호와 아이들",
		desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione odio quam quod atque quidem maxime. Eos ullam, aspernatur, voluptatibus qui voluptate saepe numquam dignissimos consectetur perspiciatis assumenda accusamus. Doloribus, ducimus.",
		site: "http://tlswnsxor.dothome.co.kr/joteam/",
	},
	{
		num: "09",
		title: "210승",
		img: port04,
		img_alt: "210승",
		desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione odio quam quod atque quidem maxime. Eos ullam, aspernatur, voluptatibus qui voluptate saepe numquam dignissimos consectetur perspiciatis assumenda accusamus. Doloribus, ducimus.",
		site: "http://mieum0915.dothome.co.kr/scoops/",
	},
	{
		num: "10",
		title: "무모한도전",
		img: port05,
		img_alt: "무모한도전",
		desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione odio quam quod atque quidem maxime. Eos ullam, aspernatur, voluptatibus qui voluptate saepe numquam dignissimos consectetur perspiciatis assumenda accusamus. Doloribus, ducimus.",
		site: "http://ds1djs.dothome.co.kr/mainpage",
	},

]




const Port = () => {
	const horizontalRef = useRef(null);
	// horizontalRef 변수를 생성하고 useRef 훅으로 초기화

	const sectionsRef = useRef([]);
	// sectionsRef 변수를 생성하고 useRef 훅으로 빈배열로 초기화

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		// 라이브러리를 사용할 수 있도록 안정화시켜주는 명령어

		const horizontal = horizontalRef.current;
		const sections = sectionsRef.current;

		let scrollTween = gsap.to(sections, {
			xPercent: -120 * (sections.length - 1),
			ease: "none",
			scrollTrigger: {
				trigger: horizontal,
				start: "top 56px",
				end: () => "+=" + horizontal.offsetWidth,
				pin: true,
				scrub: 1,
			}

		})
		return () => {
			scrollTween.kill();
		}
	}, []);


	return (
		<section id="port" ref={horizontalRef}>
			<div className="port_inner">
				<div className="port_title">
					portfolio <em>나의 작품들</em>
				</div>
				<div className="port_wrap">
					{PortText.map((port, key) => (
						<div 
						className={`port_item s${key + 1}`} 
						key={key}

						ref={(el)=>(sectionsRef.current[key]=el)}
						>
							<span className="num">{port.num}</span>
							<a href={port.site} className="img">
								<img src={port.img} alt={port.img_alt} />
							</a>
							<h3 className="title">{port.title}</h3>
							<p className="desc">{port.desc}</p>
							<a href="{port.site}" className="site">사이트보기</a>
						</div>
					))}


				</div>
			</div>
		</section>
	)
}

export default Port
