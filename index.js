import React from 'react';
import { render } from 'react-dom';
import Media from './src/playlist/components/media';

const app = document.getElementById('app');

// reactDOM.render(Qué voy a renderizar, dónde lo haré);
//const holaMundo = <h1>Hola mundo! :D</h1>;
render(<Media />, app);