import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
function Header() {
    let user = JSON.parse(localStorage.getItem('user-info'))
    const navigate=useNavigate();
    function logOut()
    {
        localStorage.clear();
        navigate('/register')
    }
    return (
        <div>
            <Navbar bg="dark" variant="dark">

                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto navbar_wrapper">
                    {
                        localStorage.getItem('user-info') ?
                            <>
                                <Link to="/add">Adicionar Produto</Link>
                                <Link to="/update">Atualizar Produtos</Link>
                            </>
                            :
                            <>
                                <Link to="/login">Login</Link>
                                <Link to="/register">Registrar</Link>
                            </>
                    }
                </Nav>
                {localStorage.getItem('user-info')?
                <Nav>
                    <NavDropdown title={user && user.name}>
                        <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                :null}
            </Navbar>
        </div>
    )
}

export default Header