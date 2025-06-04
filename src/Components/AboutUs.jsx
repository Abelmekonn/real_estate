import React from "react";
import Button from "./CustomUi/Button";
import aboutimg1 from "../assets/Images/aboutimg1.jpg";
import aboutimg2 from "../assets/Images/aboutimg2.jpg";
import { FaArrowRight, FaAward, FaCalendarAlt } from "react-icons/fa";

function AboutUs() {
	return (
		<div className="w-8/10 mx-auto flex justify-between items-center mt-20 mb-10 gap-70 ">
			<div className="flex relative">
				<img
					src={aboutimg1}
					alt=""
					className="w-[350px] h-[450px] rounded-3xl"
				/>
				<img
					src={aboutimg2}
					alt=""
					className="w-[350px] h-[450px] mt-20 rounded-3xl -ml-40"
				/>
				<div className=" flex flex-col justify-center items-center  absolute top-[65%] left-[5%] text-white bg-[#344E41] w-[210px] h-[130px] rounded-3xl">
					<p>
						99 <sup>%</sup>
					</p>
					<p>Customer Suka</p>
				</div>
			</div>
			<div className="flex flex-col justify-center gap-10 ">
				<p className="text-[11px] text-[#588157]">LAYANAN TERBAIK</p>
				<h1 className="font-bold text-[45px]">
					Kami Berikan Apartemen dan Layanan Terbaik
				</h1>
				<p className="text-gray-500 w-7/10">
					Memberikan layanan terbaik sampal anda mendapatikan apartamen sesual
					dengam impian
				</p>
				<p className="flex gap-2 items-center font-bold">
					<FaAward /> <span>No. I Layanan Apartamen Terbaik Di Indonesia</span>
				</p>
				<p className="flex gap-2 items-center font-bold">
					<FaCalendarAlt />
					<span>15 Tahun Lebih Kamil Bersedla Layani Anda</span>
				</p>

				<div text->
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
		</div>
	);
}

export default AboutUs;
