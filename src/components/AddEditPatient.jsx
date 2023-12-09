import React, {useEffect, useState} from 'react';
import { CellButton, Div, FormItem, FormLayout, FormLayoutGroup, Input,} from '@vkontakte/vkui';
import {Icon24Done} from "@vkontakte/icons";

export function AddEditPatient  (props) {
    const [newPatient, setNewPatient] = useState({name: '', lastName: '', age: 0, comment: ''})
    const {patients, setArrPatient, setEdit} = props
    const saveHendler = async () => {
        // generateHash()
        console.log("form", newPatient)
        setArrPatient([...patients, newPatient])
        setEdit(false)
    }

    return (
        <FormLayout>
            <Div>
                При добавлении пациента, убедитесь, что у вас есть согласие пациента на обработку его персональных данных. Приложение не имет доступа к ним, все данные хранятся только в вашем аккаунте социальной сети Вконтакте.
            </Div>
            <FormLayoutGroup mode="vertical">
                <FormItem htmlFor="name" top="Имя">
                    <Input id="name" value={newPatient.name} onChange={(e)=>{setNewPatient({...newPatient, name: e.target.value})}}/>
                </FormItem>
                <FormItem htmlFor="lastName"  top="Фамилия">
                    <Input id="lastName" value={newPatient.lastName} onChange={(e)=>{setNewPatient({...newPatient, lastName: e.target.value})}} />
                </FormItem>
                <FormItem htmlFor="lastName" top="Возраст">
                    <Input id="age" value={newPatient.age} onChange={(e)=>{setNewPatient({...newPatient, age: e.target.value})}}/>
                </FormItem>
                <FormItem htmlFor="lastName" top="Комментарий">
                    <Input id="age" value={newPatient.comment} onChange={(e)=>{setNewPatient({...newPatient, comment: e.target.value})}}/>
                </FormItem>
                <CellButton onClick={() => saveHendler()} centered before={<Icon24Done />}>
                    Сохранить
                </CellButton>
            </FormLayoutGroup>
        </FormLayout>
    )
}
