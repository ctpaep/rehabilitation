import React, {useState} from 'react';
import {Button, Card, CellButton, Div, FormItem, FormLayout, FormLayoutGroup, Input, Panel, PanelHeader, PanelHeaderBack, Spacing, Text} from "@vkontakte/vkui";
import {useRouteNavigator} from '@vkontakte/vk-mini-apps-router';
import {Icon24Done} from "@vkontakte/icons";

export function AddTraining({props}) {
    const routeNavigator = useRouteNavigator();
    const [miniState, setMiniState] = useState([]);
    const [newActivity, setNewActivity] = useState({name: '', recurrence: 0, quantity: 0, weight: 0});

    const handleChange = (field, value) => {
        if(/^\d*$/.test(value) || value === "") {
            setNewActivity({...newActivity, [field]: value});
        }
    };

    const handleIncrement = (field) => {
        setNewActivity({...newActivity, [field]: parseInt(newActivity[field]) + 1});
    };

    const handleDecrement = (field) => {
        if (newActivity[field] > 0) {
            setNewActivity({...newActivity, [field]: parseInt(newActivity[field]) - 1});
        }
    };

    const saveHandler = async () => {
        setArrPatient([...patients, newActivity]);
    };

    console.log("miniState", miniState,  miniState.length);

    return (
        <>
            <Panel>
                <PanelHeader
                    before={<PanelHeaderBack onClick={() => routeNavigator.back()}/>}
                >
                    Добавить тренировку
                </PanelHeader>
                { miniState.length > 0 &&
                    miniState.map((el, index) => {
                        return (
                            <Card mode="shadow" key={index}>
                                <Div style={{height: 56, display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                                    <Div style={{display: "inline"}}>
                                        {`${el.name}, ${el.recurrence} подход, ${el.quantity} раз, ${el.weight}кг`}
                                    </Div>
                                </Div>
                            </Card>
                        );
                    })
                }
                <FormLayout>
                    <FormLayoutGroup mode="vertical" style={{display: "flex", flexDirection: "column"}}>
                        <FormItem htmlFor="name" top="Название упражнение">
                            <Input
                                id="name"
                                value={newActivity.name}
                                onChange={(e) => {
                                    setNewActivity({...newActivity, name: e.target.value})
                                }}
                            />
                        </FormItem>
                        <FormItem htmlFor="recurrence" top="Количество подходов">
                            <div style={{flex: "1 1 200px"}}>
                                <Button onClick={() => handleDecrement('recurrence')}>-</Button>
                                <Input
                                    id="recurrence"
                                    value={newActivity.recurrence}
                                    onChange={(e) => handleChange('recurrence', e.target.value)}
                                />
                                <Button onClick={() => handleIncrement('recurrence')}>+</Button>
                            </div>
                        </FormItem>
                        <FormItem htmlFor="quantity" top="Количество раз в одном подходе">
                            <Button onClick={() => handleDecrement('quantity')}>-</Button>
                            <Input
                                id="quantity"
                                value={newActivity.quantity}
                                onChange={(e) => handleChange('quantity', e.target.value)}
                            />
                            <Button onClick={() => handleIncrement('quantity')}>+</Button>
                        </FormItem>
                        <FormItem htmlFor="weight" top="Вес">
                            <div style={{flex: "1 1 200px"}}>
                                <Button onClick={() => handleDecrement('weight')}>-</Button>
                                <Input
                                    id="weight"
                                    value={newActivity.weight}
                                    onChange={(e) => handleChange('weight', e.target.value)}
                                />
                                <Button onClick={() => handleIncrement('weight')}>+</Button>
                            </div>
                        </FormItem>
                        <CellButton onClick={()=>{
                            setMiniState([...miniState, newActivity])
                            setNewActivity({name: '', "recurrence": 0, "quantity": 0, "weight": 0})

                        }}  centered before={<Icon24Done/>}>
                            Добавить упражнение
                        </CellButton>
                    </FormLayoutGroup>
                </FormLayout>
                <Spacing size={100}/>
                <Button onClick={() => saveHendler()}>Сохранить тренировку</Button>
            </Panel>
        </>
    );
}
