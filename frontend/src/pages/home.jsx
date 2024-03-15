import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import preview from "../assets/preview.png";
import { getRandomPrompt } from "../utils";

import { FormField, Loader } from "../components/home/index";
import { useState } from "react";
import { toast } from "react-toastify";

const Home = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    prompt: "",
    image: "",
  });

  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const generateImg = async () => {
    if (form.prompt) {
      try {
        setGeneratingImg(true);
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt: form.prompt }),
        };
        const response = await fetch(
          "http://localhost:3030/dalle/generate",
          options
        );
        const result = await response.json();

        setForm({ ...form, image: result.data });
      } catch (error) {
        toast(error.message);
      } finally {
        setGeneratingImg(false);
      }
    } else {
      toast("Please enter a prompt");
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  };

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    console.log(randomPrompt);

    setForm({ ...form, prompt: randomPrompt });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.prompt && form.image) {
      setLoading(true);

      try {
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        };
        const response = await fetch(
          "http://localhost:3030/post/create",
          options
        );
        console.log(form);

        const result = await response.json();
        console.log(result.data);
        navigate("/community");
      } catch (error) {
        console.log(error.message);
        toast(error.message);
      } finally {
        setLoading(false);
      }
    } else {
      toast("Please enter a prompt to generate image");
    }
  };

  return (
    <>
      <main className="bg-[#f9fafe] sm:p-8 px-4 py-8 w-full min-h-[100vh]">
        <section className="max-w-7xl max-auto">
          <div>
            <h1 className="font-extrabold text-[#222328] text-[30px]">
              Create
            </h1>
            <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">
              Create imaginative images through AI and share with your friends
            </p>
          </div>

          <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-5">
              <FormField
                labelName="Your username"
                type="text"
                name="name"
                placeholder="John Doe"
                value={form.name}
                handleChange={handleChange}
              />

              <FormField
                labelName="Prompt"
                type="text"
                name="prompt"
                placeholder="A Samurai riding a Horse on Mars, lomography."
                value={form.prompt}
                handleChange={handleChange}
                isSurpriseMe
                handleSurpriseMe={handleSurpriseMe}
              />
            </div>

            <div className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center mt-8">
              {form.image ? (
                <img
                  src={form.image}
                  alt={form.prompt}
                  className="w-ful h-full object-contain"
                />
              ) : (
                <img
                  src={preview}
                  alt="preview"
                  className="w-9/12 h-9/12 object-contain opacity-40"
                />
              )}

              {generatingImg && (
                <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
                  <Loader />
                </div>
              )}
            </div>

            <div className="mt-5 flex gap-5 w-full">
              <button
                type="button"
                onClick={generateImg}
                className="text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2 text-center"
              >
                {generatingImg ? "Generating image..." : "Generate"}
              </button>
            </div>

            <div className="mt-10">
              <p className="mt-2 text-[#666e75] text-[14px]">
                After you have created the image you want, you can share it with
                the community
              </p>
              <button className="mt-3 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-3 text-center">
                {loading ? "Sharing..." : "Share with the community"}
              </button>
            </div>
          </form>
        </section>
      </main>
    </>
  );
};

export default Home;
