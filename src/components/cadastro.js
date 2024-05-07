import React, { useState } from 'react';
import axios from 'axios';

const Cadastro = () => {
    const baseUrl = "https://localhost:44354/api/user/";

    const [mensagem, setMensagem] = useState('');
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const response = await axios.post(baseUrl, user);
            setMensagem('Usuário cadastrado com sucesso!');
            console.log(response.data);
        } catch (error) {
            console.error('Erro ao cadastrar usuário:', error);
            setMensagem('Erro ao cadastrar usuário. Por favor, tente novamente.');
        }
    };

    return (
        <div className="w-screen h-[80vh] overflow-auto mt-[10vh] flex justify-center bg-fixed bg-[url('https://i.imgur.com/c4MQ1MX.png')] bg-cover bg-no-repeat bg-center">
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <h1 className='text-black text-lg mb-4'>Cadastro</h1>
                {mensagem && <p className="text-black mb-4">{mensagem}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="nome" className="block text-gray-700 text-sm font-bold mb-2">Nome</label>
                        <input type="text" id="nome" name='name' onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                        <input type="email" id="email" name='email' onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="senha" className="block text-gray-700 text-sm font-bold mb-2">Senha</label>
                        <input type="password" id="senha" name='password' onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                    </div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Cadastrar</button>
                </form>
            </div>
        </div>
    );
};

export default Cadastro;