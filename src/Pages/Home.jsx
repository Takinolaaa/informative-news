import Footer from "../components/Footer";
import Navbar from "../components/Navigation";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="bg-[url('/src/assets/planet-earth-background.jpg')] bg-cover bg-center flex items-center justify-center w-full h-screen text-white px-4">
        <h1 className="text-3xl sm:text-5xl font-bold text-center">
          Keep the world informed
        </h1>
      </div>

      <div className="bg-black w-full min-h-screen text-white flex items-center justify-center px-4 py-12">
        <article className="max-w-4xl text-center sm:text-left text-lg sm:text-xl leading-relaxed">
          <p>
            In a world where propaganda and information aren't always reliable,
            it is imperative that the people of tomorrow are well equipped with
            the tools and knowledge required to spot misinformation and bad
            faith news corporations who just want clicks and attention. News is
            a vital resource for understanding what's happening locally and
            globally — but many young people are losing faith because of poor
            journalism and manipulative companies. Informative News provides a
            way for the younger generation to know exactly what they're reading.
          </p>
        </article>
      </div>

      <Footer />
    </>
  );
}
