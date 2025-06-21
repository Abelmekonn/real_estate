import React from "react";

function Map({ location }) {
	return (
		<div className="space-y-3 hidden md:block">
			<h1 className="text-[#588157] text-[30px] md:text-[55px] md:text-center font-semibold  ">
				Location
			</h1>

			<iframe
				src={location}
				frameborder="0"
				className="w-[397px] h-[600px] md:h-[900px] border-8 border-white rounded-3xl"
			></iframe>
		</div>
	);
}

export default Map;
