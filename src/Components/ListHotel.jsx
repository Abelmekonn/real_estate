import React from "react";
import hotelimg1 from "../assets/Images/hotelimg1.jpg";
import hotelimg2 from "../assets/Images/hotelimg2.jpg";
import hotelimg3 from "../assets/Images/hotelimg3.jpg";
import hotelimg4 from "../assets/Images/hotelimg4.jpg";

function ListHotel() {
	return (
		<div className="w-9/10 md:w-8/10 mx-auto py-15 flex flex-col gap-5 items-center">
			<div>
				<p className="text-[16px]">FITUR</p>
				<h1 className="text-[30px] md:text-[45px] font-semibold md:w-[50%]">
					Kenyamanan & Kemewahan dalam satu Pengalaman
				</h1>
			</div>
			<div className="md:flex justify-between gap-9 ">
				<div className="md:flex justify-between gap-9 items-center">
					<div className="flex gap-5 flex-col mb-5 md:mb-0">
						<img
							src={hotelimg1}
							alt=""
							className="w-[370px] h-[280px] rounded-3xl "
						/>
						<img
							src={hotelimg2}
							alt=""
							className="w-[370px] h-[254px] rounded-3xl"
						/>
					</div>
					<div>
						<img
							src={hotelimg3}
							alt=""
							className="w-[468px] h-[412px] rounded-tr-4xl "
						/>
						<div className="bg-[#588157] text-[#F3ECDC] text-[32px] font-semibold w-[468px] h-[142px] ">
							<p className="w-[80%]  flex items-center justify-center mx-auto ">
								Kami Memberican Hasil Layanan Terbaik Untuk Penginapan Anda
							</p>
						</div>
					</div>
				</div>
				<img
					src={hotelimg4}
					alt=""
					className="w-[306px] h-[554px] rounded-3xl mt-5 md:mt-0"
				/>
			</div>
		</div>
	);
}

export default ListHotel;
