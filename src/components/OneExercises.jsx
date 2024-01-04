import React, {useState} from 'react';
import {Button, Card, Div, Text} from "@vkontakte/vkui";

export const OneExercises = props => {
    const {name, recurrence, quantity, weight} = props.el
    const [completed, setComplet] = useState(false)
    let [counter, setCounter] = useState(0)

    function makeApproach () {
        setCounter(counter += 1)
        if(counter === recurrence){
            setComplet(prevState => !prevState)
        }
    }

    return (
        <>
            <Card mode="shadow">
            <Div style={{ height: 56, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Div style={{display: "inline"}}>{`${name}, ${counter}/${recurrence} подход, ${quantity}раз, ${weight}кг`}</Div>
                {completed ? (
                    <Text> Выполнено! </Text>
                ) : (
                    <Button onClick={() => {
                        makeApproach()
                    }}>Подход</Button>
                )}
            </Div>
            </Card>
        </>
    )

}
