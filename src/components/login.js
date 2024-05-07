import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const baseUrl = "https://localhost:44354/api/user/";

    const [mensagem, setMensagem] = useState('');
    const [user, setUser] = useState({
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
            const response = await axios.get(`${baseUrl}${user.email}/${user.password}`);
            if (response.data) {
                setMensagem('Login bem-sucedido!');
                // Redirecionar para a página de perfil ou realizar outras ações necessárias após o login
            } else {
                setMensagem('Email ou senha incorretos.');
            }
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            setMensagem('Erro ao fazer login. Por favor, tente novamente.');
        }
    };

    return (
        <div className="w-screen h-[80vh] overflow-auto mt-[10vh] flex justify-center bg-fixed bg-[url('https://i.imgur.com/c4MQ1MX.png')] bg-cover bg-no-repeat bg-center">
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <h1 className='text-black text-lg mb-4'>Login</h1>
                {mensagem && <p className="text-black mb-4">{mensagem}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                        <input type="email" id="email" name='email' onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="senha" className="block text-gray-700 text-sm font-bold mb-2">Senha</label>
                        <input type="password" id="senha" name='password' onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                    </div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;