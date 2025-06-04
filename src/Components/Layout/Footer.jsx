import React from "react";
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";
import { IoIosHome, IoMdArrowDropright, IoMdMail } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { PiHouse } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";

const links = [
	{
		title: "Quick Links",
		data: ["Home", "About Us", "Check-in Check-out", "Layanan", "Blog"],
	},
	{
		title: "Site Links",
		data: [
			"Syarat dan ketentuan",
			"Disclaimer",
			"Hubungi kami",
			"GDPR",
			"Aturan pemakaian",
		],
	},
];

function Footer() {
	return (
		<div className=" bg-[#344E41]">
			<section className="w-8/10 mx-auto flex justify-between  text-[#F3ECDC] py-15 border-b-2 border-[#70726b]">
				<div className="w-[20%]">
					<div className="flex items-center gap-2 text-2xl">
						<PiHouse className="text-4xl text-yellow-400" />
						<span>HOUSE.</span>
					</div>
					<p className="text-[15px] mt-5">
						Aplikasi terbaik layanan penginapan di seluruh apartemen dan hotel
						di Indonesia
					</p>
					<div className="flex gap-5  text-2xl mt-5">
						<FaFacebook />
						<IoLogoTwitter />
						<FaInstagram />
						<FaPinterest />
					</div>
				</div>
				{links.map((link, index) => (
					<div key={index} className="w-[20%]">
						<h2 className="font-bold text-[25px]">{link.title}</h2>
						<ul className="mt-3 space-y-2">
							{link.data.map((item, idx) => (
								<li key={idx} className="flex items-center gap-2">
									<IoMdArrowDropright />
									{item}
								</li>
							))}
						</ul>
					</div>
				))}

				<div className="w-[20%]">
					<h2 className="text-[25px] font-bold mb-3">Tetap bersama kami</h2>
					<div className="flex items-center gap-2 ">
						<FaLocationDot className="text-[20px]" />
						<p className="text-[15px]">Jakarta, Indonesia</p>
					</div>
					<div className="flex items-center gap-2 mt-3">
						<IoMdMail className="text-[20px]" />
						<p className="text-[15px]">Hello@Email.com</p>
					</div>
					<div className="flex items-center gap-2 mt-3">
						<BsFillTelephoneFill className="text-[20px]" />
						<p className="text-[15px]">+62 123 4567 890</p>
					</div>
				</div>
			</section>
			<p className="text-[#F3ECDC] text-center py-5 text-[15px]">
				COPYGIRHT DIESNATALIS
			</p>
		</div>
	);
}

export default Footer;
