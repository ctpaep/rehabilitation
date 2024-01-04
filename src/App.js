import React, {useState, useEffect} from 'react';
import { useActiveVkuiLocation, useGetPanelForView } from '@vkontakte/vk-mini-apps-router';
import { Root, View, Panel } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import bridge from '@vkontakte/vk-bridge';


import Doctor from './panels/Doctor';
import Patient from "./panels/Patient";
import Coach from "./panels/Coach";
import Loader from "./panels/Loader";
import ActiveTrain from './panels/ActiveTrain'
import Home from './panels/Home';
import {AddTraining} from "./components/AddTraining";

export function App() {
    // Получение информации о View и Panel
    const { view: activeView } = useActiveVkuiLocation();
    const activePanel = useGetPanelForView('default_view');

    return(
        <Root activeView={activeView}>
            <View nav="default_view" activePanel={activePanel}>
                <Panel nav="home_panel"><Home id="home"/></Panel>
                <Panel nav="doctor_panel"><Doctor id="doctor"/></Panel>
                <Panel nav="patient_panel"><Patient id='patient' /></Panel>
                <Panel nav="coach_panel"><Coach id='coach' /></Panel>
                <Panel nav="active_panel"> <ActiveTrain id='active'/></Panel>
                <Panel nav="addTrine_panel"> <AddTraining id='addTraining'/></Panel>
                {/*<Loader id='loader' go={go}/>*/}
            </View>
        </Root>
    )
}
