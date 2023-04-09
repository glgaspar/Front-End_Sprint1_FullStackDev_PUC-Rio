import React from 'react';
import classes from './Contact.module.css'
import SimpleButton from '../../components/button/SimpleButton'

export default function Contact() {

  const handleSubmit = (event)=>{
    event.preventDefault()
    console.log(event)
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
          <input name='email'></input>
        </div>

        <div className={classes.formGroup}>
          <label htmlFor='telefone'>Telefone</label>
          <input name='telefone'></input>
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
