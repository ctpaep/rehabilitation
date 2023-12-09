import React, {useEffect, useState} from 'react';
import {Text, CardScroll, Card, Button, Group, Spacing, Div, Separator,} from '@vkontakte/vkui';

const OneCard = ({trainInfo}) => {
    const {description, exercises } = trainInfo;
    return (<Card>
            <div>
                { description }
            </div>
        </Card>)
}

export function OnePatient({dataPatient, trains}) {
    const arrTrains = Object.values(trains)
    console.log("Train",dataPatient.name, arrTrains)
    return (<Div>
            <Group description={`Пациент: ${dataPatient.name} ${dataPatient.lastname}`}>
                <Text>{`${dataPatient.name} ${dataPatient.lastname}`}</Text>
                <CardScroll size="s">
                    {arrTrains.map((elem) => <OneCard trainInfo={elem}/>)}
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
