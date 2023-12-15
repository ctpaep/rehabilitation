import React from 'react';
import PropTypes from 'prop-types';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

import { Panel, PanelHeader, Header, Button, Group, Div } from '@vkontakte/vkui';

const Home = ({ id }) => {
	const routeNavigator = useRouteNavigator();
	return (

		<Panel id={id}>
			<PanelHeader>Example</PanelHeader>

			<Group header={<Header mode="secondary">Выберите вашу роль:</Header>}>
				<Div>
					<Button onClick={() => routeNavigator.push('/doctor')} stretched size="l" mode="secondary" data-to="doctor">
						Доктор
					</Button>
				</Div><Div>
				<Button onClick={() => routeNavigator.push('patient')} stretched size="l" mode="secondary" data-to="patient">
					Пациент
				</Button>
			</Div><Div>
				<Button onClick={() => routeNavigator.push('/coach')} stretched size="l" mode="secondary" data-to="coach">
					Тренер
				</Button>
			</Div>
			</Group>
		</Panel>
	);
}

Home.propTypes = {
	id: PropTypes.string.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
