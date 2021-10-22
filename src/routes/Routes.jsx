import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import Home from './Home';
import theme from '../theme';
import Layout from '../Layout';

const Routes = () => (
	<ChakraProvider>
		<ColorModeScript initialColorMode={theme.config.initialColorMode} />
		<Router>
			<Layout>
				<Switch>
					<Route exact path="/" component={Home} />
				</Switch>
			</Layout>
		</Router>
	</ChakraProvider>
);

export default Routes;
