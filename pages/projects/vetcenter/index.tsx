import Banner from "@src/screens/Banner";
import Header from "@src/screens/Header";
import { ProjetoContainer } from "@src/styles/ProjectStyles";

export default function Vetcenter() {
  function handleRedirect(url: string) {
    window.open(url);
  }

  return (
    <ProjetoContainer>
      <Banner
        title="VetCenter"
        type="Web-sistem"
        imgUrl="/assets/home-vetcenter.png"
      />

      <main>
        <p>
          Utilize para entrar - login: administrador, senha: 12345678 <br></br>{" "}
          Este é um sistema de gerenciamento para clínicas veterinárias, onde o
          administrador controla o cadastro de proprietários, animais e
          veterinários, cria ordens de atendimento e administra os pagamentos. O
          veterinário, por sua vez, executa o atendimento, relaciona serviços,
          produtos e emite laudos sobre o animal. Somente o administrador tem
          acesso às informações financeiras, garantindo segurança e
          confidencialidade.
        </p>
        <button
          type="button"
          onClick={() =>
            handleRedirect("https://frontend-vetcenter.vercel.app/")
          }
        >
          <a>Ver projeto</a>
        </button>
      </main>
    </ProjetoContainer>
  );
}
