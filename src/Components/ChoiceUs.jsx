import React from "react";
import { FaCheckCircle, FaShieldAlt } from "react-icons/fa";
import { AiOutlineBars } from "react-icons/ai";
import { TbMessages } from "react-icons/tb";
import { FaRegCirclePlay } from "react-icons/fa6";

function ChoiceUs({ title, img2, bottomText, lastText, rightTop, list }) {
	return (
		<div className="  mt-7  py-18 bg-[#344E41] text-[#F3ECDC]">
			<div className="w-8/10 flex mx-auto justify-between">
				<div className="w-[70%]">
					<p className="text-[#A3B18A] text-[15px]">
						KENAPA HARUS GUNAKAN LAYANAN KAMI
					</p>
					<h1 className="text-[45px] font-bold">{title}</h1>
					<div className="flex  items-center gap-10 mt-20">
						<div className="relative ">
							<img
								src={img2}
								alt=""
								className="w-[376px] h-[302px] rounded-3xl"
							/>
							<FaRegCirclePlay className="text-5xl absolute top-30 right-45 bg-[#A3B18A] rounded-3xl" />
						</div>

						<div className="flex flex-col space-y-12">
							<div>
								<div className="flex items-center gap-2">
									<FaShieldAlt className="text-3xl" />
									<p className="text-[21px]">Garanci Layanan</p>
								</div>
								<p className="text-[#FFFFFFBF] text-[18px] pl-8">
									Mendapatkan keamanan
								</p>
							</div>
							<div>
								<div className="flex items-center gap-2">
									<AiOutlineBars className="text-3xl" />
									<p className="text-[21px]">List Apartemen Terbaik</p>
								</div>
								<p className="text-[#FFFFFFBF] text-[18px] pl-8">
									Apartemen terbaik di Indonesia
								</p>
							</div>
							<div>
								<div className="flex items-center gap-2">
									<TbMessages className="text-3xl" />
									<p className="text-[21px]">{bottomText}</p>
								</div>
								<p className="text-[#FFFFFFBF] text-[18px] pl-8">{lastText}</p>
							</div>
						</div>
					</div>
				</div>
				<div className="w-[40%] bg-[#3A5A40] rounded-3xl">
					<div className="w-[90%] flex flex-col justify-center h-full gap-y-10 mx-auto">
						<i>{rightTop}</i>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
							repellendus asperiores quia voluptas cupiditate deleniti eos natus
							suscipit repudiandae? Ratione, corporis. Similique atque est dicta
							vitae iure natus doloremque fugiat.
						</p>
						<ul className="">
							{list.map((item) => (
								<li className="flex gap-2 items-center mb-2">
									<FaCheckCircle />
									{item}
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ChoiceUs;
