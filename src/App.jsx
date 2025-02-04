import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const result = await response.json();

        // Since the response is a single object, wrap it in an array to use map.
        setData([result]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    getData();
  }, []);

  return (
    <div>
      <ul>
        {data.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
