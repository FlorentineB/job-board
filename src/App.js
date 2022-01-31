import "./App.css";
import Header from "./Header";
import Job from "./Job";
import Footer from "./Footer";
import Title from "./Title";

function App() {
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="container">
        <Job
          borderColor="red"
          title="Full Time Sales Associate - Sydney Boutique"
          contractType="CDI"
          country="Australie"
          city="Sydney"
        />
        <Job
          borderColor="green"
          title="Agent de Sécurité - Pantin"
          contractType="CDI"
          country="France"
          city="Pantin"
        />
        <Job
          borderColor="yellow"
          title="Responsable d'Atelier (H/F)"
          contractType="CDI"
          country="France"
          city="Paris"
        />
        <Job
          borderColor="blue"
          title="Chef de Projets"
          contractType="CDD"
          country="France"
          city="Paris"
        />
        <Job
          borderColor="pink"
          title="Développeur React.js"
          contractType="CDI"
          country="France"
          city="Paris"
        />
        <Job
          borderColor="red"
          title="Sales Associate Stockholm"
          contractType="CDI"
          country="Suède"
          city="Stockholm"
        />
        <Job
          borderColor="green"
          title="Vendeur/se - Crans Montana"
          contractType="CDI"
          country="Suisse"
          city="Crans-Montana"
        />
        <Job
          borderColor="yellow"
          title="CRM & Data Quality Analyst"
          contractType="CDI"
          country="USA"
          city="New-York"
        />
        <Job
          borderColor="blue"
          title="Infirmier (H/F)"
          contractType="CDI"
          country="France"
          city="Pantin"
        />
      </div>
      <div className="footer">
        <Footer withwhat="React" where="Le Reacteur" by="Flo" />
      </div>
    </>
  );
}

export default App;
