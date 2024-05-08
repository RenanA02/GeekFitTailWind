import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListaUsuarios = (props) => {
    const baseUrl = "https://localhost:44354/api/tarefa/";
    const [data, setData] = useState([]);

    const pedidoPost = async () => {
        try {
            const response = await axios.get(baseUrl);
            setData(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        pedidoPost();
    }, []);

    const tipo = props.tipo
    const filteredData = data.filter((user) => user.tipo === tipo);

    return (
        <div className="bg-fixed bg-cover bg-no-repeat bg-center">
            <div>
                <ul className="mt-4">
                    {filteredData.map((user) => (
                            <li key={user.id} class="text-base relative 
                            flex w-[95%] gap-2.5 border-b-2 px-3 py-3.5 hover:border-gray-400">
                                <input type="checkbox" id={user.id} class="peer relative h-5 w-5 shrink-0 appearance-none" />
                                <label for={user.id} class="w-full  cursor-pointer font-medium text-white peer-checked:text-green-800 peer-checked:line-through">
                                  {user.name} - {user.descricao}
                                   </label>    
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ListaUsuarios;