import React from "react";
import { FaPlayCircle } from "react-icons/fa";
import img1 from "../assets/Images/img1.jpg";
import Button from "./CustomUi/Button";
function Hero() {
	return (
		<div
			className="w-full  mx-auto relative min-h-[552px] flex  flex-col justify-end "
			style={{
				backgroundImage: `url(${img1})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				height: "full",
				backgroundRepeat: "no-repeat",
			}}
		>
			<div className="absolute h-full w-full hero "></div>
			<div className="w-8/10 flex justify-between  mx-auto mb-20 z-30 ">
				<div className="flex flex-col justify-between  mx-auto gap-5 ">
					<p className="text-[#F3ECDC]">
						Best Apartment Rental in Ethiopia
					</p>
					<h1 className="text-5xl font-bold">
						<span className="text-[#F3ECDC]">Ayo,</span>
						<span className="text-[#588157]">Cari</span>
						<span className="text-[#F3ECDC]">Apartemen Impian</span>
						<span className="text-[#588157]">Anda Disini..</span>
					</h1>
					<p className="text-[#F3ECDC]">
						Rumah Impian Anda, Hanya Satu Klik Jauhnya: Temukan Kenyamanan dalam
						Setiap Apartemen D Indonesia
					</p>
					<div className="flex  gap-5 items-center ">
						<Button text="LIHAT SELENGKAPNYA" isGreen={true} />
						<Button text="SEKARANG" isGreen={false} />
					</div>
				</div>
				<div className="w-9/10 hidden md:flex justify-center items-center text-5xl text-[#A3B18A]">
					<FaPlayCircle className="bg-white rounded-full" />
				</div>
			</div>
		</div>
	);
}

export default Hero;
