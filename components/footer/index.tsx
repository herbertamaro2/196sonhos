import Image from "next/image";
import { BsInstagram } from 'react-icons/bs';
import { ImFacebook, ImYoutube, ImTwitter} from 'react-icons/im';
import { FaTiktok } from 'react-icons/fa';


export default function Footer() {
  return (
    <div className='footer'>
        <div className='container'>
            <Image src={'/logo_white.png'} width='30%' height='auto' priority width={200} height={132}/>
            <div className="redes">
                <a href="https://pt-br.facebook.com/196sonhos/" target="_blank" rel="noreferrer"><ImFacebook /></a>
                <a href="https://www.instagram.com/196sonhos/" target="_blank" rel="noreferrer"><BsInstagram /></a>
                <a href="https://www.youtube.com/channel/UCO-qTrwQeQny6Ur7ronhowA" target="_blank" rel="noreferrer"><ImYoutube /></a>
                <a href="https://twitter.com/196sonhos?lang=pt" target="_blank" rel="noreferrer"><ImTwitter /></a>
                <a href="https://www.tiktok.com/@196sonhos" target="_blank" rel="noreferrer"><FaTiktok /></a>
            </div>
            &copy; 2022  Projeto 196 - Todos os direitos reservados
        </div>
    </div>
  )
}
