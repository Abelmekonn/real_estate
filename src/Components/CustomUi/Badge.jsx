import React from "react";

function Badge({ item, index }) {
	return (
		<span
			key={index}
			className="bg-[#EAECE2] rounded-3xl text-[#073937] text-[12px] py-2 px-3"
		>
			{item}
		</span>
	);
}

export default Badge;
