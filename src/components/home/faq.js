import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";


export default function faq() {
  return (
      <section class="relative pt-24 pb-28 bg-blueGray-50 overflow-hidden">
          <div class="container px-4 md:px-8 mx-auto">
            <div class="mb-10 md:mb-16">
              <p class="pb-2 !text-sm text-center font-semibold uppercase tracking-px">merak ettikleriniz</p>
              <h2 class="mb-16 text-3xl md:text-4xl xl:text-5xl text-center font-bold font-heading tracking-px-n leading-none custom-title">FAQ</h2>
            </div>
            <div class="grid sm:grid-cols-2 gap-4 md:gap-8">
            {/* Accordion Item */}
                <div class="bg-[#232323] p-5 border-[#8f8d8d] border-2 rounded-2xl drop-shadow-[0_10px_35px_rgba(66,41,74,1)]">
                  <div class="flex justify-between items-center gap-4">
                    <h3 class="text-white text-lg font-semibold">How does the product work?</h3>
                    <span class="w-8 h-8 inline-flex justify-center items-center shrink-0 bg-gray-300 text-gray-500 rounded-full">
                      <FiChevronDown/>
                    </span>
                  </div>
                  <p class="text-gray-500 pt-5">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
                </div>
            {/* END Accordion Item */}
            </div>
          </div>
      </section>
  )
}
