import React, {useEffect, useState} from 'react';
import {Text, CardScroll, Card, Button, Group, Spacing, Div, Separator,} from '@vkontakte/vkui';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

const OneCard = ({trainInfo, patientHach}) => {
    const {description, exercises, } = trainInfo[1];
    const routeNavigator = useRouteNavigator();
    function generateNumber() { return Math.floor(Math.random() * 3) + 1; }
    return (<Card style={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundSize: 'cover', backgroundImage: `url(/img/${generateNumber()}.jpg)`}}>
        <div style={{backgroundColor: 'rgb(128 128 128 / 0.5)', padding: '3%', borderRadius: '20px'  }}>
            <div style={{textAlign: 'center'}}>
                { description }
            </div>
        <Button style={{margin: '0 auto', display: 'block'}} onClick={() => routeNavigator.push(`/active/${patientHach}/training/${trainInfo[0]}`)}>Перейти к тренировке</Button>
        </div>
        </Card>)
}

export function OnePatient({dataPatient, trains, patient}) {
    console.log("onePatient", dataPatient, trains, patient)
    const arrTrains = Object.entries(trains)
    const routeNavigator = useRouteNavigator();
    return (
        <Div>
            <Text>{`${dataPatient.name} ${dataPatient.lastname}`}</Text>
            <Group key={dataPatient.age} description={`Пациент: ${dataPatient.name} ${dataPatient.lastname}
            ${dataPatient.comment}
            `}>
                <CardScroll size="s">
                    {arrTrains.map((elem) => <OneCard key={elem[1].description} patientHach={patient} trainInfo={elem}/>)}
                    <Card style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <div style={{textAlign: 'center', padding: '25% 0'}}>
                            <Button style={{margin: '0 auto'}} onClick={() => routeNavigator.push(`/active/${dataPatient.hash}/add-training`)}>Добавить новую тренировку</Button>
                        </div>
                    </Card>
                </CardScroll>
            </Group>
            <Spacing size={10}/>
        </Div>)
}
