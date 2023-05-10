import React from "react";
import { useParams } from "react-router-dom";

const Productpage = () => {
  const params = useParams();
  const { id } = params;
  console.log(id);
  return (
    <section>
      <div>
        <h1>{id}</h1>
      </div>
    </section>
  );
};

export default Productpage;
