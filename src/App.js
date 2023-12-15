
//
// const App = () => {
//     const {view: activeView} = useActiveVkuiLocation();
//     const activePanel = useGetPanelForView('default_view');
//     // const [scheme, setScheme] = useState('bright_light')
//     // // const [activePanel, setActivePanel] = useState('loader');
//     // const [fetchedUser, setUser] = useState(null);
//     // const [popout, setPopout] = useState(<ScreenSpinner size='large'/>);
//     // const [activeTrain, setActiveTrain] = useState("")
//     // console.log("activePanel", activePanel)
//     //
//     // useEffect(() => {
//     //         async function getRole() {
//     //             let response = await bridge.send('VKWebAppStorageGet', {keys: ['role']})
//     //             console.log("state", response.keys[0].value)
//     //             if (!response.keys[0].value) {
//     //                 console.log("нет роли")
//     //                 setActivePanel('home')
//     //             }
//     //             if ("doctor" === response.keys[0].value) {
//     //                 setActivePanel('doctor')
//     //             }
//     //             if ("patient" === response.keys[0].value) {
//     //                 setActivePanel('patient')
//     //             }
//     //             if ("coach" === response.keys[0].value) {
//     //                 setActivePanel('coach   ')
//     //             }
//     //
//     //         }
//     //
//     //         getRole()
//     //     }, []
//     // );
//     //
//     // useEffect(() => {
//     //     bridge.subscribe(({detail: {type, data}}) => {
//     //         if (type === 'VKWebAppUpdateConfig') {
//     //             setScheme(data.scheme)
//     //         }
//     //     });
//     //
//     //     async function fetchData() {
//     //         const user = await bridge.send('VKWebAppGetUserInfo');
//     //         setUser(user);
//     //         setPopout(null);
//     //     }
//     //
//     //     fetchData();
//     // }, []);
//     //
//     // const go = e => {
//     //     setActivePanel(e.currentTarget.dataset.to);
//     // };
//
//     return (
//         <Root activeView={activeView}>
//             // // Получение идентификатора Panel для отрисовки
//             <View nav="default_view" activePanel={activePanel}>
//
//
//                 <Panel nav="home_panel"></Panel>
//             </View>
//         </Root>
//
//     );
// }
//
// export default App;

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
                {/*<Loader id='loader' go={go}/>*/}
            </View>
        </Root>
    )
}
