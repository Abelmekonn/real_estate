import React from "react";
import img5 from "../assets/Images/img5.jpg";
import NewHero from "../Components/Heros/NewHero";
import ChoiceUs from "../Components/ChoiceUs";
import choiceimg3 from "../assets/Images/choiceimg3.jpg";
import CallAction from "../Components/CallAction";

const listData = [
	"24 Hour Consultation",
	"Certification Team",
	"More Office Branch",
	"Best Work Result",
];

function Apartemen() {
	return (
		<div className="bg-[#F3ECDC]">
			<NewHero
				lowerText="Segera cari tempat yang ingin anda inap, atur jadwal anda, dan nikmati liburan anda"
				largeText="Cari Hotel atan Apartemen"
				page="LIST APARTEMEN"
				link={true}
				img={img5}
			/>
			<ChoiceUs
				title="Kami Memberikan Hasil Layanan Terbaik Untuk Penginapan Anda"
				img2={choiceimg3}
				bottomText="Grats Konsultasi"
				lastText="terseda Konsultasi terbak"
				rightTop="Lorem ipsum dolor sit amet consectetur adipsing elit"
				list={listData}
			/>
			<CallAction title1={true} button2={true} />
		</div>
	);
}

export default Apartemen;
