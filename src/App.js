import './App.css';
import Profile from './Components/Profile';
import ImgEmpresa from './Img/Empresa.jpg'

const App = () => {
  return (
    <>
    <div className="container-fluid p-4 animate__animated animate__fadeInUp">
      <Profile name_company={"AmigoPeludos"} description={"LA empresa 'Amigos peludos' se se dedica a hacer tratamientos a las mascotas "} ImgEmpresa={ImgEmpresa}/>
    </div>
    </>
  );
}

export default App;
