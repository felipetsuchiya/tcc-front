import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AiFillDelete } from 'react-icons/ai'
import EditItemModal from '../../../components/editmodal/index';

function Lista() {

    const [produtos, setProdutos] = useState([]);


    const URL = 'http://localhost:3001'

    const fetchProdutos = async () => {
        try {
            const response = await axios.get(`${URL}/produtos`);
            console.log(response.data)
            setProdutos(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const deleteProduto = async (prodId) => {
        try {
            await axios.delete(`${URL}/produtos/${prodId}`); // Substitua pelo endpoint correto do seu backend
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
        fetchProdutos()
        }, 5000)
        return () => clearInterval(interval);
    }, [])

    const navigate = useNavigate();

    return (
        <div className='pt-20 flex justify-center ml-64'>
            <table className='w-1/2 m-10 text-sm text-left text-gray-500 dark:text-gray-400'>
                <thead className='text-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                    <tr className='space-x-10'>
                        <th>Nome</th>
                        <th>Marca</th>
                        <th>Descricao</th>
                        <th>Tamanho</th>
                        <th>Sabor</th>
                        <th>Detalhes</th>
                        <th>Opcoes</th>
                    </tr>
                </thead>
                <tbody className='text-base'>
                    {produtos.map((prod) => (
                        <tr key={prod.id}>
                            <td>{prod.nome}</td>
                            <td>{prod.marca}</td>
                            <td>{prod.descricao}</td>
                            <td>{prod.tamanho}</td>
                            <td>{prod.sabor}</td>
                            <td>
                                <a className='text-cyan-700 font-semibold underline cursor-pointer'
                                    onClick={() => {
                                        navigate(`/produtos/${prod.id}`)
                                    }}>Ver detalhes</a>
                            </td>
                            <td className='flex'>
                                <EditItemModal item={prod} />
                                <button className='text-red-600' onClick={() => deleteProduto(prod.id)}><AiFillDelete /></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Lista;