import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import Home from './Home';
import theme from '../theme';

const Routes = () => (
	<ChakraProvider>
		<ColorModeScript initialColorMode={theme.config.initialColorMode} />
		<Router>
			<Switch>
				<Route exact path="/" component={Home} />
			</Switch>
		</Router>
	</ChakraProvider>
);

export default Routes;
