import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/albertshres")
  //     .then((Response) => Response.json())
  //     .then((data) => {
  //       setData(data);
  //     });
  // }, []);
  return (
    <div className="text-center m-4 bg-gray-500 p-4 text-white text-3xl">
      Github followers:{data.followers}
      <img src={data.avatar_url} alt="git pic" width={300} />
    </div>
  );
};

export default Github;
export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/albertshres");
  return response.json();
};
