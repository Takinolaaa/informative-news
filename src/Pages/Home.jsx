import Footer from "../components/Footer";
import Navbar from "../components/Navigation";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="bg-[url(src/assets/planet-earth-background.jpg)]  bg-cover flex w-full h-screen  text-white justify-center">
        <h1 className="mt-80 bold h-fit w-fit  ">Keep the world informed</h1>
      </div>
      <div className=" bg-black  w-full h-screen  text-white justify-center">
        <article className="flex justify-center">
          <p className="mt-70 bold text-3xl h-fit w-5/6  ">
            {" "}
            In a world, where propaganda and informational news isnt always
            reliable. It is imperative that the people of tommorrow are well
            epuipped with the tools and knowledge that is required to spot
            misinformation and bad faith news corporations who just want clicks
            and attention. News is a great resource for knowing what is going in
            the world whether it is local or global, and young people are losing
            faith because of bad journalist and companies. Informative news
            provides a way for the young generation to know exactly what they
            are reading.{" "}
          </p>
        </article>
      </div>

      <Footer />
    </>
  );
}
