import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import bridge from '@vkontakte/vk-bridge';
import {Button, Panel, PanelHeader, PanelHeaderBack} from '@vkontakte/vkui';

import './style.css';
import {setStorageHelper} from "../helpers/store";

const Patient = props => {
    const { setActivePanel} = props
    const changHandler = async () => {
        setActivePanel('doctor')
        setStorageHelper('doctor')
    }

    const deleteHandler = async () => {
        setActivePanel('home')
        setStorageHelper('')
    }

    useEffect(() => {
        setActivePanel('patient')
        console.log("Попали в юз эфект пациента")
        setStorageHelper('patient')
    }, []);

    return (
    <Panel id={props.id}>
        <PanelHeader
            before={<PanelHeaderBack onClick={props.go} data-to="home"/>}
        >
            Patient
        </PanelHeader>
        <Button onClick={changHandler}>Смена статуса на Доктора</Button>
        <Button onClick={deleteHandler}>Удалить стейт</Button>
    </Panel>
)};

Patient.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
};

export default Patient;
