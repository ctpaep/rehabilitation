import React, {useEffect, useState} from 'react';
import {Text, CardScroll, Card, Button, Group, Spacing, Div, Separator,} from '@vkontakte/vkui';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

const OneCard = ({trainInfo, patientHach}) => {
    const {description, exercises, } = trainInfo[1];
    const routeNavigator = useRouteNavigator();
    return (<Card>
            <div>
                { description }
            </div>
        <Button onClick={() => routeNavigator.push(`/active/${patientHach}/training/${trainInfo[0]}`)}>Перейти к тренировке</Button>
        </Card>)
}

export function OnePatient({dataPatient, trains, patient}) {
    const arrTrains = Object.entries(trains)
    console.log("Train", Object.entries(trains))
    return (
        <Div>
            <Text>{`${dataPatient.name} ${dataPatient.lastname}`}</Text>
            <Group key={dataPatient.age} description={`Пациент: ${dataPatient.name} ${dataPatient.lastname}
            ${dataPatient.comment}
            `}>
                <CardScroll size="s">
                    {arrTrains.map((elem) => <OneCard key={elem[1].description} patientHach={patient} trainInfo={elem}/>)}
                    <Card>
                        <div style={{paddingBottom: '66%'}}>
                            Добавить новую тренировку
                        </div>
                    </Card>
                </CardScroll>
            </Group>
            <Spacing size={12}/>
            <Separator/>
            <Spacing size={20}/>
        </Div>)
}
