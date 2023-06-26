import React from 'react'

function Tabela() {
    return (
        <div className='bg-indigo-50 ml-2 mt-20 rounded-md py-4 border-2 border-black'>
            <div className='text-center text-2xl font-medium'>Montante/Mes Ano</div>
            <table className="mt-5 mx-3 divide-y divide-gray-200">

                <thead className="bg-gray-200">
                    <tr>
                        <th></th>
                        <th className="">Jan</th>
                        <th className="px-1">Fev</th>
                        <th className="px-1">Mar</th>
                        <th className="px-1">Abr</th>
                        <th className="px-1">Mai</th>
                        <th className="px-1">Jun</th>
                        <th className="px-1">Jul</th>
                        <th className="px-1">Ago</th>
                        <th className="px-1">Set</th>
                        <th className="px-1">Out</th>
                        <th className="px-1">Nov</th>
                        <th className="px-1">Dez</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                        <td className="px-1">2020</td>
                        <td >1</td>
                        <td >2</td>
                        <td >3</td>
                        <td >4</td>
                        <td >5</td>
                        <td >6</td>
                        <td >7</td>
                        <td >8</td>
                        <td >9</td>
                        <td >10</td>
                        <td >11</td>
                        <td >12</td>
                    </tr>
                    <tr>
                        <td>2021</td>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                        <td>8</td>
                        <td>9</td>
                        <td>10</td>
                        <td>11</td>
                        <td>12</td>
                    </tr>
                    <tr>
                        <td>2022</td>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                        <td>8</td>
                        <td>9</td>
                        <td>10</td>
                        <td>11</td>
                        <td>12</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Tabela