import React from 'react';
import classes from './Contact.module.css'
import SimpleButton from '../../components/button/SimpleButton'
import {APIPost} from '../../components/api/Api'

export default function Contact() {

  const handleSubmit = (event)=>{
    event.preventDefault()
    console.log(event)
    const data = {
      name:event.target.nome.value,
      email:event.target.email.value,
      tel:event.target.telefone.value,
      message:event.target.mensagem.value
    }
    console.log(data)
    APIPost('/contact', data)
  }
  
  return (
    <div className={classes.contactContainer}>
      <div className={classes.contacSideInfo}>
        <p>Contato</p>
      </div>
      <form className={classes.contactForm} onSubmit={e=>handleSubmit(e)}>
        <div className={classes.formGroup}>
          <label htmlFor='nome'>Nome</label>
          <input name='nome'></input>
        </div>

        <div className={classes.formGroup}>
          <label htmlFor='email'>E-mail</label>
          <input type='email' name='email' required></input>
        </div>

        <div className={classes.formGroup}>
          <label htmlFor='telefone'>Telefone</label>
          <input type='tel' name='telefone'></input>
        </div>

        <div className={classes.formGroup}>
          <label htmlFor='mensagem'>Mensagem</label>
          <textarea name='mensagem'></textarea>
        </div>
        <div className={classes.formBttn}><SimpleButton text={'Enviar'} type={'submit'} /></div>
      </form>
    </div>
  )
}
