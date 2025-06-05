import React from "react";

const data = [
	{
		number: "01",
		title: "Check In",
		description: "Set tangal check-out sesuai lenginan",
	},
	{
		number: "02",
		title: "Piliph Tempat",
		description: "Set tangal check-out sesuai lenginan",
	},
	{
		number: "03",
		title: "Bayar Tempat",
		description: "Set tangal check-out sesuai lenginan",
	},
	{
		number: "04",
		title: "Download Bukti",
		description: "Set tangal check-out sesuai lenginan",
	},
];

function StepWork() {
	return (
		<div className="w-8/10 mx-auto py-15">
			<div className=" flex flex-col items-center ">
				<p className="text-[#A3B18A] text-[15px]">
					BAGAIMANA CARE KERJA LAYANAN KAMI
				</p>
				<h1 className="text-[45px] font-bold">
					Kami Memberikan Langkah Kerja Yang Mudah
				</h1>
			</div>
			<div className="flex justify-between items-center mt-10">
				{data.map((item, index) => (
					<div className="w-[18%] text-center">
						<p className="text-[35px] text-[#A3B18A] mb-4">{item.number}</p>
						<h2 className="font-semibold text-[21px] mb-2">{item.title}</h2>
						<p className="text-[18px] text-[#6E6E6E]">{item.description}</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default StepWork;
