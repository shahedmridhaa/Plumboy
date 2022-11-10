import React from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const Updetrivew = () => {
  const data = useLoaderData();
  console.log(data._id);

  const handleChange = (event) => {
    event.preventDefault();

    const form = event.target;
    const message = form.message.value;
    const Ratings = form.ratings.value;

    const newReviw = {
      message: message,
      Ratings: Ratings,
    };

    console.log(newReviw);

    fetch(`https://plumbing-server.vercel.app/reviews/${data._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReviw),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Review updet succesfully");
          form.reset();
        }
      });
  };

  return (
    <div className="h-full bg-gradient-to-tl from-green-400 to-indigo-900 w-full py-16 px-4">
      <div className="flex flex-col items-center justify-center">
        <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
          <p
            tabIndex={0}
            aria-label="Login to your account"
            className="text-2xl font-extrabold leading-6 text-gray-800"
          >
            Updet Your Review
          </p>

          <div className="w-full flex items-center justify-between py-5">
            <hr className="w-full bg-gray-400" />
            <p className="text-base font-medium leading-4 px-2.5 text-gray-400">
              OR
            </p>
            <hr className="w-full bg-gray-400  " />
          </div>

          <form onSubmit={handleChange}>
            <div>
              <lable className="text-sm font-medium leading-none text-gray-800">
                Service name
              </lable>
              <input
                de
                aria-label=""
                type="text"
                name="service"
                defaultValue={data.service}
                readOnly
                className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              />
            </div>

            <div>
              <div>
                <lable className="text-sm font-medium leading-none text-gray-800 ,t-3">
                  Ratings
                </lable>
                <input
                  aria-label=""
                  defaultValue={data.Ratings}
                  max="5"
                  type="number"
                  name="ratings"
                  className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                />
              </div>
            </div>

            <div className="mt-6 w-full">
              <lable className="text-sm font-medium leading-none text-gray-800">
                Review
              </lable>
              <textarea
                row="5"
                cols="10"
                name="message"
                className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              />
            </div>
            <button
              type="submit"
              className="btn btn-outline-success btn-sm my-4"
            >
              submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Updetrivew;
