// components/Newsletter.tsx
import { FiMail } from "react-icons/fi";

export default function Newsletter() {
  return (
    <section className=" py-10">
      <div className="container mx-auto px-6 max-w-10xl  bg-green-500">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left: Icon + Title */}
          <div className="flex items-center mb-4 md:mb-0">
            <div className="bg-orange-400 p-3 rounded-md mr-4">
              <FiMail className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Subscribe Our Newsletter
            </h2>
          </div>

          {/* Right: Input + Button */}
          <form className="flex w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email address ..."
              className="px-4 py-3 rounded-l-md w-full md:w-96 outline-none"
            />
            <button
              type="submit"
              className="bg-[#0f172a] text-white px-6 py-3 rounded-r-md hover:bg-[#1e293b] transition"
            >
              Subscribe →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
