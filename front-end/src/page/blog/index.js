import React from 'react'

// Local imports
import './style.css'
import Featured from '../../components/featured/Featured'

function Blog() {
  // const featured = [
  //   {
  //     title: 'A beautiful title to this article. and how the peoples can help in the own education',
  //     text: 'vem mais',
  //     image: require('../../static/image/destaque-01.png')
  //   },
  //   {
  //     title: 'A beautiful title to this article. and how the peoples can help in the own education',
  //     text: 'vem mais',
  //     image: require('../../static/image/destaque-02.png')
  //   },
  //   {
  //     title: 'A beautiful title to this article. and how the peoples can help in the own education',
  //     text: 'vem mais',
  //     image: require('../../static/image/destaque-03.png')
  //   },
  // ]


  return (
    <div className='main'>
      <div className="header">
        <ul>
          <li><a href='#'>Inicio</a></li>
          <li><a href='#'>Destaques</a></li>
          <li><a href='#'>Depoimentos</a></li>
        </ul>
      </div>
      <div className='featured-week'>
        <p className='title-container'>Destaques da semana</p>
        <div className='container-featured-main'>
          <img
            className='main-featured-image'
            src={require('../../static/image/destaque-01.png')} />
          <p className="title-featured">
            How to learn about financial education in a few hours?
          </p>
          <p className='description-featured'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="container-featured">
          <Featured
            image={require('../../static/image/destaque-02.png')}
            title=' A beautiful title to this article. and how the peoples can help in the own education'
            text='Ver mais' />

          <Featured
            image={require('../../static/image/destaque-03.png')}
            title=' A beautiful title to this article. and how the peoples can help in the own education'
            text='Ver mais' />

          <Featured
            image={require('../../static/image/destaque-04.png')}
            title=' A beautiful title to this article. and how the peoples can help in the own education'
            text='Ver mais' />

          <Featured
            image={require('../../static/image/destaque-05.png')}
            title=' A beautiful title to this article. and how the peoples can help in the own education'
            text='Ver mais' />
        </div>
      </div>
      <div className="container-featured-item-list-vertical">
        <p className='title-main-container'>Novas postagens</p>
        <div className="item-fetured-vertical">
          <Featured
            horizontal={false}
            imageVertical={false}
            image={require('../../static/image/destaque-vertical-01.png')}
            title=' A beautiful title to this article. and how the peoples can help in the own education'
            text='Ler artigo' />

          <Featured
            horizontal={false}
            imageVertical={false}
            image={require('../../static/image/destaque-vertical-02.png')}
            title=' A beautiful title to this article. and how the peoples can help in the own education'
            text='Ler artigo' />

          <Featured
            horizontal={false}
            imageVertical={false}
            image={require('../../static/image/destaque-vertical-03.png')}
            title=' A beautiful title to this article. and how the peoples can help in the own education'
            text='Ler artigo' />

          <Featured
            horizontal={false}
            imageVertical={false}
            image={require('../../static/image/destaque-vertical-04.png')}
            title=' A beautiful title to this article. and how the peoples can help in the own education'
            text='Ler artigo' />
        </div>
      </div>
      <div className="main-container-email">
        <div className="text-container">
          <h1>Quer se juntar a família BMG?</h1>
          <p>Nos informe seu email para que possamos está lhe enviando conteudos exclusivos</p>
        </div>
        <div className="container-form-email">
          <form>
            <input className='input' type='text' />
          </form>
          <button type='submit' className='btn-submit-email'>Enviar</button>
        </div>
      </div>

      <div className="item-fetured-vertical">
          <Featured
            horizontal={false}
            imageVertical={false}
            image={require('../../static/image/destaque-vertical-01.png')}
            title=' A beautiful title to this article. and how the peoples can help in the own education'
            text='Ler artigo' />

          <Featured
            horizontal={false}
            imageVertical={false}
            image={require('../../static/image/destaque-vertical-02.png')}
            title=' A beautiful title to this article. and how the peoples can help in the own education'
            text='Ler artigo' />

          <Featured
            horizontal={false}
            imageVertical={false}
            image={require('../../static/image/destaque-vertical-03.png')}
            title=' A beautiful title to this article. and how the peoples can help in the own education'
            text='Ler artigo' />

          <Featured
            horizontal={false}
            imageVertical={false}
            image={require('../../static/image/destaque-vertical-04.png')}
            title=' A beautiful title to this article. and how the peoples can help in the own education'
            text='Ler artigo' />
        </div>

        <div className="item-fetured-vertical">
          <Featured
            horizontal={false}
            imageVertical={false}
            image={require('../../static/image/destaque-vertical-01.png')}
            title=' A beautiful title to this article. and how the peoples can help in the own education'
            text='Ler artigo' />

          <Featured
            horizontal={false}
            imageVertical={false}
            image={require('../../static/image/destaque-vertical-02.png')}
            title=' A beautiful title to this article. and how the peoples can help in the own education'
            text='Ler artigo' />

          <Featured
            horizontal={false}
            imageVertical={false}
            image={require('../../static/image/destaque-vertical-03.png')}
            title=' A beautiful title to this article. and how the peoples can help in the own education'
            text='Ler artigo' />

          <Featured
            horizontal={false}
            imageVertical={false}
            image={require('../../static/image/destaque-vertical-04.png')}
            title=' A beautiful title to this article. and how the peoples can help in the own education'
            text='Ler artigo' />
        </div>
    </div>
  )
}

export default Blog