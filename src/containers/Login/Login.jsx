import React from 'react';
import Ink from 'react-ink';

import { endpoints } from '../../modules';


import { Logo } from '../../components';

import './Login.scss';

const Login = () => {
  return (
    <main
      className="login"
      data-testid="login"
    >
      <header className="login__nav">
        <Logo />
        <ul>
          <li>
            <a href={endpoints.getAuthorization.url}>
              Entrar
            </a>
          </li>
        </ul>
      </header>
      <div className="hero">
        <svg viewBox="0 0 1607 1522" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <linearGradient x1="21.8341217%" y1="94.1869484%" x2="84.4980417%" y2="22.1714494%" id="linearGradient">
              <stop stop-color="#EF37A4" offset="0%"/>
              <stop stop-color="#FAE62D" offset="100%"/>
          </linearGradient>
          <path d="M973.466963,67.989849 C1254.28565,67.989849 1481.95734,295.619797 1481.95734,576.387001 C1481.95734,857.154204 1254.28565,1084.78415 973.466963,1084.78415 C889.940134,1084.78415 811.228756,1064.49924 741.687979,1028.8502 C757.621456,1056.17995 766.898281,1087.89946 766.898281,1121.84925 C766.898281,1224.19422 683.902568,1307.17472 581.538827,1307.17472 C484.7341,1307.17472 405.349975,1233.00913 396.958344,1138.41703 C379.396111,1141.17832 361.515208,1143.01919 343.174005,1143.01919 C152.999101,1143.01919 -1.13073702,988.917605 -1.13073702,798.812967 C-1.13073702,608.672928 152.999101,454.571347 343.174005,454.571347 C389.558129,454.571347 433.746973,463.881872 474.14719,480.520453 C519.00878,245.597851 725.435832,67.989849 973.466963,67.989849 Z M682.156967,1476.64752 C682.156967,1298.26069 826.797534,1153.61124 1005.25248,1153.61124 C1183.70743,1153.61124 1328.34799,1298.26069 1328.34799,1476.64752 C1328.34799,1655.06975 1183.70743,1799.68379 1005.25248,1799.68379 C826.797534,1799.68379 682.156967,1655.06975 682.156967,1476.64752 Z" id="12" fill="url(#linearGradient)" transform="translate(740.413301, 933.836822) rotate(-38.000000) translate(-740.413301, -933.836822) "/>
        </svg>
      </div>
      <div className="container">
        <h2 className="login__microcopy">
          Não toca a música inteira,
          <strong> mas toca o seu <span role="img" className="login__microcopy__heart" aria-label="Coração">❤️</span></strong>
        </h2>

        <a href={endpoints.getAuthorization.url} className="login__auth-button">
          Entrar com Spotify
          <Ink />
        </a>
      </div>
    </main>
  )
}

export default Login;