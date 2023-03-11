import { Container } from "react-bootstrap";

function Home() {
  return (
    <Container className="text-center">
      <h1 className="pt-3">
        Bienvenidos a <span className="fw-bold">Gatuno</span>      
      </h1>
      <h5 className="pt-3"> 
      El Hostal de Gatos más lindo de la ciudad
      </h5>
      <img src="https://img.freepik.com/vector-gratis/fondo-plano-celebracion-dia-internacional-gato_23-2149509389.jpg?w=740&t=st=1678550147~exp=1678550747~hmac=a0b0772e9f004aab4c3b6ef3669ea944eb8c52c3e948a6512e5419a81fcfbb8b" alt="" />
    </Container>
  );
}

export default Home;