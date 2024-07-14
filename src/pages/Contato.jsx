import React, { useState } from 'react';
import './Contato.css';
import { Alert } from "react-bootstrap";
import { useForm } from 'react-hook-form';
import Footer from '../components/footer/footer';
function Contato() {
    const [showAlert, setShowAlert] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    function salvar(data) {
        console.log(data);
        setShowAlert(true);
    };

    return (
        <>
            <main className='containerPrincipalContato'>
                <section className='ContainerSection'>
                    {showAlert && (
                        <Alert className="align-self-auto" variant="success">
                            Cadastrado com sucesso!
                        </Alert>
                    )}
                    <form className='containerContato' onSubmit={handleSubmit(salvar)}>
                        <label htmlFor="nome">Nome:</label>
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            className="form-control"
                            {...register("nome", { required: true, maxLength: 200 })}
                        />
                        {errors.nome && <small className="invalid">O Nome é inválido!</small>}

                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control"
                            {...register("email", { required: true, maxLength: 200 })}

                        />
                        {errors.email && <small className="invalid">O Email é inválido!</small>}

                        <label htmlFor="mensagem">Mensagem:</label>
                        <textarea
                            id="mensagem"
                            name="mensagem"
                            className="form-control"
                            {...register("mensagem", { required: true, maxLength: 200 })}

                        ></textarea>
                        {errors.mensagem && <small className="invalid"> A mensagem é inválido!</small>}

                        <button className='botaoEnviar' type="submit">Enviar</button>
                    </form>
                </section>
            </main >
            <Footer />
        </>
    )
}

export default Contato;