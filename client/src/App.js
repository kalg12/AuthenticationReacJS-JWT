function App() {
  return (
    <>
      <div className="container">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Usuario</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <button type="submit" className="btn btn-primary" onClick={imprimirResultados} >Enviar</button>
        </form>
      </div>
    </>
  );
}

//Imprimir en consola los datos enviados del formulario
const imprimirResultados = (e) => {
  e.preventDefault();
  console.log(document.getElementById('exampleInputEmail1').value);
  console.log(document.getElementById('exampleInputPassword1').value);
}
export default App;