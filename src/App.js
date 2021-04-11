import './App.css';
import './Components/Navbar/Navbar.css';
import N from './Components/Navbar/Navbar';
import P from "./Components/Profile/Profile";
import './Components/Profile/Profile.css';
import A from "./Components/About/About";
import "./Components/About/About.css";

function App() {
  const name='LOUAY'
  const handleName = fullname => alert(fullname);
  return (
    <div>
      <N />
      <div className="aboutme">
        <P fullname={name}
          bio="GO-MY-CODE"
          profession="web developer"
          handleName={handleName}>photo.png</P>
        <A fullname="Louay Fadhlaoui"
          location="Sousse,Tunisia"
           phone="+21652601602"
          email="louay.benz2016@gmail.com" dateOfBirth="1999/08/29"
          experience="2 Years"
          careerLevel="Mid-Level" />
      </div>
    </div>
  );
}

export default App;
