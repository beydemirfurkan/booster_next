import React from "react";
import {Fragment} from 'react';
import {Disclosure, Transition} from "@headlessui/react";
import {FiChevronDown} from "react-icons/fi";

const faq = [
	{
		question: "How does the product work?",
		answer:
			"This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.",
	},
	{
		question: "How does the product work?",
		answer:
			"This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.",
	},
	{
		question: "How does the product work?",
		answer:
			"This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.",
	},
	{
		question: "How does the product work?",
		answer:
			"This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.",
	},
	{
		question: "How does the product work?",
		answer:
			"This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.",
	},
];

export default function Faq() {
	return (
		<section className="relative h-screen pt-40 overflow-hidden pb-28 bg-blueGray-50" style={{
			backgroundImage: "url('/images/faq/bg.png')",
			backgroundRepeat: "no-repeat",
			backgroundPosition: "center",
			backgroundSize: "cover"

		}}>
			<div className="container h-full px-4 mx-auto lg:px-32">
				<div className="mb-10 text-center md:mb-16">
					<h2 className="text-3xl font-bold leading-none text-center md:text-4xl xl:text-5xl font-heading tracking-px-n custom-title custom-shadow">
						FAQ
					</h2>
					<p className='py-3'>
						We have the best boosters available in the industry <br/> ready to take your game to the next
						level.
					</p>
				</div>

				<div className="grid w-full grid-cols-1 gap-6 mx-auto lg:max-w-lg">
					{faq.map((item, index) => {
						return (
							<Disclosure key={index} as="div">
								{({open}) => (
									<>
										<div
											className="bg-[#232323] p-5 border-[#8f8d8d] border-2 rounded-2xl drop-shadow-[0_10px_35px_rgba(66,41,74,1)] w-full">
											<Disclosure.Button
												className="flex items-center justify-between w-full gap-4">
												<h3 className="text-white text-lg font-semibold">
													{item.question}
												</h3>
												<span className="text-2xl">
                          <FiChevronDown
							  className={open ? "rotate-180 transform" : ""}
						  />
                        </span>
											</Disclosure.Button>
											<Transition
												show={open}
												enter="transition duration-100 ease-out"
												enterFrom="transform scale-95 opacity-0"
												enterTo="transform scale-100 opacity-100"
												leave="transition duration-75 ease-out"
												leaveFrom="transform scale-100 opacity-100"
												leaveTo="transform scale-95 opacity-0"
											>
												<Disclosure.Panel as="p" className='pt-5 text-gray-500 !text-sm'>
													{item.answer}
												</Disclosure.Panel>
											</Transition>

										</div>
									</>
								)}
							</Disclosure>
						);
					})}
				</div>
			</div>
		</section>
	);
}
