import React from "react";
import Button from "./CustomUi/Button";
import { MdHome } from "react-icons/md";
import {
	FaArrowRight,
	FaBuilding,
	FaDraftingCompass,
	FaShieldAlt,
} from "react-icons/fa";
import { RiPaintBrushLine } from "react-icons/ri";
import { TbBuildingEstate } from "react-icons/tb";
import { mainBoxes } from "../Constant/data";

// Define your box data
// const mainBoxes = [
// 	{
// 		title: "Apartemen Terbaik",
// 		desc: "Memberikan list apartemen terbaik di selunuh Indonesis",
// 		bg: "#F9F9F9",
// 		textColor: "text-black",
// 		icon: <FaDraftingCompass className="text-[#588157] text-4xl" />,
// 	},
// 	{
// 		title: "Ruangan Modern",
// 		desc: "Memberikan kamar yang modem dan sesual dengan impian anda",
// 		bg: "#F9F9F9",
// 		textColor: "text-black",
// 		icon: <MdHome className="text-[#588157] text-4xl" />,
// 	},
// 	{
// 		title: "Apartemen Terbaik",
// 		desc: "Menyediakan semua fasiltas yang mendukung dan memadal",
// 		bg: "#F9F9F9",
// 		textColor: "text-black",
// 		icon: <RiPaintBrushLine className="text-[#588157] text-4xl" />,
// 	},
// 	{
// 		title: "Apartemen Terbaik",
// 		desc: "Memberikan list apartemen terbaik di selunuh Indonesis",
// 		bg: "#F9F9F9",
// 		textColor: "text-black",
// 		icon: <FaShieldAlt />,
// 	},
// 	{
// 		title: "Ruangan Modern",
// 		desc: "Memberikan kamar yang modem dan sesual dengan impian anda",
// 		bg: "#F9F9F9",
// 		textColor: "text-black",
// 		icon: <FaBuilding />,
// 	},
// 	{
// 		title: "Apartemen Terbaik",
// 		desc: "Menyediakan semua fasiltas yang mendukung dan memadal",
// 		bg: "#F9F9F9",
// 		textColor: "text-black",
// 		icon: <TbBuildingEstate />,
// 	},
// ];

function Services({ texts, isHome, bottomText }) {
	return (
		<div className="w-9/10 md:w-8/10 mx-auto">
			{texts && (
				<div className="flex flex-col items-center justify-center text-center ">
					<p className="text-[#A3B18A] text-[15px]">
						LAYANAN YANG KAMI BERIKAN
					</p>
					<h1 className="text-[30px] md:text-[45px] font-bold">
						Layanan Yang Mendukung
					</h1>
				</div>
			)}
			<div className="flex justify-center md:justify-between flex-wrap items-center space-y-5 mt-7">
				{(isHome ? mainBoxes.slice(0, 3) : mainBoxes).map((box, idx) => (
					<div
						key={idx}
						className={`w-[393px] h-[357px] rounded-3xl flex items-center justify-center bg-[${box.bg}] hover:bg-[#344E41] ${box.textColor} hover:text-white
						 bg-[#F9F9F9] transition-all duration-300 ease-in-out`}
						// style={{ background: box.bg }}
					>
						<div
							className={`w-[70%] flex flex-col justify-center items-center text-center gap-7 p-5 mt-5 `}
						>
							{box.icon}
							<p className="text-[25px] font-bold">{box.title}</p>
							<p>{box.desc}</p>
							<Button
								text={
									<div className="flex items-center gap-2 text-[11px]">
										<p>LIHAT SELENGKAPNYA</p>
										<FaArrowRight />
									</div>
								}
								isGreen={true}
							/>
						</div>
					</div>
				))}
			</div>

			{bottomText && (
				<div className="text-center flex items-center justify-center gap-2 text-[15px] text-[#588157] ">
					<span className="text-black">LIHAT SELURUH LAYANAN</span>
					<span className="text-[#588157]"> LIHAT SELENGKAPNYA</span>
					<span>
						<FaArrowRight />
					</span>
				</div>
			)}
		</div>
	);
}

export default Services;
