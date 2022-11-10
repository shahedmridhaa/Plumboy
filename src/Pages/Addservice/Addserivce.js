import React from "react";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

const Addserivce = () => {
  const handleAddService = (event) => {
    event.preventDefault();
    const form = event.target;
    const service = form.service.value;
    const price = form.taka.value;
    const email = form.email.value;
    const photoUrl = form.photoUrl.value;
    const date = form.date.value;
    const message = form.message.value;
    //   console.log( service, price, email, photoUrl, date, message);

    const addService = {
      name: service,
      price: price,
      image: photoUrl,
      description: message,
      date: date,
    };

    fetch("https://plumbing-server.vercel.app/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addService),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged){
          form.reset();
          toast.success("Successfully added service!");
        }
      });
  };

  return (
    <div className="container px-5 py-10 mx-auto">
      <Helmet>
        <title>add review</title>
      </Helmet>
      <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
        <div className="text-center py-10">
          <h1 className="text-lg font-bold ">Add Your Service Here</h1>
          <span>If you need any kind of service fillup all field</span>
        </div>
        <form onSubmit={handleAddService} className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <input
                className="w-full rounded-lg border p-3 text-sm"
                placeholder="Service Name"
                type="text"
                name="service"
                required
              />
            </div>
            <div>
              <input
                className="w-full rounded-lg border p-3 text-sm"
                placeholder="Price"
                type="number"
                name="taka"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <input
                className="w-full rounded-lg border p-3 text-sm"
                placeholder="Email address"
                type="email"
                name="email"
                required
              />
            </div>
            <div>
              <input
                className="w-full rounded-lg border p-3 text-sm"
                placeholder="photo url"
                type="text"
                name="photoUrl"
                required
              />
            </div>
            <div>
              <div className="datepicker relative form-floating mb-3 xl:w-96">
                <input
                  type="date"
                  className=" block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-600 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Select a date"
                  required
                  name="date"
                />
              </div>
            </div>
          </div>

          <div>
            <textarea
              className="w-full rounded-lg border p-3 text-sm"
              placeholder="Message"
              rows="8"
              name="message"
              required
            ></textarea>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-lg bg-red-600 hover:bg-black px-5 py-3 text-white sm:w-auto"
            >
              <span className="font-medium"> Add service </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addserivce;
