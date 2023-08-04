import SectionTitle from "../SectionTitle";
import ServiceItem from "./ServiceItem";
import { Container } from "./styles";

export default function Services() {
  return (
    <Container id="services">
      <SectionTitle title="Serviços" />

      <section>
        <ServiceItem
          year="FrontEnd"
          title="NextJs, Typescript, TailwindCSS"
          description="Next.js é um framework web em JavaScript que acelera o desenvolvimento de sites e aplicativos modernos. Integrando o poderoso Tailwind CSS para estilização ágil e eficiente, o Next.js melhora o desempenho com a renderização do lado do servidor (SSR), sendo uma escolha poderosa para criar projetos web de alta qualidade."
        />
        <ServiceItem
          year="BackEnd"
          title="Spring Boot, MySQL, SOLID"
          description="Spring Boot é um framework Java que proporciona desenvolvimento ágil e produtivo. Sua configuração simplificada e autoconfiguração inteligente aceleram o processo de criação de aplicações web. Combinado com o MySQL, um banco de dados confiável e escalável, a dupla oferece uma base sólida para aplicações robustas e eficientes."
        />
        <ServiceItem
          year="Mobile"
          title="Flutter, GetX"
          description="Flutter é uma plataforma de desenvolvimento do Google para criar aplicativos nativos Android e iOS com um único código-base. Suas principais vantagens incluem desenvolvimento ágil com Hot Reload, interface de usuário expressiva com widgets personalizáveis, e performance nativa para uma boa experiência do usuário."
        />
      </section>
    </Container>
  );
}
