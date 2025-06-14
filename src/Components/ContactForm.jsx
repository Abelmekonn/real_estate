import React from "react";
import Button from "./CustomUi/Button";
import { FaMap } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

function ContactForm() {
	return (
		<div className="w-9/10 md:w-8/10 mx-auto py-10 flex  items-center gap-10 justify-between">
			<div className="w-[49%] bg-[#F9F9F9] p-10 rounded-3xl shadow-xl flex flex-col gap-5 ">
				<h1 className="text-[45px] font-semibold">Contact Us</h1>
				<p className="text-[#6E6E6E] text-[18px] ">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</p>
				<form action="" className="flex flex-col gap-5 text-[17px]">
					<div className="md:flex justify-between gap-5 ">
						<div className="flex flex-col gap-2">
							<label htmlFor="name" className="px-2">
								Name
							</label>
							<input
								className="bg-[#F1F1F1] border-none rounded-3xl px-5 py-3 "
								placeholder="Enter your name"
								type="text"
								id="name"
								name="name"
								required
							/>
						</div>
						<div className="flex flex-col gap-2">
							<label htmlFor="lastName" className="px-2">
								Last Name
							</label>
							<input
								type="text"
								id="lastName"
								name="lastName"
								placeholder="Enter your last name"
								className="bg-[#F1F1F1] border-none rounded-3xl px-5 py-3 "
								required
							/>
						</div>
					</div>
					<div className="md:flex justify-between gap-5">
						<div className="flex flex-col gap-2">
							<label htmlFor="email" className="px-2">
								Email Address
							</label>
							<input
								type="email"
								id="email"
								name="email"
								placeholder="Enter your email"
								required
								className="bg-[#F1F1F1] border-none rounded-3xl px-5 py-3 "
							/>
						</div>
						<div className="flex flex-col gap-2">
							<label htmlFor="subject" className="px-2">
								Subject
							</label>
							<input
								type="text"
								id="subject"
								name="subject"
								placeholder="Enter subject"
								required
								className="bg-[#F1F1F1] border-none rounded-3xl px-5 py-3 "
							/>
						</div>
					</div>
					<div className="flex flex-col gap-2">
						<label htmlFor="message" className="px-2">
							Message
						</label>
						<textarea
							id="message"
							name="message"
							rows="4"
							placeholder="Enter your message"
							className="bg-[#F1F1F1] border-none rounded-3xl px-5 py-3 "
							required
						/>
					</div>
					<Button text="Send Message" isGreen={true} />
				</form>
			</div>
			<div className="w-[49%] flex flex-col gap-5 p-10  ">
				<p className="text-[15px] text-[#A3B18A]">TETEB BERSAMA KAMI</p>
				<h2 className="font-bold text-[30px] md:text-[45px]">Hubungi kami</h2>
				<p className="text-[#6E6E6E] text-[18px]">
					Jargan ragu untuk meminta konsultasi atau bertanya lansug saja hubungi
					kami
				</p>
				<div className="flex flex-col gap-5 ">
					<div>
						<div className="flex items-center gap-2">
							<FaMap className="text-[35px] text-[#A3B18A]" />
							<h3 className="font-semibold text-[21px]">Tempai kami</h3>
						</div>
						<p className="text-[18px] text-[#6E6E6E] pl-10">
							Jakarta,Indonisia
						</p>
					</div>
					<div>
						<div className="flex items-center gap-2">
							<MdEmail className="text-[35px] text-[#A3B18A]" />
							<h3 className="font-semibold text-[21px]">Email Address</h3>
						</div>
						<p className="text-[18px] text-[#6E6E6E] pl-10">Hello@gmail.com</p>
					</div>
					<div>
						<div className="flex items-center gap-2">
							<BsFillTelephoneFill className="text-[35px] text-[#A3B18A]" />
							<h3 className="font-semibold text-[21px]">Telephone</h3>
						</div>

						<p className="text-[18px] text-[#6E6E6E] pl-10">(+62)123456789</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ContactForm;
