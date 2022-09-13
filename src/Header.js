import {Navbar,Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
function Header() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="mr-auto navbar_wrapper">
                        <Link to="/add">Adicionar Produto</Link>
                        <Link to="/update">Atualizar Produtos</Link>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Registrar</Link>
                    </Nav>
                
            </Navbar>
        </div>
    )
}

export default Header