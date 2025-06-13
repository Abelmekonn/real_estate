import React from "react";

function Button({ text, isGreen }) {
	return (
		<button
			className={`${isGreen ? "bg-[#588157] text-[#F3ECDC] hover:bg-[#344E41] hover:text-[#fdf1d4]" : "bg-[#f8eac9] text-[#588157] hover:bg-[#efe2c0] hover:text-[#344E41]"
				} px-5 md:px-7 py-3 rounded-4xl cursor-pointer transition-all duration-300`}
		>
			{text}
		</button>
	);
}

export default Button;
