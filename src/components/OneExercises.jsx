import React from 'react';
import {Div} from "@vkontakte/vkui";

export const OneExercises = props => {
    const {name, recurrence, quantity, weight} = props.el
    console.log("props", name)
  return  (
        <Div>{`${name}, ${recurrence}, ${quantity}, ${weight}`}</Div>
    )
}
