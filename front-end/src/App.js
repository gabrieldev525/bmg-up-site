import React from 'react';



function App() {

  return (
    <>
    <h1> Wello World!</h1>
    
    <form>
      <label>
        Nome:
    <input type="text" name="name" required />
      </label>   
         
      <label>
        Email:
    <input type="Email" name="Email" required />
      </label>

      <label>
        Telefone:
    <input type="number" name="Telefone" required />
      </label>
    <input type="submit" value="Enviar" />
  </form>

    </>




  );
}



export default App;
