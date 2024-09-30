import './Footer.css'
import githubIcon from './imgs-footer/github_icon.png'
import linkedinIcon from './imgs-footer/linkedin-icon.png'

function CreateFooter(){
    return (
        <footer className = "App-footer">
          <div className='copyright'>
            <p>Desenvolvido por Pedro H. P. Silva</p>
          </div>
          <div className='contacts'>
              <h4>Contatos:</h4><br/>
              <a target='_blank' rel='noreferrer' href='https://github.com/Pedrohenr1qq'><img src={githubIcon} alt='github icon'/></a>
              <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/pedro-henrique-pereira-da-silva-8624a8315'><img src={linkedinIcon} alt='linkedin icon'/></a>
          </div>
        </footer>
    );
}

export default CreateFooter;