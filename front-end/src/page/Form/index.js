import React from 'react'

// Local imports
import './style.css'
import Image from '../../static/image/image-info.png'

function Form() {
  return (
    <div className="main">

      {/* infomações */}
      <div className="info">
        <div className="text">
          <div>
            <h1> Quer aprender como alcançar seus objetivos e sonhos partindo do zero, mesmo que esteja endividado?</h1>
          </div>
          <div className='span-text'>
            <p>A BMG faz isso se tornar realidade!</p>
          </div>
          <div className="image-info">
            <img className='image' src={Image} alt="" />
          </div>
        </div>
      </div>

      {/* formulario */}
      <div className="form">
        <div className='text-info-inputs'>
          <div>
            <h1 className='text-form'>Cadastro de Infomações</h1>
          </div>
          <div className='container-text'>
            <p className=''>Lhe pediremos algumas informações para que possamos lhe ajudar</p>
          </div>
        </div>
        <form className="form-inputs">
          <input className='inputs' type="text" placeholder='Nome Completo' />
          <input className='inputs' type="text" placeholder='E-mail' />
          <input className='inputs' type="text" placeholder='Contato' />
        </form>
        <button className='btn-submit'>Enviar</button>
      </div>
    </div>
  )
}

export default Form
