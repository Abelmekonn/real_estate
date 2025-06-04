import React from "react";

function Button({ text, isGreen }) {
	return (
		<button
			className={`${
				isGreen ? "bg-[#588157] text-[#F3ECDC]" : "bg-[#F3ECDC] text-[#588157]"
			} px-5 md:px-7 py-3 rounded-4xl`}
		>
			{text}
		</button>
	);
}

export default Button;
