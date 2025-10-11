// components/PageBanner.jsx

export default function PageBanner({ title }) {
  return (
    <section
      className="relative flex items-center justify-center h-64 bg-cover bg-center py-[170px] zndx mst"
      style={{
        backgroundImage: "url(/images/about/bg.png)", // static background
      }}
    >
      <div className="container relative z-20 text-center">
        <h3
          className="text-[4rem] md:text-4xl font-bold text-white"
          style={{ fontFamily: "Manrope,sans-serif" }}
        >
          {title}
        </h3>
      </div>
    </section>
  );
}
