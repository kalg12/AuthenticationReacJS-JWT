import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
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
          <button type="submit" className="btn btn-primary" onClick={functionsOnClick} >Enviar</button>
        </form>
      </div>
    </>
  );
}

//Imprimir en consola los datos enviados del formulario
const imprimirResultados = () => {
  console.log(document.getElementById('exampleInputEmail1').value);
  console.log(document.getElementById('exampleInputPassword1').value);
}

//Haremos un fetch que mande los datos del formulario a la api y si es correcto el usuario y password nos mande un token e imprima en console.log si hubo exito o no
const validarUsuario = () => {
  fetch('http://localhost:4000/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user: document.getElementById('exampleInputEmail1').value,
      password: document.getElementById('exampleInputPassword1').value
    })
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
    .catch(err => console.log(err));
}

const functionsOnClick = (e) => {
  e.preventDefault();
  imprimirResultados();
  validarUsuario();
}

export default App;