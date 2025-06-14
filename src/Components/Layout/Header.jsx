import React, { useEffect, useState } from "react";
import { MdEmail } from "react-icons/md";
import { IoLogoFacebook } from "react-icons/io5";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaInstagram, FaPinterest } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { PiHouse } from "react-icons/pi";
import { HiOutlineBars2 } from "react-icons/hi2";
import Button from "../CustomUi/Button";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

function Header() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [scrolled, SetScrolled] = useState(false);
	useEffect(() => {
		const handleScroll = () => {
			const offset = window.scrollY;
			SetScrolled(offset > 120);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};
	return (
		<div className=" sm:w-full md:w-9/10 mx-auto fixed top-0 left-0 right-0 z-50 ">
			<div
				className={`flex justify-between items-center w-[95%] md:w-9/10 mx-auto bg-[#588157] text-white py-3 
				
				 ${scrolled ? "" : "rounded-br-3xl rounded-bl-3xl"} px-4`}
			>
				<ul className="md:flex gap-6 md:gap-10 ">
					<li className="flex items-center gap-2">
						<MdEmail /> <span>Diesnatalis@Email.com</span>
					</li>
					<li className="flex items-center gap-2">
						<FaPhoneSquareAlt />
						<span>(+62) 123-456-789</span>
					</li>
				</ul>
				<ul className="flex gap-2">
					<li>
						<IoLogoFacebook />
					</li>
					<li>
						<AiOutlineTwitter />
					</li>
					<li>
						<FaInstagram />
					</li>
					<li>
						<FaPinterest />
					</li>
				</ul>
			</div>

			<div
				className={`flex justify-between items-center py-4 w-9/10 mx-auto px-4 text-[#F3ECDC] ${
					scrolled ? "bg-[#344E41] rounded-br-3xl rounded-bl-3xl" : ""
				}`}
			>
				<div className="flex items-center gap-2 text-2xl">
					<PiHouse className="text-4xl text-yellow-400" />
					<span>HOUSE.</span>
				</div>
				<ul
					className={`md:flex gap-7 text-300 ${
						isMobileMenuOpen
							? "md:hidden flex absolute flex-col top-40 right-0 bg-[#588157] w-[50%] p-10 rounded-bl-3xl rounded-br-3xl navbar"
							: "hidden"
					} md:visible`}
				>
					<li>
						<Link to="/">HOME</Link>
					</li>
					<li>
						<Link to="/about">ABOUT US</Link>
					</li>
					<li>
						<Link to="/service">SERVICE</Link>
					</li>
					<li className="flex items-center gap-2">
						<Link to="/contact" className="flex items-center gap-2">
							CHECK IN CHECK OUT <MdKeyboardArrowDown />
						</Link>
					</li>
					<li className="flex items-center gap-2">
						BLOG <MdKeyboardArrowDown />
					</li>
				</ul>
				<div className="flex items-center gap-2">
					<div className="hidden md:flex gap-5">
						<Button text="GET STARTED" />
					</div>
					<div onClick={toggleMobileMenu} className="text-4xl md:hidden">
						{isMobileMenuOpen ? <HiX /> : <HiOutlineBars2 />}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
