import React from "react";
import { FaPlayCircle } from "react-icons/fa";
import Button from "../CustomUi/Button";
import { MdArrowRight } from "react-icons/md";

function NewHero({ largeText, lowerText, isButton, link, page, img, isIcon }) {
	return (
		<div
			className={`w-full  mx-auto relative  md:min-h-[552px] flex  flex-col justify-end ${
				link ? "min-h-[552px]" : "min-h-[85vh]"
			}`}
			style={{
				backgroundImage: `url(${img})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				height: "full",
				backgroundRepeat: "no-repeat",
			}}
		>
			<div className="absolute h-full w-full hero "></div>
			<div className="w-9/10 md:w-8/10  gap-12 md:flex justify-between  mx-auto mb-12 md:mb-20 z-30 ">
				<div className="flex flex-col justify-between  mx-auto gap-5 mb-12 md:mb-0">
					{link ? (
						<div className="flex gap-5 items-center text-[12px] text-[#F3ECDC] ">
							<p>HOMEPAGE</p>
							<MdArrowRight />
							<p>{page}</p>
						</div>
					) : (
						<p className="text-[#F3ECDC]">
							TEMPATNYA SEWA APARTMEN TERBIK INDONESIA
						</p>
					)}
					<h1 className="text-4xl md:text-5xl font-bold text-[#F3ECDC] ">
						{largeText}
					</h1>
					<p className="text-[#F3ECDC]">{lowerText}</p>
					{isButton && (
						<div className="flex  gap-5 items-center ">
							<Button text="LIHAT SELENGKAPNYA" isGreen={true} />
							<Button text="SEKARANG" isGreen={false} />
						</div>
					)}
				</div>
				<div className="w-9/10 flex justify-center items-center text-5xl text-[#A3B18A]">
					{isIcon && <FaPlayCircle className="bg-white rounded-full" />}
				</div>
			</div>
		</div>
	);
}

export default NewHero;
