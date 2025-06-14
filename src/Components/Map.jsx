import React from "react";
import contactimage from "../assets/Images/contactimg.jpg";

function Map() {
	return (
		<div className="w-9/10 md:w-8/10 mx-auto py-15">
			<div>
				<img src={contactimage} alt="" className="w-[1240px] h-[350px]" />
			</div>
		</div>
	);
}

export default Map;
