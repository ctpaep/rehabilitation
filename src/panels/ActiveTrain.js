import React from 'react';
import PropTypes from 'prop-types';
import bridge from '@vkontakte/vk-bridge';
import {Button, Div, Panel, PanelHeader, PanelHeaderBack} from '@vkontakte/vkui';

import './style.css';
import {setStorageHelper} from "../helpers/store";

const ActiveTrain = props => {

    return (
        <Panel id={props.id}>
            <PanelHeader
                before={<PanelHeaderBack onClick={props.go} data-to="home"/>}
            >
                ActiveTrain
            </PanelHeader>
            <Div>Страница в разработке</Div>
        </Panel>
    )};

ActiveTrain.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
};

export default ActiveTrain;
