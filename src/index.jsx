import React from 'react';
import { render } from 'react-dom';
import App from './routes/Routes';

const appDiv = document.getElementById('app');

render(
	<App />,
	appDiv,
);
