import React, {useState, useRef} from 'react';
import PropTypes from 'prop-types';
import bridge from '@vkontakte/vk-bridge';
import {Button, Div, Panel, PanelHeader, PanelHeaderBack} from '@vkontakte/vkui';



import './style.css';
import {setStorageHelper} from "../helpers/store";
import { useRouteNavigator, useParams, useFirstPageCheck  } from '@vkontakte/vk-mini-apps-router';
import trains from "../mock/trainings.json"
import {OneExercises} from "../components/OneExercises";

const ActiveTrain = props => {
    const isFirstPage = useFirstPageCheck();
    const params = useParams({ panel: 'active_panel' })
    const {id, train} = params;
    const data = useRef(trains[id][train])
    const routeNavigator = useRouteNavigator();

    return (
        <Panel>
            <PanelHeader
                before={<PanelHeaderBack onClick={() => isFirstPage ? routeNavigator.push('/') : routeNavigator.back()} />}
            >
                ActiveTrain
            </PanelHeader>
            <Div>{data.current.description}</Div>
            {data.current.exercises.map((el, index) => {
                console.log("уд", el, index)
              return  <OneExercises key={el.name} el={el}/>})}
        </Panel>
    )};

ActiveTrain.propTypes = {

};

export default ActiveTrain;
