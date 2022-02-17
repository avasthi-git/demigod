import React from 'react';
import Anime from 'react-anime';
import CustomScroll from 'react-custom-scroll';
import BackToHomeBtn from './BackToHomeBtn';
import mail from '../assets/mail.svg';
import github from '../assets/github.svg';
import twitter from '../assets/twitter.svg';
import medium from '../assets/medium.svg';
import linkedin from '../assets/linkedin.svg';
import codepen from '../assets/codepen.svg';
import quora from '../assets/quora.svg';
import facebook from '../assets/facebook.svg';
//import instagram from '../assets/instagram.svg';
//import telegram from '../assets/telegram.svg';
//import reddit from '../assets/reddit.svg';
//import youtube from '../assets/youtube.svg';
//import whatsapp from '../assets/whatsapp.svg';
//import telegram-channel from '../assets/telegram-channel.svg';
import '../styles/ContactsPage.css';

const ContactsPage = props => {
  return(
    <Anime easing="easeOutCubic" opacity={[0, 1]} translateY={-30} duration={400} delay={300}>
      <div className="contacts-page">
          <BackToHomeBtn handleClick={props.returnBtn}/>
          <Anime easing="easeOutCubic" left={[-350, -130]} duration={500} delay={800}>
            <p className="page-tag">Contacts</p>
          </Anime>
          <div className="page-content">
            <h1>Let's get in touch!</h1>
            <p>I love meeting new people from around the world! Hit me up to talk about project ideas, Programming, JavaScript, Linux, Kittens and Puppies, Travelling, Books, Or Weather. Or just say "Hi" and we'll find something we enjoy talking about. You can find me through any of the platform listed below.</p>
            <div className="link-list">
              <ul>
                <li><a href="mailto:heyavasthi@gmail.com?cc=ishan@hi2.in" target="_blank"><img src={mail} alt="Mail me!"/></a></li>
                <li><a href="https://github.com/avasthi-git" target="_blank"><img src={github} alt=""/></a></li>
                <li><a href="https://www.linkedin.com/in/heyavasthi/" target="_blank"><img src={linkedin} alt=""/></a></li>
                <li><a href="https://twitter.com/heyavasthi" target="_blank"><img src={twitter} alt=""/></a></li>
                <li><a href="https://heyavasthi.medium.com/" target="_blank"><img src={medium} alt=""/></a></li>
                <li><a href="https://codepen.io/" target="_blank"><img src={codepen} alt=""/></a></li>
                <li><a href="https://www.facebook.com/heyavasthi" target="_blank"><img src={facebook} alt=""/></a></li>
                <li><a href="https://www.quora.com/profile/heyavasthi" target="_blank"><img src={quora} alt=""/></a></li>
              </ul>
            </div>
          </div>
      </div>
    </Anime>
  )
}

export default ContactsPage;