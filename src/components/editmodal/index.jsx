import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import { AiFillEdit } from 'react-icons/ai'

const EditItemModal = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [nome, setNome] = useState(item.nome);
    const [marca, setMarca] = useState(item.marca);
    const [descricao, setDescricao] = useState(item.descricao);
    const [tamanho, setTamanho] = useState(item.tamanho);
    const [sabor, setSabor] = useState(item.sabor);

    const URL = 'http://localhost:3001'

    const handleOpenModal = () => {
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    const handleNomeChange = (event) => {
        console.log(event.target.value)
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

    const putProduto = async (prodId) => {
        try {
            const newData = { nome, marca, descricao, tamanho, sabor }
            await axios.put(`${URL}/produtos/${prodId}`, newData);
            setIsOpen(false);
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <div className='pt-2'>
            <button className='text-yellow-600' onClick={handleOpenModal}><AiFillEdit /></button>
            <Modal isOpen={isOpen} onRequestClose={handleCloseModal}>
                <h2>Editar Produto</h2>
                <div className='flex flex-col items-center space-y-5'>
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
                    <button className='w-96 p-5 text-xl border-2 border-black rounded-md font-semibold' onClick={() => putProduto(item.id)}>Atualizar Produto</button>
                    <button onClick={handleCloseModal}>Cancelar</button>
                </div>
            </Modal>
        </div>
    );
};

export default EditItemModal;
