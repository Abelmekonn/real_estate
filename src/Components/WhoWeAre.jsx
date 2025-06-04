import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import image1 from "../assets/Images/image1.jpg";
import image2 from "../assets/Images/image2.jpg";
import image3 from "../assets/Images/image3.jpg";

function WhoWeAre() {
	return (
		<div className="bg-[#F3ECDC] flex flex-col min-h-[702px] items-center justify-center  ">
			<div className="flex justify-between items-center w-8/10 mx-auto">
				<div className="w-5/10">
					<p className="text-[11px] text-[#A3B18A]">LAYANAN KAMI</p>
					<h2 className="font-bold text-5xl">
						Apartemen impian dan ruangan yang modern.
					</h2>
				</div>
				<div className="flex text-[#A3B18A] gap-2">
					<p className="text-[11px] ">LIHAT SELENGKAPNYA</p>
					<FaArrowRightLong />
				</div>
			</div>
			<div className="flex justify-between items-center w-8/10 mx-auto mt-10 ">
				<div className="  bg-[#344E41]  rounded-3xl w-[417px] h-[305px]   ">
					<div className="text-white  w-[50%] h-full flex flex-col justify-center items-center gap-5 p-5 p-5">
						<i className="">
							"Layanan apartemen paling terbaik di indonesia, suka banget.."
						</i>
						<p className="text-2xl">Najwa Shilab</p>
					</div>
				</div>
				<div className="flex  gap-5 -ml-[100px]">
					<div className="">
						<img
							src={image1}
							alt=""
							className="rounded-2xl h-[245px] w-[287.5px]"
						/>
					</div>
					<div>
						<img
							src={image2}
							alt=""
							className="rounded-2xl h-[245px] w-[287.5px]"
						/>
					</div>
					<div>
						<img
							src={image3}
							alt=""
							className="rounded-2xl h-[245px] w-[287.5px]"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default WhoWeAre;
