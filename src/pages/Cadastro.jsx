import { Button, Form } from "react-bootstrap";
import './Cadastro.css';
import Footer from '../components/footer/footer';
function Cadastro() {
    return (
        <>
            <main className="form">
                <Form >
                    <Form.Group className="mb-3">
                        <Form.Label>Email: </Form.Label>
                        <Form.Control type="email" placeholder="Digite seu email" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>telefone: </Form.Label>
                        <Form.Control type="number" placeholder="Digite seu telefone" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>endereço: </Form.Label>
                        <Form.Control type="text" placeholder="Digite seu endereço" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Senha: </Form.Label>
                        <Form.Control type="password" placeholder="Digite sua senha:" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Cadastrar
                    </Button>
                </Form>
            </main>
            <Footer />
        </>

    )
}


export default Cadastro;