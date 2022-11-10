import React, { useEffect, useState } from "react";
import Rivewcard from "./Rivewcard";

const Rivewsection = ({ id, load }) => {
  console.log(id);
  const [rivew, setRivew] = useState([]);

  useEffect(() => {
    fetch(`https://plumbing-server.vercel.app/reviews/${id}`)
      .then((res) => res.json())
      .then((data) => setRivew(data));
  }, [id, load]);

  console.log(rivew);

  return (
    <div>
      <div>
        {rivew.map((r) => (
          <Rivewcard key={r._id} rivew={r}></Rivewcard>
        ))}
      </div>
    </div>
  );
};

export default Rivewsection;
