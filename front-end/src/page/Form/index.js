import React from 'react'

// Local imports
import './style.css'
import Image from '../../static/image/image-info.png'

function Form() {
  return (
    <div className='main'>

      {/* infomações */}
      <div className='container-info'>
        <div className='main-text'>
          <h1> Quer aprender como alcançar seus objetivos e sonhos partindo do zero, mesmo que esteja endividado?</h1>
          <p className='span-text'>A BMG faz isso se tornar realidade!</p>
          <div className='image-info'>
            <img className='image' src={Image} />
          </div>
        </div>
      </div>

      {/* formulario */}
      <div className='container-main-form'>
        <div className='text-info-inputs'>
          <h1>Cadastro de Infomações</h1>
          <p className='container-text'>Lhe pediremos algumas informações para que possamos lhe ajudar</p>
        </div>
        <form className='form-inputs'>
          <input className='inputs' type='text' placeholder='Nome Completo' />
          <input className='inputs' type='text' placeholder='E-mail' />
          <input className='inputs' type='text' placeholder='Contato' />
        </form>
        <button className='btn-submit'>Enviar</button>
      </div>
    </div>
  )
}

export default Form
