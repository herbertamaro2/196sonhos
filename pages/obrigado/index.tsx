import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../../components/footer'

export default function Obrigado() {
  return (
    <div className='page'>
      <Head>
        <title>PROJETO 1.9.6 - 1 PROCESSO - 9 ETAPAS - 6 VITÓRIAS</title>
        <meta name="description" content="Projeto 1.9.6" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className='thanks'>
          <div className='container'>
            <div className="row">
            <div className='col-12 col-md-5 text-left'>
                <div className="logo_block">
                  <a href="https://projeto196.com/"><Image src={'/logo.svg'} alt={'1.9.6 Sonhos'} className="logo"  priority width={200} height={132} /></a>
                </div>

                <h3>SUA INSCRIÇÃO NA LISTA DE ESPERA DA PRÓXIMA TURMA FOI CONFIRMADA COM SUCESSO!</h3>
                
                <h1>Assista ao vídeo abaixo para desbloquear uma AULA GRATUITA sobre empreendedorismo digital e ser avisado da próxima abertura do Projeto 1.9.6.</h1>
            </div>

            <div className='col-12 col-md-7 text-right'>
                <iframe className="video_iframe" width="100%"  height="600" src="https://www.youtube.com/embed/64OHhmIc0Bg"  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
                <button className="btn btn-success alert">
                    ENTRAR PARA O GRUPO EXCLUSIVO NO TELEGRAM
                </button>
            </div>            
        </div>
      </section>

        <section className='aviso'>
            <div className='container'>
            <div className='row'>
            <h3>AVISO</h3>
               <p>A aula gratuita sobre empreendedorismo digital, será liberada <strong>SOMENTE</strong> após os seguintes passos:</p>
                

                <div>
                    <ul>
                        <li>1. Responder 3 perguntinhas rápidas que eu acabei de enviar para o seu e-mail.</li>
                        <Image src={'/outlook.png'} width={160} height={140} alt="Outlook" />
                        <Image src={'/gmail.png'} width={119} height={98} alt="Gmail" />
                        <li>Entrar para a comunidade no Telegram apertando <Link href="/">aqui.</Link></li>
                    </ul>
                    
                </div>
            </div>
            </div>
        </section>
     
    <Footer />
    </div>
  )
}
