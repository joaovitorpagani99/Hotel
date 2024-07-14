import Footer from "../components/footer/footer";
import { Button, Form } from "react-bootstrap";

function Login() {
    return (
        <>
            <main className="form">
                <Form >
                    <Form.Group className="mb-3">
                        <Form.Label>Email: </Form.Label>
                        <Form.Control type="email" placeholder="Digite seu email" />
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

export default Login;