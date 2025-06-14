import React from "react";
import blogimg from "../assets/Images/blogimg1.jpg";
import { FaArrowRight } from "react-icons/fa";
import blogimg2 from "../assets/Images/blogimg2.jpg";
import blogimg3 from "../assets/Images/blogimg3.jpg";
const data = [
	{
		image: blogimg,
		button1: "General",
		button2: "Modern",
		title: "Kamar Terbaik Kebanggaan Keluarga",
		description: "Pastinya keluarga pada pengen dong punya Rumah Yang bi",
		articleLink: "BACA ARTIKEL",
		articleIcon: <FaArrowRight />,
	},
	{
		image: blogimg2,
		button1: "Nyaman",
		button2: "Elegan",
		title: "10 Apartemen Paling Nyaman Di Indonesia",
		description: "Indonesia keluarga pada pengen dong punya Rumah di sel ",
		articleLink: "BACA ARTIKEL",
		articleIcon: <FaArrowRight />,
	},
	{
		image: blogimg3,
		button1: "Sugni",
		button2: "Adem",
		title: "Apartemen Terbaik Di Tengah Kota ",
		description: "Kamu keluarga pada pengen dong punya Rumah Yang bi",
		articleLink: "BACA ARTIKEL",
		articleIcon: <FaArrowRight />,
	},
];

function Blog() {
	return (
		<div className="w-9/10 md:w-8/10 mx-auto  flex flex-col justify-between gap-10 py-15">
			<div className="flex justify-between w-full ">
				<div>
					<p className="text-[15px] text-[#A3B18A]">BACA BLOG KAMI</p>
					<h1 className="text-[30px] md:text-[45px] font-bold">
						Postingan Artikel Seru
					</h1>
				</div>
				<div className="flex gap-2 items-center text-[#588157] text-[15px]">
					<p>LIHAT SEMU BLOG</p>
					<FaArrowRight />
				</div>
			</div>
			<div className="md:flex justify-between ">
				{data.map((item, index) => (
					<div
						key={index}
						className="flex flex-col  items-center py-3 px-1 md:px-0"
					>
						<div className="w-[393px]">
							<img
								src={item.image}
								alt=""
								className="w-[393px] h-[250px] rounded-t-3xl"
							/>
						</div>
						<div className="w-[393px] px-10 bg-white rounded-b-3xl pb-7">
							<div className="flex gap-3 items-center mt-7">
								<button className="  px-5 py-2 rounded-3xl bg-[#3A5A40] text-white text-[15px]">
									{item.button1}
								</button>
								<button
									className=" px-5 py-2 rounded-3xl bg-[#A3B18A] text-white text-[15px]
                        "
								>
									{item.button2}
								</button>
							</div>
							<h2 className="text-[25px]  font-bold mt-5  ">{item.title}</h2>
							<p className="text-[#6E6E6E]  text-[18px] ">{item.description}</p>
							<div className="flex gap-2 items-center text-[#588157] text-[11px] md:text-[15px] mt-5">
								<p>{item.articleLink}</p>
								{item.articleIcon}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Blog;
