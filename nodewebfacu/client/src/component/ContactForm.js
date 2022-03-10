import React, {useState, useEffect} from 'react'

const ContactForm = (props) => {

    const initialFieldValues = {
        fullName: '',
        celPhone: '',
        email: '',
        address: ''
    }

    let [values, setValues] = useState(initialFieldValues)
    
    useEffect( () => {
        if(props.currentId == '') {
            setValues({
                ...initialFieldValues
            })
        } else {
            setValues({
                ...props.contactObjects[props.currentId]
            })
        }
    }, [props.currentId, props.contactObjects] )


    const handleInputChange = e => {
        let { name, value} = e.target
        
        setValues({
            ...values,
            [name]: value
        })
    }
    
    const handleFormSubmit = e => {
        e.preventDefault()
        props.addOrdit(values)
    }
    

    return (
        <form autoComplete="off" onSubmit={handleFormSubmit}>
        <div className="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input type="hidden" className="form-control" id="idlogin" name='idlogin' value={values.idlogin} onChange={handleInputChange}/>
            <input type="email" className="form-control" id="login" name='login' placeholder="Enter email" value={values.login} onChange={handleInputChange}/>
        </div>
        <div className="form-group">
            <label for="exampleInputPassword1">Nome</label>
            <input className="form-control" type="text" id="nome" name='nome' placeholder="Nome" value={values.nome} onChange={handleInputChange}/>
        </div>
        <div className="form-group">
            <label for="exampleInputPassword1">Sobrenome</label>
            <input className="form-control" type="text" id="sobrenome" name='sobrenome' placeholder="Sobrenome" value={values.sobrenome} onChange={handleInputChange}/>
        </div>
        <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="senha" name='senha' placeholder="Password" value={values.senha} onChange={handleInputChange}/>
        </div>
        
        <div className="form-group mt-2">
                <input type="submit" value={props.currentId == '' ? "Salvar" : "Atualizar"} className="btn btn-primary btn-block" />
            </div>
    </form>
    )
}

export default ContactForm