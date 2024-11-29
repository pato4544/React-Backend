import { ChangeEvent, useState } from "react";
import { IPersona } from "../../../types/IPersona";
import { POST } from "../../services/peticiones";

const PersonaForm = () => {

    const [values, setValues] = useState<IPersona>({ apellido: "", nombre: "" })

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {

        const { name, value } = e.target;

        setValues(prevValues => ({
            ...prevValues,
            [name]: value,
        }));

    };

    console.log(values)

    const handleSubmit = async () => {
        const res = await POST<IPersona>('http://localhost:3000/persona', values);
        console.log(res)
    }

    return (
        <div>
            <input type="text" onChange={handleChange} name='nombre' />
            <input type="text" onChange={handleChange} name='apellido' />
            <button onClick={handleSubmit}>CREAR PERSONA</button>
        </div>
    )
}

export default PersonaForm