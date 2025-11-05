import Footer from "../components/Footer";
import Navbar from "../components/Navigation";
import trendImage from "../assets/news-tracker-centerpiece-phone.svg";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-600 from-10% via-20% to-black bg-center" />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight drop-shadow-lg">
            Keep the world informed
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto">
            Empowering the next generation to recognize truth in a noisy world.
          </p>

          {/* Responsive SVG */}
          <img
            className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto mt-8"
            src={trendImage}
            alt="Trend tracker illustration"
          />
        </div>
      </section>

      {/* About / Mission Section */}
      <section className="bg-gradient-to-r from-gray-600 from-10% via-20% to-blue-900 text-white w-full min-h-screen flex items-center justify-center px-6 py-20">
        <article className="max-w-5xl text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400">
            Why It Matters
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed text-gray-200">
            In a world where propaganda is prevalent and information isn't
            always reliable, it's imperative that young people are equipped with
            the tools and knowledge needed to spot misinformation and
            manipulative media practices.
            <br />
            <br />
            News is a vital resource for understanding what's happening locally
            and globally, but many young people are losing faith due to poor
            journalism and sensationalism.
            <br />
            <br />
            <span className="font-medium text-gray-100">
              Informative News
            </span>{" "}
            provides a way for the younger generation to know exactly what
            they're reading.
          </p>
        </article>
      </section>

      <Footer />
    </>
  );
}
