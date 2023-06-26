import React, { useState } from 'react';
import axios from 'axios';
import { AiFillFileAdd } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';

function CadastroProdutos() {

    const [nome, setNome] = useState('');
    const [marca, setMarca] = useState('');
    const [descricao, setDescricao] = useState('');
    const [tamanho, setTamanho] = useState('');
    const [sabor, setSabor] = useState('');

    const URL = 'http://localhost:3001'
    const navigate = useNavigate();

    const createProduto = async () => {
        try {
            const newProduto = { nome, marca, descricao, tamanho, sabor };
            const response = await axios.post(`${URL}/produtos`, newProduto);
            console.log(response.data);
            navigate('/cadastro/addprodutos')
        } catch (error) {
            console.log(error)
        }
    }

    

    const handleNomeChange = (event) => {
        setNome(event.target.value);
    }
    const handleMarcaChange = (event) => {
        setMarca(event.target.value);
    }
    const handleDescricaoChange = (event) => {
        setDescricao(event.target.value);
    }
    const handleTamanhoChange = (event) => {
        setTamanho(event.target.value);
    }
    const handleSaborChange = (event) => {
        setSabor(event.target.value);
    }

    return (
        <div className='ml-64 mb-10'>
            <div className='text-center font-semibold text-3xl mt-10'>Cadastro de Produtos</div>
            <div className='flex flex-col items-center border-2 border-slate-800 mx-64 p-10 rounded-lg mt-10'>
                <div className='text-center text-2xl font-bold'>Adicione um arquivo .csv</div>
                <div className='text-6xl'>
                    <AiFillFileAdd />
                </div>
                <div className='text-center mt-5'>
                    <input type="file" />
                </div>
            </div>
            <div className='text-center mt-10 text-4xl font-semibold'>
                Ou adicione atraves do formulario
            </div>
            <div className='flex flex-col items-center space-y-5 mt-10'>
                <div className='space-x-10'>
                    <input className='border-2 p-3 text-xl border-black rounded-lg' type="text" value={nome} onChange={handleNomeChange} placeholder="Nome" />
                    <input className='border-2 p-3 text-xl border-black rounded-lg' type="text" value={marca} onChange={handleMarcaChange} placeholder="Marca" />
                </div>
                <div className='space-x-10'>
                    <input className='border-2 p-3 text-xl border-black rounded-lg' type="text" value={descricao} onChange={handleDescricaoChange} placeholder="Descricao" />
                    <input className='border-2 p-3 text-xl border-black rounded-lg' type="text" value={tamanho} onChange={handleTamanhoChange} placeholder="Tamanho" />
                </div>
                <div>
                    <input className='border-2 p-3 text-xl border-black rounded-lg' type="text" value={sabor} onChange={handleSaborChange} placeholder="Sabor" />
                </div>
                <button className='w-96 p-5 text-xl border-2 border-black rounded-md font-semibold' onClick={createProduto}>Criar Produto</button>
            </div>

        </div>
    )
}

export default CadastroProdutos;
