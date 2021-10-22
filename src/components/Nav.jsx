import React from 'react';
import { Flex, Text } from '@chakra-ui/layout';

const Nav = () => (
	<>
		<NavBarContainer />
	</>
);

const NavBarContainer = ({ props }) => (
	<Flex
		as="nav"
		align="center"
		justify="space-between"
		wrap="wrap"
		w="100%"
		mb={8}
		p={8}
		bg="gray.800"
		color={['white']}
		{...props}
	>
		<Text fontSize="2xl">
			Hector Duran
		</Text>
	</Flex>
);

export default Nav;
