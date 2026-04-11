import { useEffect } from "react";
import axios from "axios";

function App() {

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/");
        console.log(res.data);
      } catch (err) {
        console.error("Error:", err);
      }
    };

    fetchData(); // 👈 THIS LINE IS MUST
  }, []);

  return (
    <div>
      <h1>MERN App Running</h1>
      <p>Check console (F12)</p>
    </div>
  );
}

export default App;