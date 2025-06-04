import React from "react";

function CounterStat() {
	return (
		<div className="bg-[#344E41] min-h-[209px] flex justify-center items-center">
			<div className="flex justify-between items-center w-9/10 md:w-8/10 mx-auto  text-[#F3ECDC]">
				<div className="">
					<div className="mb-2 text-2xl md:text-5xl font-bold">
						380 <sup>+</sup>
					</div>
					<div>Apartmen Terbaik</div>
				</div>
				<div>
					<div className="mb-2 text-2xl md:text-5xl font-bold">
						56 <sup>+</sup>
					</div>
					<div>Partner Kami</div>
				</div>
				<div>
					<div className="mb-2 text-2xl md:text-5xl font-bold">
						78K <sup>+</sup>
					</div>
					<div>Customer Suka</div>
				</div>
				<div>
					<div className="mb-2 text-2xl md:text-5xl font-bold">
						15th <sup>+</sup>
					</div>
					<div>Pengalaman Terbaik</div>
				</div>
			</div>
		</div>
	);
}

export default CounterStat;
