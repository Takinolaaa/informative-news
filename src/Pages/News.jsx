import Articles from "../components/Articles";
import Footer from "../components/Footer";
import Navbar from "../components/Navigation";

export default function News() {
  return (
    <>
      <Navbar />
      <h1 className="p-4 text-center mb-10">Look at what's trending</h1>
      <div className="flex justify-center">
        <Articles />
      </div>

      <Footer />
    </>
  );
}
