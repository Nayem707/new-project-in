import React, { useEffect, useState } from "react";
const loadingMsg = <p>Loading..</p>;
const DataFatch = () => {
  const [to, setTo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/photos")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setTo(data);
          setLoading(false);
        });
    }, 2000);
  }, []);

  return (
    <div>
      <h1>{loading && loadingMsg}</h1>
      {to &&
        to.map((todo) => {
          return (
            <div key={todo.id}>
              <p>{todo.title}</p>
              <img src={todo.thumbnailUrl} alt="all" />
            </div>
          );
        })}
    </div>
  );
};

export default DataFatch;
