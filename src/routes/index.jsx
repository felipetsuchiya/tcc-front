import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/home";
import Cadastro from "../pages/cadastro"
import Dashboard from "../pages/dashboard"
import Produtos from "../pages/produtos";
import CadastroProdutos from "../pages/cadastro/CadastroProdutos";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/cadastro" element={<Cadastro />}> 
                    <Route path="addprodutos" element={<CadastroProdutos />} />
                </Route>
                <Route path="/produtos" element={<Produtos />} />

            </Routes>
        </BrowserRouter>
    )
}

export default Router;