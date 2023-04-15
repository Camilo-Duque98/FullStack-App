import { useEffect } from "react";
import { useState } from "react";
import Layout from "../../components/Layout";
import { task } from "../../task";
import Card from "../../components/Card";

const Home = () => {
  console.log([1, 2, 3].length);
  const [data, useData] = useState(task);
  return (
    <div>
      <Layout>
        <h1>Tareas</h1>
        {data.length > 0 ? (
          data.map((n) => (
            <div className="m-4" key={n.id}>
              <Card id={n.id} title={n.title} />
            </div>
          ))
        ) : (
          <div>not data</div>
        )}
      </Layout>
    </div>
  );
};
export default Home;
