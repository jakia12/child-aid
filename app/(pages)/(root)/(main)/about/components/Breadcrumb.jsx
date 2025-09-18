// components/Breadcrumb.jsx
import Link from "next/link";
import { FaSlash } from "react-icons/fa6";

export default function Breadcrumb({
  title,
  currentPage,
  bgImage = "/assets/img/breadcrumb/breadcrumb-bg.png",
}) {
  return (
    <section
      className="relative flex items-center justify-center h-64 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Shape 1 */}
      <div className="absolute top-10 left-10 z-10">
        <img
          src="/assets/img/breadcrumb/breadcrumb-shape-1.png"
          alt="shape1"
          className="w-16 h-16"
        />
      </div>

      {/* Shape 2 */}
      <div className="absolute bottom-10 right-10 z-10">
        <img
          src="/assets/img/breadcrumb/breadcrumb-shape-2.png"
          alt="shape2"
          className="w-16 h-16"
        />
      </div>

      {/* Content */}
      <div className="container relative z-20 text-center">
        <div className="flex justify-center items-center space-x-2 text-white mb-2">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <FaSlash className="text-sm opacity-70" />
          <span>{currentPage}</span>
        </div>
        <h3 className="text-3xl md:text-4xl font-bold text-white">{title}</h3>
      </div>
    </section>
  );
}
