import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Header, Button, Group, Div } from '@vkontakte/vkui';

const Home = ({ id, go }) => (
	<Panel id={id}>
		<PanelHeader>Example</PanelHeader>

		<Group header={<Header mode="secondary">Выберите вашу роль:</Header>}>
			<Div>
				<Button stretched size="l" mode="secondary" onClick={go} data-to="doctor">
					Доктор
				</Button>
			</Div><Div>
				<Button stretched size="l" mode="secondary" onClick={go} data-to="patient">
					Пациент
				</Button>
		</Div><Div>
				<Button stretched size="l" mode="secondary" onClick={go} data-to="coach">
					Тренер
				</Button>
			</Div>
		</Group>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
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
