import { useState } from "react";
// import { getInsight } from "../apiMethods";

export default function Article({
  author,
  title,
  desc,
  url,
  image,
  published,
}) {
  const [res, setRes] = useState(null);
  const [modal, setModal] = useState(false);
  const [error, setError] = useState(false);
  const [load, setLoad] = useState(false);

  const toggleModal = () => {
    setModal(false);
    setLoad(false);
  };

  const toggleError = () => {
    setError(false);
  };

  const handbutton = () => {
    if (res === null) {
      setLoad(true);
    }

    async function getResponse() {
      try {
        const response = await fetch("http://localhost:3000/gpt-response", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt: desc }),
        });

        const data = await response.json();

        setRes(data.message);
        setModal(true);
        console.log(data);
      } catch (error) {
        console.error("Failed to use ChatGPT", error);
        setError(true);
        setLoad(false);
      }
    }

    getResponse();
  };

  return (
    <>
      <div className="bg-black p-2 h-175 rounded-md lg:w-100px  2xl:w-130">
        <section className="p-2 h-35 flex flex-col">
          {" "}
          <span className="font-bold  "> {title} </span>
          <span>{author}</span>
          <span className="">{published}</span>
        </section>
        <figure className="">
          <a
            href={url}
            className="w-full h-96 hover:grayscale-75 bg-cover"
            style={{
              backgroundImage: "url('/src/assets/planet-earth-background.jpg')",
            }}
          >
            <img
              className="h-80 w-120"
              src={image}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "src/assets/placeholder.png";
              }}
              alt={title}
            />
          </a>
        </figure>

        <article className="p-2  h-45 ">{desc}</article>

        <div className="">
          <button
            onClick={handbutton}
            className="h-10 rounded-lg w-18 p-2 bg-blue-700 hover:bg-blue-900"
          >
            {" "}
            Insights
          </button>
        </div>
      </div>

      {error && (
        <div className="fixed inset-0 bg-white/20 backdrop-blur-sm   z-50 flex flex-col items-center justify-center">
          <h1 className="text-bold animate-bounce text-red-700">
            Error, failure to load response!
          </h1>
          <br></br>
          <button
            onClick={toggleError}
            className="text-white bg-blue-700 rounded-lg p-2 hover:bg-gray-900"
          >
            {" "}
            Close{" "}
          </button>{" "}
        </div>
      )}

      {load && (
        <div className="fixed gap-4 inset-0 bg-white/20 backdrop-blur-sm backdrop-sepia-0S  z-50 flex items-center justify-center">
          <div className="bg-blue-700  size-5 w-6 h-6 animate-spin"> </div>
          <div className="">
            <h1 className="text-bold text-blue-700">Loading...</h1>
          </div>
        </div>
      )}

      {modal && (
        <div className="fixed inset-0 bg-white/20 backdrop-blur-sm   z-50 flex items-center justify-center">
          <div className=" p-4 text-black overflow-auto text-center bg-white rounded-lg w-108 h-fit ">
            <br></br>
            <p className="">{res}</p>
            <div>
              <br></br>{" "}
            </div>
            <button
              onClick={toggleModal}
              className="text-white bg-blue-700 rounded-lg p-2 hover:bg-gray-900"
            >
              {" "}
              Close{" "}
            </button>{" "}
          </div>
        </div>
      )}
    </>
  );
}
