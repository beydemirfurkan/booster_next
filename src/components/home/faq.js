import React from "react";
import { Fragment } from 'react';
import { Disclosure, Transition } from "@headlessui/react";
import { FiChevronDown } from "react-icons/fi";

export default function faq() {
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
  ];

  return (
    <section className="relative pt-24 overflow-hidden pb-28 bg-blueGray-50">
      <div className="container px-4 mx-auto lg:px-32">
        <div className="mb-10 md:mb-16">
          <p className="pb-2 !text-sm text-center font-semibold uppercase tracking-px">
            merak ettikleriniz
          </p>
          <h2 className="mb-16 text-3xl font-bold leading-none text-center md:text-4xl xl:text-5xl font-heading tracking-px-n custom-title custom-shadow">
            FAQ
          </h2>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
          {faq.map((item, index) => {
            return (
              <Disclosure key={index} as="div">
                {({ open }) => (
                  <>
                    <div className="bg-[#232323] p-5 border-[#8f8d8d] border-2 rounded-2xl drop-shadow-[0_10px_35px_rgba(66,41,74,1)] w-full">
                      <Disclosure.Button className="flex items-center justify-between w-full gap-4">
                        <h3 classNbame="text-white text-lg font-semibold">
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
