import React, { useEffect, useState } from "react";
const loadingMsg = <p>Loading..</p>;

const DataFatch = () => {
  const [to, setTo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState("");

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/albums")
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
      <input
        type="text"
        placeholder="search..."
        className="search"
        onChange={(e) => setUser(e.target.value)}
      />
      <h1>{loading && loadingMsg}</h1>
      {to &&
        to
          .filter((todo) => todo.title.toLowerCase().includes(user))
          .map((todo) => {
            return (
              <div key={todo.id} className="container">
                <div className="row">
                  <div className="col">
                    <p>{todo.title}</p>
                    {/* <img src={todo.thumbnailUrl} alt="all" /> */}
                  </div>
                </div>
              </div>
            );
          })}
    </div>
  );
};

export default DataFatch;
