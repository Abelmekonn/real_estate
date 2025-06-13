import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { PiPlayCircle } from "react-icons/pi";

function Gallery({ bgImg, galimg3, galimg2, galimg5, galimg4, galimg6 }) {
	return (
		<div>
			<div className=" w-9/10 md:w-8/10 mx-auto flex flex-col py-18 gap-y-5">
				<div className="text-center">
					<p className="text-[15px text-black] text-[#A3B18A]">
						GALERI RUANGAN APARTEMEN TERBAK
					</p>
					<h1 className="text-[30px] md:text-[45px] font-bold">
						Galeri Apartemen Di Indonesia
					</h1>
				</div>
				<div className="md:flex justify-between text-[#F3ECDC]">
					<div
						className="w-[100%] md:w-[600px] flex justify-center items-center pt-30 rounded-3xl group relative overflow-hidden gap-6 px-3"
						style={{
							backgroundImage: `url(${bgImg})`,
							backgroundSize: "cover",
							backgroundPosition: "center",
						}}
					>
						{/* Overlay gradient appears on hover */}
						<div
							className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
							style={{
								background:
									"linear-gradient(180deg, rgba(0,0,0,0.04) 0%, rgba(52,78,65,0.83) 66.34%)",
							}}
						></div>
						{/* Text appears on hover */}
						<div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 text-center py-5 md:py-0">
							<h2 className="md:text-[35px] text-[25px] font-bold">Ruangan yang modern</h2>
							<p className="md:text-[18px] text-[15px]">
								tersedia fasii=litas yang memadia,memudahkan kegiatan anda
							</p>
						</div>
						<div className="rounded-full w-10 h-10 flex items-center justify-center bg-[#A3B18A] opacity-0  group-hover:opacity-100">
							<PiPlayCircle className="text-5xl  z-10  transition-opacity duration-300 " />
						</div>
					</div>
					<div className="flex gap-5 mt-10 md:mt-0 justify-between">
						<img
							src={galimg2}
							alt=""
							className="w-[170px] h-[180px] md:w-[290px] md:h-[300px] rounded-3xl"
						/>
						<img
							src={galimg3}
							alt=""
							className="w-[170px] h-[180px] md:w-[290px] md:h-[300px] rounded-3xl"
						/>
					</div>
				</div>
				<div className="flex justify-between ">
					<img
						src={galimg4}
						alt=""
						className="w-[120px] h-[150px] md:w-[393px] md:h-[300px] rounded-3xl"
					/>
					<img
						src={galimg5}
						alt=""
						className="w-[120px] h-[150px] md:w-[393px] md:h-[300px] rounded-3xl"
					/>
					<img
						src={galimg6}
						alt=""
						className="w-[120px] h-[150px] md:w-[393px] md:h-[300px] rounded-3xl"
					/>
				</div>
				<div className="text-[15px] flex items-center gap-2 mx-auto ">
					<span>LIHAT RUANGAN LAINNYA</span>
					<span className="text-[#588157]">LIYAT SELENGKAPNYA</span>
					<span className="text-[#588157]">
						<FaArrowRight />
					</span>
				</div>
			</div>
		</div>
	);
}

export default Gallery;
