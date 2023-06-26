import { useEffect, useState } from 'react';
import DataGrid from '../../components/DataThings/DataGrid';


const parseCSV = (text) => {
    const result = {
        header: [],
        data: []
    };

    const [header, ...content] = text.split('\n');

    result.header = header.split(',');

    const maxCols = result.header.length;

    content.forEach((item) => {
        result.data.push(item.split(',').slice(0, maxCols));
    });

    return result;
};

function Home() {
    const [csv, setCsv] = useState(null);
    useEffect(() => {
        fetch('/dados.csv')
            .then((r) => r.text())
            .then((text) => {
                setCsv(parseCSV(text));
            });
    }, []);

    return (
        <div className='flex flex-col items-center pt-20 pl-64'>
            <h1 className='text-3xl'> Bem-vindo a YohoSystem </h1>
            <DataGrid csv={csv} />
        </div>
    )
}

export default Home;