import { gzip } from "pako";
import generated from "./generated.json";

async function compressHttpRequest(payload) {
  return fetch("http://localhost:3001", {
    method: "POST",
    headers: {
      "Content-Encoding": "gzip",
      "Content-Type": "application/json",
    },
    body: gzip(JSON.stringify(payload)),
  });
}

compressHttpRequest(generated);

function App() {
  return <div></div>;
}

export default App;
