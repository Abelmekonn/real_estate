import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { PiPlayCircle } from "react-icons/pi";

function Gallery({ bgImg, galimg3, galimg2, galimg5, galimg4, galimg6 }) {
	return (
		<div>
			<div className=" w-8/10 mx-auto flex flex-col py-18 gap-y-5">
				<div className="text-center">
					<p className="text-[15px text-black] text-[#A3B18A]">
						GALERI RUANGAN APARTEMEN TERBAK
					</p>
					<h1 className="text-[45px] font-bold">
						Galeri Apartemen Di Indonesia
					</h1>
				</div>
				<div className="flex justify-between text-[#F3ECDC]">
					<div
						className="w-[600px] flex justify-center items-center pt-30 rounded-3xl group relative overflow-hidden"
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
						<div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 text-center">
							<h2 className="text-[35px] font-bold">Ruangan yang modern</h2>
							<p className="text-[18px]">
								tersedia fasii=litas yang memadia,memudahkan kegiatan anda
							</p>
						</div>
						<PiPlayCircle className="text-5xl bg-[#A3B18A] rounded-full z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 " />
					</div>
					<img
						src={galimg2}
						alt=""
						className="w-[290px] h-[300px] rounded-3xl"
					/>
					<img
						src={galimg3}
						alt=""
						className="w-[290px] h-[300px] rounded-3xl"
					/>
				</div>
				<div className="flex justify-between">
					<img
						src={galimg4}
						alt=""
						className="w-[393px] h-[300px] rounded-3xl"
					/>
					<img
						src={galimg5}
						alt=""
						className="w-[393px] h-[300px] rounded-3xl"
					/>
					<img
						src={galimg6}
						alt=""
						className="w-[393px] h-[300px] rounded-3xl"
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
