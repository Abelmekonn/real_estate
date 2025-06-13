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
		<div className="bg-[#344E41] min-h-[209px] flex justify-center items-center">
			<div className="flex justify-between items-center w-9/10 md:w-8/10 mx-auto  text-[#F3ECDC]">
				<div className="">
					<div className="mb-2 text-2xl md:text-5xl font-bold">
						<Counter end={380} /> <sup>+</sup>
					</div>
					<div>Apartmen Terbaik</div>
				</div>
				<div>
					<div className="mb-2 text-2xl md:text-5xl font-bold">
						<Counter end={56} /> <sup>+</sup>
					</div>
					<div>Partner Kami</div>
				</div>
				<div>
					<div className="mb-2 text-2xl md:text-5xl font-bold">
						<Counter end={78000} suffix="K" /> <sup>+</sup>
					</div>
					<div>Customer Suka</div>
				</div>
				<div>
					<div className="mb-2 text-2xl md:text-5xl font-bold">
						<Counter end={15} suffix="th" /> <sup>+</sup>
					</div>
					<div>Pengalaman Terbaik</div>
				</div>
			</div>
		</div>
	);
}

export default CounterStat;
