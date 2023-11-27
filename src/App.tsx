import './App.scss'
import firstImage from './assets/first-image.jpeg'
import hackingImage from './assets/hacking.jpeg'
import securityImage from './assets/security.jpeg'


function App() {

  return (
    <>
      <header />
      <main>
        <div className='section-1'>
          <h1>PROTEJA SUAS INFORMAÇÕES,<br />
            PROTEJA-SE.</h1>
          <h6>Descubra Como Manter Suas Informações Seguras e Sua Privacidade Intacta.
          </h6>
          <img className='first-image' src={firstImage}></img>
          <div className="content">
            <h3>
              SUA JORNADA PARA UMA VIDA ONLINE PROTEGIDA COMEÇA
              AQUI!
            </h3>
            <p>Bem-vindo à nossa Land Page dedicada à Segurança da Informação, onde a
              proteção dos seus dados não é apenas uma missão, mas uma aventura digital
              emocionante! </p>
            <p>Em um mundo conectado, onde cada clique é uma porta para o ciberespaço, a
              segurança da informação é a sua armadura virtual. Aqui, não vamos apenas falar
              sobre senhas e firewalls; vamos guiá-lo por um território cheio de dicas, truques e
              estratégias para garantir que sua presença online seja tão impenetrável quanto um
              castelo medieval.</p>
          </div>
        </div>
        <header />
        <div className='section-2'>
          <span className='description'>
            <p>Os ataques de segurança da
              informação são atividades maliciosas
              destinadas a comprometer a
              confidencialidade, integridade ou
              disponibilidade de dados e sistemas.
              Existem vários tipos de ataques, cada
              um visando explorar vulnerabilidades
              específicas.</p>
            <img src={hackingImage} alt="" />
          </span>
          <h3>
            ALGUNS TIPOS DE ATAQUES MAIS COMUNS
          </h3>
          <div className='content'>
            <p>PHISHING</p>
            <span>OS ATACANTES TENTAM ENGANAR OS USUÁRIOS PARA QUE REVELEM INFORMAÇÕES CONFIDENCIAIS, GERALMENTE
              POR MEIO DE E-MAILS OU MENSAGENS FALSAS QUE PARECEM LEGÍTIMAS.</span>
          </div>
          <div className='content'>
            <p>RANSOMWARE</p>
            <span>EMPRESAS E INDIVÍDUOS NO BRASIL TÊM SIDO ALVOS DE ATAQUES DE RANSOMWARE, NOS QUAIS OS DADOS SÃO
              CRIPTOGRAFADOS E OS ATACANTES EXIGEM RESGATE PARA LIBERAR O ACESSO.</span>
          </div>
          <div className='content'>
            <p>FRAUDES FINANCEIRAS ONLINE</p>
            <span>DADA A CRESCENTE POPULARIDADE DAS TRANSAÇÕES ONLINE E SERVIÇOS BANCÁRIOS PELA INTERNET, FRAUDES
              FINANCEIRAS, COMO ROUBO DE DADOS BANCÁRIOS, SÃO COMUNS.</span>
          </div>
          <div className='content'>
            <p>ATAQUES DE ENGENHARIA SOCIAL</p>
            <span>A MANIPULAÇÃO PSICOLÓGICA PARA OBTER INFORMAÇÕES CONFIDENCIAIS OU REALIZAR AÇÕES ESPECÍFICAS
              TAMBÉM É UM DESAFIO SIGNIFICATIVO NO BRASIL.</span>
          </div>
          <div className='content'>
            <p>ATAQUES A SISTEMAS DE PAGAMENTO ONLINE</p>
            <span>COM O AUMENTO DO COMÉRCIO ELETRÔNICO, SISTEMAS DE PAGAMENTO ONLINE PODEM SER ALVOS PARA ROUBO DE
              INFORMAÇÕES FINANCEIRAS.</span>
          </div>
        </div>
        <div className='section-3'>
          <header />
          <div className='content'>
            <div>
              <img src={securityImage} alt="" />
            </div>
            <div>
              <h3>COM O FOCO NA SUA
                SEGURANÇA,
                SELECIONAMOS
                ALGUMAS DICAS PARA
                TE AUXILIAR A SE
                PROTEGER.
              </h3>
            </div>
          </div>
          <header />
          <div className='content-info'>
            <div className='vertical-bar'></div>
            <div className='contain'>
              <p>SENHAS FORTES E ÚNICAS:<br />CRIA SENHAS QUE NINGUÉM VAI CONSEGUIR ADIVINHAR. NADA DE COISA FÁCIL,
                BELEZA?</p>
              <p>EVITE SOFTWARE NÃO AUTORIZADO:<br />NADA DE BAIXAR PROGRAMA DE LUGAR ESQUISITO, SACOU? SÓ DAS LOJAS
                OFICIAIS E SITES DE CONFIANÇA.</p>
              <p>MONITORAMENTO DE CONTA:<br />DE OLHO NAS CONTAS! VÊ SE NÃO TÁ ROLANDO NADA ESTRANHO, ESPECIALMENTE
                NAS BANCÁRIAS E E-MAILS.</p>
              <p>REDES WI-FI SEGURAS:<br />EVITA USAR WI-FI PÚBLICO PRA COISAS IMPORTANTES. SE PRECISAR, USA UMA
                CONEXÃO SEGURA OU, SE LIGA NESSA, UMA VPN.</p>
              <p>AUTENTICAÇÃO DE DOIS FATORES (2FA):
                <br />LIGA ESSE NEGÓCIO SEMPRE QUE DER. É TIPO UMA CAMADA A MAIS DE
                SEGURANÇA, PEDINDO UMA VERIFICAÇÃO EXTRA ALÉM DA SENHA.</p>
              <p>BLOQUEIO AUTOMÁTICO DE DISPOSITIVOS:<br />COLOCA OS APARELHOS PRA BLOQUEAR QUANDO NÃO TÁ USANDO. MAIS UMA
                CAMADA DE SEGURANÇA SE VOCÊ DER UMA ESQUECIDA.</p>
              <p>BACKUP REGULAR:<br />FAZ UM BACKUP DOS SEUS DADOS SEMPRE, MANO. SE DER ALGUM PROBLEMA TIPO
                RANSOMWARE, PELO MENOS TEM UMA CÓPIA GUARDADA.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
