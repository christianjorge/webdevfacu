import React, { useEffect, useState } from 'react'
import ContactForm from './ContactForm'
import UserContactService from "../services/UserContactService";

const Contacts = () => {

    //Inicializa array contactObjects vazio, ignora o nome do array
    let [contactObjects, setContactObjects] = useState([])

    //Inicializa var currentId vazio
    let [currentId, setCurrentId] = useState('')
    
    //lista
    useEffect( () => {
        //Preenche a tabela de users
        UserContactService.getAll()
            .then(response => {
                setContactObjects(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    }, [] )
    
    //salvar e atualiza
    const addOrdit = obj => {
        console.log(currentId);
        console.log(obj);
        if (currentId == '') {
            UserContactService.create(obj)
                .then(response => {
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
        } else {
            UserContactService.update(obj.idlogin, obj)
                .then(response => {
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
        }
        window.location.reload();
    }

    const onDelete = key => {
        if( window.confirm('Você deseja mesmo efetuar essa ação?') ) {
            UserContactService.remove(key)
                .then(response => {
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
        }
    }
    return (
        <React.Fragment>

            <div className="jumbotron jumbotron-fluid text-center">
                <div className="container">
                    <h1 className="display-4">Cadastro de usuário</h1>
                    <p className="lead">Bem vindo ao cadastro de usuários.</p>
                </div>
            </div>

            <div className="row">
                <div className="col-md-5">
                    <ContactForm {...( {addOrdit, currentId, contactObjects} )} />
                </div>

                <div className="col-md-7">
                    <table className="table table-borderless table-stripped">
                        <thead className="thead-light"> 
                            <tr>
                                <th> Nome Completo </th>
                                <th> Login </th>
                                <th> Senha </th>
                                <th> Ações </th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                Object.keys(contactObjects).map( id => {
                                    return <tr key={id}>
                                        <td> {contactObjects[id].nome} {contactObjects[id].sobrenome}</td>
                                        <td> {contactObjects[id].login} </td>
                                        <td> *********** </td>

                                        <td>
                                            <a className="btn btn-primary" onClick={ () => {setCurrentId(id)} }>
                                                <i className="fas fa-pencil-alt"></i>
                                            </a>
                                            <a className="btn btn-danger" onClick={ () => onDelete(contactObjects[id].idlogin)}>
                                            <i className="far fa-trash-alt"></i>
                                            </a>
                                        </td>
                                    </tr>
                                    
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Contacts