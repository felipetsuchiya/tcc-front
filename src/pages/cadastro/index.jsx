import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom'
import axios from 'axios';

function Cadastro() {

    return (
        <div className="pt-20">
            <div className="flex justify-evenly m-20">
                <Link className='border-2 p-5 rounded-lg shadow-lg border-black font-semibold' to="/cadastro/addhistorico"> Adicionar Historico de Vendas </Link>
                <Link className='border-2 p-5 rounded-lg shadow-lg border-black font-semibold' to="/cadastro/addprodutos"> Adicionar Produtos </Link>
            </div>

            <Outlet />
        </div>
    )
}

export default Cadastro;
