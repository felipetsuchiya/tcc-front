import React, {useState, useEffect} from 'react'
import Lista from './Lista'
import SearchBar from '../../components/searchbar';

function Produtos() {

    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const URL = 'http://localhost:3001'

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`${URL}/produtos?name=${searchTerm}`);
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchProducts();
    }, [searchTerm]);

    const handleSearch = (term) => {
        setSearchTerm(term);
    };
    return (
        <div>
            <SearchBar onSearch={handleSearch} />
            <Lista />
        </div>
    )
}

export default Produtos;