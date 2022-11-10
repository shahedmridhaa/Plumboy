import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import { authContext } from "../../Context/Authprovider";
import { Helmet } from 'react-helmet'


const Rivew = () => {
  const {user} = useContext(authContext)
  const [rivews, setRivews] = useState([]);


  useEffect(() => {
   if(user?.email){
    fetch(`https://plumbing-server.vercel.app/reviews?email=${user?.email}`,{
      headers:{
        authorization: `Bearer ${localStorage.getItem('plumboy')}`
      }
    })
    .then((res) => {
      if(res.status === 401 || res.status === 403 ){
        toast.error('Unauthorize access');
      }
      return res.json();
    })
    .then((data) => setRivews(data));
}
}, [user?.email]);






  //    handledelete
  const handelDelete = (id) => {
    const agree = window.confirm(
      'Are you sure you want to delete this review' 
    );
    if (agree) {
      fetch(`https://plumbing-server.vercel.app/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success('Successfully Delete review!');
            const remaining = rivews.filter((odr) => odr._id !== id);
            setRivews(remaining);
          }
        });
    }
  };

  return (
    <div>
      
    <Helmet>
    <title>review</title>
   </Helmet>
      {rivews.length > 0 ? (
        <>
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-col text-center w-full mb-20">
                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
                  Your all reviews here
                </h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                  Which review you want to delete and modify you can do it
                </p>
              </div>
              <div className="lg:w-2/3 w-full mx-auto overflow-auto">
                <table className="table-auto w-full text-left whitespace-no-wrap">
                  <thead>
                    <tr>
                      <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                        Services Name
                      </th>
                      <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                        Review Messagae
                      </th>
                      <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                        Review *
                      </th>
                      <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                        Edit
                      </th>
                      <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br">
                        Delete
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {rivews?.map((e) => (
                      <tr key={e?._id}>
                        <td className="px-4 py-3">{e.service}</td>
                        <td className="px-4 py-3">
                          {e.message?.slice(0, 20)}...
                        </td>
                        <td className="px-4 py-3">{e?.Ratings}</td>
                        <td className="px-4 py-3 text-lg text-gray-900">
                          <Link to={`/reviews/${e._id}`}>
                            <AiFillEdit className="text-blue-700 hover:text-blue-500 text-xl" />
                          </Link>
                        </td>

                        <td className="w-10 text-center">
                          <button onClick={() => handelDelete(e._id)}>
                            <AiFillDelete className="text-red-700 hover:text-red-500 text-xl" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
                <p className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                  Total Reviews {rivews.length}
                </p>
                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Delete All
                </button>
              </div>
            </div>
          </section>
        </>
      ) : (
        <>
          <h2 className="text-4xl text-center text-slate-800 font-bold py-10">
            No Review were added
          </h2>
        </>
      )}
    </div>
  );
};

export default Rivew;
