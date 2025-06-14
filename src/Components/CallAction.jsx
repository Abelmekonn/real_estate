import React from "react";
import Button from "./CustomUi/Button";
import backgroundImage1 from "../assets/Images/callbg1.jpg";

function CallAction({ title1, title2, button1, button2 }) {
	return (
		<div className="py-15">
			<div
				className="w-9/10 md:w-8/10 mx-auto py-10  flex flex-col items-center pt-5"
				style={{
					backgroundImage: `linear-gradient(90deg, #344E41 0%, rgba(0, 0, 0, 0.11) 100%),
 url(${backgroundImage1})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					width: "100%",
					height: "100%",
				}}
			>
				<div className=" w-[60%] flex flex-col items-center gap-10">
					{title1 && (
						<h1 className=" text-[35px] md:text-[55px] text-[#F3ECDC] font-bold text-center pt-10">
							Tempati Apartemen Terbaik Sesuai Impian Anda
						</h1>
					)}
					{title2 && (
						<h1 className="text-[35px] md:text-[55px] text-[#F3ECDC] font-bold text-center pt-10">
							Lets Make Over Your Interior Design Today
						</h1>
					)}
					<p className="text-[18px] text-[#FFFFFFBF]">
						Tersedia banyak sekali apartemen terbaik yang slap anda tempati
					</p>
					{button1 && <Button text="GET STARTED" isGreen={true} />}
					{button2 && <Button text="LIHAT SELENGKAPNYA" isGreen={true} />}
				</div>
			</div>
		</div>
	);
}

export default CallAction;
