import { Container, TextContainer, InfosContainer, CodeItem } from "./styles";
import picture from "@src/assets/avatarMarcello.png";

export default function HomePage() {
  return (
    <Container data-aos="fade-up">
      <div className="gradiente">
        <img src="/assets/avatarMarcello.png" alt="Minha foto" />
      </div>
      <div>
        <TextContainer id="home">
          <h1>Marcello</h1>
          <h2>DEV FULLSTACK FRELANCER</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem data-aos="zoom-in">
            <span className="purple">Frameworks: </span> {"\u007B"}
            <div>
              FrontEnd: <span className="blue">NextJs,</span>
            </div>
            <div>
              BackEnd: <span className="blue">Java Spring Boot,</span>
            </div>
            <div>
              Mobile: <span className="blue">Flutter,</span>
            </div>
            <div>
              Cloud: <span className="blue">AWS || Vercel,</span>
            </div>
            {"\u007D"}
          </CodeItem>
          <CodeItem data-aos="zoom-in">
            <span className="purple">Skills: </span> {"\u007B"}
            <div>
              DesignPattern: <span className="blue">Factory,</span>
            </div>
            <div>
              Typescript: <span className="blue">True,</span>
            </div>
            <div>
              RestApi: <span className="blue">True,</span>
            </div>
            <div>
              SOLID: <span className="blue">True,</span>
            </div>
            <div>
              TestesAutomatizados: <span className="blue">True,</span>
            </div>
            {"\u007D"}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}
