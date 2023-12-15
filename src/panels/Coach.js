import React from 'react';
import PropTypes from 'prop-types';
import bridge from '@vkontakte/vk-bridge';
import {Button, Div, Panel, PanelHeader, PanelHeaderBack} from '@vkontakte/vkui';

import './style.css';
import {setStorageHelper} from "../helpers/store";
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

const Coach = props => {
    const routeNavigator = useRouteNavigator();

    return (
    <Panel >
        <PanelHeader
            before={<PanelHeaderBack onClick={() => routeNavigator.back()}/>}
        >
            Coach
        </PanelHeader>
        <Div>Страница в разработке</Div>
        <Button onClick={() => routeNavigator.back()}>Назад к выбору</Button>
    </Panel>
)};

Coach.propTypes = {
};

export default Coach;
