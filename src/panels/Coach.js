import React from 'react';
import PropTypes from 'prop-types';
import bridge from '@vkontakte/vk-bridge';
import {Button, Div, Panel, PanelHeader, PanelHeaderBack} from '@vkontakte/vkui';

import './style.css';
import {setStorageHelper} from "../helpers/store";

const Coach = props => {
    const { setActivePanel} = props
    const deleteHandler = async () => {
        setActivePanel('home')
        setStorageHelper('')
    }
    return (
    <Panel id={props.id}>
        <PanelHeader
            before={<PanelHeaderBack onClick={props.go} data-to="home"/>}
        >
            Coach
        </PanelHeader>
        <Div>Страница в разработке</Div>
        <Button onClick={deleteHandler}>Назад к выбору</Button>
    </Panel>
)};

Coach.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
};

export default Coach;
