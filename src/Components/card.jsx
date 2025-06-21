import React from "react";
import Button from "./CustomUi/Button";
import { FaStar } from "react-icons/fa";
import Badge from "./CustomUi/Badge";

function Card({ name, rating, location, reviews, type, image, badges }) {
	return (
		<div className=" bg-white  p-7 shadow-lg rounded-3xl flex flex-col gap-7  md:w-[892px] ">
			<div className="  flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0 ">
				<div className="w-fit">
					<p className="text-[#073937]  md:text-[22px]">{name}</p>
					<div className="flex items-center gap-2">
						<FaStar />
						<p className="flex text-[#073937]  md:text-[17px]">
							{rating} ({reviews}*reviews){" "}
							<span className="hidden md:block">|{location}</span>
						</p>
					</div>
				</div>
				<div className="flex flex-wrap space-y-2 md:justify-end gap-2">
					{badges.map((item, index) => (
						<Badge key={index} item={item} />
					))}
				</div>
			</div>
			<div className="flex flex-col md:flex-row gap-10">
				<img
					src={image}
					alt=""
					className="w-full md:w-[500px] h-[200px] md:h-[300px] rounded-3xl"
				/>
				<div className="flex flex-col justify-between space-y-3 md:space-y-0">
					<div className="text-[14px]  text-[#073937]">
						<p className="text-[10px]">JENIS KAMAR & HARGA /MALAM</p>
						{type.map((item, index) => (
							<div
								key={index}
								className={`flex justify-between mt-3 py-3 ${
									index !== type.length - 1 ? "border-b-3 border-gray-200" : ""
								}`}
							>
								<p>{item.name}</p>
								<p>{item.price}</p>
							</div>
						))}
					</div>
					<Button text="Lihat Selengkapnya " isGreen={true} size={true} />
				</div>
			</div>
		</div>
	);
}

export default Card;
