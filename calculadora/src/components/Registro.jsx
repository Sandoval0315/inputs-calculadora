import React, { useState } from "react";
import "./Registro.css";

const RegistroEstudiantes = () => {
    const [nombre, setNombre] = useState("");
    const [edad, setEdad] = useState("");
    const [carnet, setCarnet] = useState("");
    const [estudiantes, setEstudiantes] = useState([]);

    const agregarEstudiante = () => {
        if (nombre.trim() === "" || edad.trim() === "" || carnet.trim() === "") {
            alert("Todos los campos son obligatorios.");
            return;
        }

        const nuevoEstudiante = { nombre, edad, carnet };
        setEstudiantes([...estudiantes, nuevoEstudiante]);

        setNombre("");
        setEdad("");
        setCarnet("");
    };

    return (
        <div className="registro-container">
            <input
                type="text"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />
            <input
                type="number"
                placeholder="Edad"
                value={edad}
                onChange={(e) => setEdad(e.target.value)}
            />
            <input
                type="text"
                placeholder="Carnet"
                value={carnet}
                onChange={(e) => setCarnet(e.target.value)}
            />

            <button onClick={agregarEstudiante}>Agregar</button>

            <h2>Listado:</h2>
            <div className="listado">
                {estudiantes.length === 0 ? (
                    <p>No hay estudiantes registrados.</p>
                ) : (
                    estudiantes.map((est, index) => (
                        <div key={index} className="estudiante">
                            <strong>Nombre:</strong> {est.nombre} | <strong>Edad:</strong> {est.edad} | <strong>Carnet:</strong> {est.carnet}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default RegistroEstudiantes;
