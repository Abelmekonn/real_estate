import React from "react";
import { FaArrowRight, FaStar } from "react-icons/fa";
import testimg from "../assets/Images/testimg.jpg";
import testimg2 from "../assets/Images/testimg2.jpg";
import testimg3 from "../assets/Images/testimg3.jpg";
import testimg4 from "../assets/Images/testimg4.jpg";
import { FaCirclePlay } from "react-icons/fa6";

function Testimonial() {
	return (
		<div className="bg-[#344E41] py-15">
			<div className="w-9/10 md:w-8/10 mx-auto flex justify-between items-center  ">
				<div>
					<p className="text-[15px] text-[#A3B18A]">APA YANG MEREKA KATAKAN</p>
					<h2 className="text-[#F3ECDC] text-[25px] md:text-[45px] font-bold">
						Testimoni Pengunjung Kami
					</h2>
				</div>
				<div className="flex items-center gap-2 text-[#F3ECDC]">
					SEE ALL REVIEWS
					<FaArrowRight />
				</div>
			</div>
			<div className="w-9/10 md:w-8/10 gap-2 flex justify-between items-center  mx-auto pt-7">
				<div className="relative">
					<img
						src={testimg}
						alt=""
						className="w-[170px] md:w-[317px] h-[200px] md:h-[401px]"
					/>
					{/* black outline */}
					<div className="absolute inset-0 z-20 bg-black/50 opacity-5"></div>
					<div className="absolute top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2">
						<FaCirclePlay className="text-5xl text-[#A3B18A] " />
					</div>
				</div>

				<div
					className="w-[500px] md:w-[923px] h-[200px] md:h-[401px] flex justify-center items-center gap-5"
					style={{
						backgroundImage: `url(${testimg2})`,
						backgroundCover: "cover",
						backgroundPosition: "center",
					}}
				>
					<div className=" flex flex-col justify-between w-[120px] md:w-[431px]  h-[180px] md:h-[250px] text-[12px] md:text-[18px] p-2 md:p-8 bg-[#F3ECDC] rounded-3xl ">
						<div className="flex  gap-2 text-[#F3A734]">
							<FaStar />
							<FaStar />
							<FaStar />
							<FaStar />
							<FaStar />
						</div>
						<i>
							"Suka banget sama layanan disini. sample nemu apartamen impian
							aku"
						</i>
						<div className="flex items-center gap-4 ">
							<img
								src={testimg3}
								alt=""
								className="w-[50px] h-[50px] md:w-[75px] md:h-[75px] rounded-4xl"
							/>
							<div className="flex flex-col md:space-y-1">
								<p className="font-semibold"> Mr.John Doe</p>
								<p className="text-[#A3B18A]"> Mr.John Doe</p>
							</div>
						</div>
					</div>
					<div className="w-[120px] md:w-[431px] text-[12px] md:text-[18px] h-[180px] md:h-[250px]  p-2 md:p-8 flex flex-col justify-between bg-[#F3ECDC] rounded-3xl">
						<div className="flex gap-2 text-[#F3A734] ">
							<FaStar />
							<FaStar />
							<FaStar />
							<FaStar />
							<FaStar />
						</div>
						<i>
							"Sangat elegan sama layanan disini. sample nemu apartamen disini"
						</i>
						<div className="flex items-center gap-4">
							<img
								src={testimg4}
								alt=""
								className="w-[50px] h-[50px] md:w-[75px] md:h-[75px] rounded-4xl"
							/>
							<div className="flex flex-col space-y-1">
								<p className="font-semibold"> Mr.John Doe</p>
								<p className="text-[#A3B18A]"> Mr.John Doe</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Testimonial;
