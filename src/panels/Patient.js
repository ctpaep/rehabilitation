import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import bridge from '@vkontakte/vk-bridge';
import {Button, Panel, PanelHeader, PanelHeaderBack} from '@vkontakte/vkui';

import './style.css';
import {setStorageHelper} from "../helpers/store";
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

const Patient = props => {
    const routeNavigator = useRouteNavigator();
    const changHandler = async () => {
        setStorageHelper('doctor')
    }

    const deleteHandler = async () => {
        setStorageHelper('')
    }

    useEffect(() => {
        console.log("Попали в юз эфект пациента")
        setStorageHelper('patient')
    }, []);

    return (
    <Panel>
        <PanelHeader
            before={<PanelHeaderBack onClick={() => routeNavigator.back()}/>}
        >
            Patient
        </PanelHeader>
        <Button onClick={changHandler}>Смена статуса на Доктора</Button>
        <Button onClick={deleteHandler}>Удалить стейт</Button>
    </Panel>
)};

Patient.propTypes = {
};

export default Patient;
