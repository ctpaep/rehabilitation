import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import bridge from '@vkontakte/vk-bridge';
import {Button, Div, Panel, PanelHeader, PanelHeaderBack, CellButton, Separator, FormLayoutGroup, FormLayout, FormItem, Input} from '@vkontakte/vkui';
import {setStorageHelper, getStorageHelper} from "../helpers/store";
import {OnePatient} from "../components/OnePatient";
import {AddEditPatient} from "../components/AddEditPatient";

import './style.css';
import {Icon24Add} from "@vkontakte/icons";
import pt from '../mock/patient.json'
import trains from "../mock/trainings.json"

const Doctor = props => {
    const { setActivePanel, setActiveTrain } = props
    const [edit, setEdit] = useState(false)
    const [patients, setArrPatient] = useState(pt)
    const [trainings, setTrainings] = useState(trains)

    const changHandler = async () => {
        setActivePanel('patient')
        setStorageHelper('patient')
    }


    useEffect(() => {
        setStorageHelper('doctor')
        setActivePanel('doctor')
    }, []);

    // changePatient
    useEffect(() => {
        // setStorageHelper(JSON.stringify(patients), "patientsState")
        // getStorageHelper(["patientsState"])
    }, []);

    return (
        <Div>
        {edit === true ? (
          <AddEditPatient patients={patients} setArrPatient={setArrPatient} setEdit={setEdit}/>
                ) : (
                <Panel id={props.id}>
                    <PanelHeader
                        before={<PanelHeaderBack onClick={props.go} data-to="home"/>}
                    >
                        Doctor
                    </PanelHeader>
                    {patients.length > 0 &&
                        <Div>
                            {patients.map((elem) => <OnePatient key={elem.hash} dataPatient={elem} trains={trainings[elem.hash]} />)}
                        </Div>
                    }
                    <Div>
                        <Separator/>
                        <CellButton onClick={()=>{setEdit(true)}} centered before={<Icon24Add />}>
                            Добавить пациента
                        </CellButton>
                    </Div>

                    <Button onClick={changHandler}>Смена статуса на Пациента</Button>
                </Panel>
            )}
        </Div>
    );
}

Doctor.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
};

export default Doctor;
