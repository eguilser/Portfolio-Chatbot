import axios from "axios";
import { useState } from "react";

function App() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [response, setResponse] = useState("");

    const sendData = () => {
        axios.post("http://127.0.0.1:8000/process-data", { name, age: parseInt(age) })
            .then((res) => {
                setResponse(res.data.message);
            })
            .catch((err) => {
                console.error("Error:", err);
            });
    };

    return (
        <div>
            <h1>Enviar Datos al Backend</h1>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ingresa tu nombre"
            />
            <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Ingresa tu edad"
            />
            <button onClick={sendData}>Enviar</button>
            <p>{response}</p>
        </div>
    );
}

export default App;
