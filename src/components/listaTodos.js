import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListaUsuarios = () => {
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

    return (
        <div className="w-screen h-screen flex justify-center items-center bg-fixed bg-[url('https://i.imgur.com/c4MQ1MX.png')] bg-cover bg-no-repeat bg-center">
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <h1 className='text-black text-5xl'>Lista de Usuários</h1>
                <ul className="mt-4">
                    {data.map((user) => (
                        <li key={user.id} className="text-gray-700 text-base mb-2">
                            {user.name} - {user.descricao}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ListaUsuarios;