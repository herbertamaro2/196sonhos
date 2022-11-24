import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import {IoMdClose } from 'react-icons/io';
import {ImCheckmark} from 'react-icons/im';
import Footer from '../components/footer';
import Link from 'next/link';

export default function Home() {
  const router = useRouter()
  const [nome, setNome] = useState(null);
  const [email, setEmail] = useState(null);
  const [text_submit, setTextSubmit] = useState('ENTRAR PARA LISTA DE ESPERA');
  const [loader, setLoader] = useState(true);
  const [scrolled, setScrolled] = React.useState(false);


  const handleScroll = () => {
      const offset = window.scrollY;

      if (offset > 200) {
          setScrolled(true);
      }
      else {
          setScrolled(false);
      }
  }
  useEffect(() => {
   
    setTimeout(() => {
      setLoader(false);
    }, 4000);
      window.addEventListener('scroll', handleScroll)
  })

  const scroll2El = elID => {
    window.scrollTo({
      top: document.getElementById(elID).offsetTop - 10,
      behavior: 'smooth',
    });
  };


  return (
    <div className='page'>
        <div className={loader ? 'preloader show' : 'preloader hide'}>
        <div className="stage">
            <div className="box bounce-7">
            <Image src={'/logo.svg'} alt={'1.9.6 Sonhos'} className="logo"  priority width={200} height={132} />
            </div>
        </div>
        </div>
      <Head>
        <title>PROJETO 1.9.6 - 1 PROCESSO - 9 ETAPAS - 6 VITÓRIAS</title>
        <meta name="description" content="Projeto 1.9.6" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className='header' id="header" style={{ backgroundImage : "url('/196sonhos.jpg')" }}>
          <div className='container'>
            <div className='col-12 col-md-8 base-top'>
                <div className="logo_block">
                  <Image src={'/logo.svg'} alt={'1.9.6 Sonhos'} className="logo"  priority width={200} height={132} />
                </div>

                <h3>Infelizmente as vagas para o Projeto 1.9.6 estão fechadas no momento, mas você ainda pode…</h3>
                
                <h1>Aprender o Único Caminho para Criar Negócios Milionários e Lucrativos pela Internet.</h1>

                <div className="base_form">
                    <p>Basta preencher com seus dados abaixo e você terá prioridade e condições exclusivas na próxima turma do Projeto 196, o meu treinamento mais completo até hoje.</p>
                    
                    
                      <label>Seu nome:</label>
                      <input type="text" className="form-control" name="nome" placeholder='Digite seu nome'onChange={setNome} />
                      <label>Seu email:</label>
                      <input type="text" className="form-control" name="email" placeholder='Digite seu melhor email' onChange={setEmail}/>
                      <button type="submit" className="btn btn-success w-100" onClick={function() { router.push('/obrigado'); setTextSubmit('Carregando...') }}>{text_submit}</button>
                </div>
            </div>
          </div>
      </header>

      <section  className="course">
            <div className="container">
                <div className="cont row">
                  <div className="col-12 text-center">
                  <h2>O PROJETO 1.9.6</h2>
                  </div>
                  <div className="col">
                      <h4>PARA QUEM NÃO É O PROJETO 1.9.6?</h4>
                      <ul>
                          <li><IoMdClose className="no" /> Para quem acha que não precisa do digital para potencializar seu negócio.</li>
                          <li><IoMdClose className="no" /> Para quem não tem disposição para aplicar a metodologia ensinada.</li>
                          <li><IoMdClose className="no" /> Para quem está acomodado com seus resultados atuais e não quer se esforçar para melhorar.</li>
                      </ul>
                  </div>

                  <div className="col">
                       <h4>PARA QUEM É O PROJETO 1.9.6?</h4>
                       <ul>
                          <li><ImCheckmark className="yes" /> Para quem está cansado de ver outras pessoas ganhando dinheiro com o mercado digital e não vê a hora de começar a utilizar a internet para começar a vender ou aumentar suas vendas.</li>
                          <li><ImCheckmark className="yes" /> Para quem já é empreendedor em um negócio físico e quer potencializar seus produtos ou serviços através do digital.</li>
                          <li><ImCheckmark className="yes" /> Quem aspira alcançar a liberdade financeira, geográfica e de tempo através da internet mas não faz ideia de qual caminho seguir para atingir </li>
                        </ul>       
                  </div>
                </div>
            </div>     
      </section>

      <section className="about">
        <div className='container'>
          <div className="row">
            <div className='col-12 col-md-6'>
              <h2>CONHEÇA O SEU MENTOR</h2>
              <h1>ANDERSON DIAS</h1>
              <p>
              Anderson Dias nasceu no Nordeste brasileiro, recordista mundial como primeiro Brasileiro a conhecer todos os países do mundo e desde muito novo sempre foi apaixonado por vendas.</p>
              <p>Hoje, Anderson é um empreendedor de sucesso, com mais de 9 empresas em atividade de diferentes ramos. A única coisa em comum entre elas foi a metodologia utilizada para criá-las: A P.E.V 196</p>
              <p>Mas nem sempre foi assim…</p>
              <p>Quando ainda era criança, chegou a costurar roupas para ajudar a família.</p>
              <p>Já vendeu capinhas de celular no ônibus, esse foi seu primeiro empreendimento.</p>
              <p>Esse pequeno empreendimento tornou-se uma loja de sucesso que vendia capinhas de celular, fazia consertos de telefones e abriu espaço para a tão sonhada estabilidade financeira.</p>
              <p>Anderson Dias decidiu largar tudo para seguir o seu sonho de conhecer todos os países do mundo e ainda bateu o recorde como brasileiro mais rápido a fazer isso.</p>
              <p>Hoje, além de empreendedor e recordista, Anderson também é mentor e já ajudou a transformar a vida e o negócio de milhares de pessoas em todo o mundo. Em breve será a sua vez!</p>
            </div>
            <div className="col-12 col-md-6 block_image">
            <Image src={'/anderson.png'} alt={'1.9.6 Sonhos'} priority width={768} height={960} />
            </div>
          </div>
        </div>
      <div className="background-shapes"></div>

      </section>

      <section className={scrolled ? 'faixa fixed' : 'faixa'}>
        <Link className='btn btn-success go' href="/#header">ENTRAR PARA LISTA DE ESPERA</Link>
      </section>

      <Footer />

    </div>
  )
}
