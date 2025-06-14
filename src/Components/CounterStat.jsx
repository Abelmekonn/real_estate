import React, { useEffect, useState } from "react";

function Counter({ end, suffix = "", duration = 2000 }) {
	const [count, setCount] = useState(0);

	useEffect(() => {
		let start = 0;
		const increment = end / (duration / 16);
		const handle = setInterval(() => {
			start += increment;
			if (start >= end) {
				setCount(end);
				clearInterval(handle);
			} else {
				setCount(Math.floor(start));
			}
		}, 16);
		return () => clearInterval(handle);
	}, [end, duration]);

	return (
		<span>
			{count}
			{suffix}
		</span>
	);
}

function CounterStat() {
	return (
		<div className="bg-[#344E41] min-h-[209px] flex justify-center items-center py-8 px-2">
			<div className="flex flex-col md:flex-row justify-between items-center w-full max-w-5xl mx-auto text-[#F3ECDC] gap-6 md:gap-0">
				<div className="flex flex-col items-center md:items-start">
					<div className="mb-1 text-3xl sm:text-4xl md:text-5xl font-bold">
						<Counter end={380} /> <sup>+</sup>
					</div>
					<div className="text-base sm:text-lg md:text-xl">Apartmen Terbaik</div>
				</div>
				<div className="flex flex-col items-center md:items-start">
					<div className="mb-1 text-3xl sm:text-4xl md:text-5xl font-bold">
						<Counter end={56} /> <sup>+</sup>
					</div>
					<div className="text-base sm:text-lg md:text-xl">Partner Kami</div>
				</div>
				<div className="flex flex-col items-center md:items-start">
					<div className="mb-1 text-3xl sm:text-4xl md:text-5xl font-bold">
						<Counter end={78000} suffix="K" /> <sup>+</sup>
					</div>
					<div className="text-base sm:text-lg md:text-xl">Customer Suka</div>
				</div>
				<div className="flex flex-col items-center md:items-start">
					<div className="mb-1 text-3xl sm:text-4xl md:text-5xl font-bold">
						<Counter end={15} suffix="th" /> <sup>+</sup>
					</div>
					<div className="text-base sm:text-lg md:text-xl">Pengalaman Terbaik</div>
				</div>
			</div>
		</div>
	);
}

export default CounterStat;
