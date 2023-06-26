import React from 'react';
import { AiFillFileAdd } from 'react-icons/ai'

function CadastroHistorico() {
    return (
        <div>
            <div className='text-center font-semibold text-3xl mt-10'>Cadastro de Historico</div>
            <div className='flex flex-col items-center border-2 border-slate-800 mx-64 p-10 rounded-lg mt-10'>
                <div className='text-center text-2xl font-bold'>Adicione um arquivo .csv</div>
                <div className='text-6xl'>
                    <AiFillFileAdd />
                </div>
                <div className='text-center mt-5'>
                    <input type="file" />
                </div>
            </div>
        </div>
    )
}

export default CadastroHistorico();