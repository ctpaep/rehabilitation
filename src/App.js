import React, {useState, useEffect} from 'react';
import {ScreenSpinner, AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout, SplitCol} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import bridge from '@vkontakte/vk-bridge';
import { useActiveVkuiLocation, useGetPanelForView } from '@vkontakte/vk-mini-apps-router';
import { Root, View, Panel } from '@vkontakte/vkui';

import Home from './panels/Home';
import Doctor from './panels/Doctor';
import Patient from "./panels/Patient";
import Coach from "./panels/Coach";
import Loader from "./panels/Loader";
import ActiveTrain from './panels/ActiveTrain'

const App = () => {
    const { view: activeView } = useActiveVkuiLocation();
    const activePanel = useGetPanelForView('default_view');
    const [scheme, setScheme] = useState('bright_light')
    // const [activePanel, setActivePanel] = useState('loader');
    const [fetchedUser, setUser] = useState(null);
    const [popout, setPopout] = useState(<ScreenSpinner size='large'/>);
    const [activeTrain, setActiveTrain] = useState("")
    console.log("activePanel", activePanel)

    useEffect(() => {
            async function getRole() {
                let response = await bridge.send('VKWebAppStorageGet', {keys: ['role']})
                console.log("state", response.keys[0].value)
                if (!response.keys[0].value) {
                    console.log("нет роли")
                    setActivePanel('home')
                }
                if ("doctor" === response.keys[0].value) {
                    setActivePanel('doctor')
                }
                if ("patient" === response.keys[0].value) {
                    setActivePanel('patient')
                }
                if ("coach" === response.keys[0].value) {
                    setActivePanel('coach   ')
                }

            }

            getRole()
        }, []
    );

    useEffect(() => {
        bridge.subscribe(({detail: {type, data}}) => {
            if (type === 'VKWebAppUpdateConfig') {
                setScheme(data.scheme)
            }
        });

        async function fetchData() {
            const user = await bridge.send('VKWebAppGetUserInfo');
            setUser(user);
            setPopout(null);
        }

        fetchData();
    }, []);

    const go = e => {
        setActivePanel(e.currentTarget.dataset.to);
    };

    return (
        <ConfigProvider>
            <AdaptivityProvider>
                <AppRoot>
                    <SplitLayout popout={popout}>
                        <SplitCol>
                            <Root activeView={activeView}>
                            // // Получение идентификатора Panel для отрисовки
                            <View nav="default_view" activePanel={activePanel}>

                                {/*<Doctor id='doctor' setActivePanel={setActivePanel} go={go}/>*/}
                                {/*<Patient id='patient' setActivePanel={setActivePanel} go={go}/>*/}
                                {/*<Coach id='coach' setActivePanel={setActivePanel} go={go}/>*/}
                                {/*<ActiveTrain id='active' activeTrain={activeTrain} go={go}/>*/}
                                {/*<Loader id='loader' go={go}/>*/}
                                <Panel nav="home_panel"><Home id='home' go={go}/></Panel>
                            </View>
                            </Root>
                        </SplitCol>
                    </SplitLayout>
                </AppRoot>
            </AdaptivityProvider>
        </ConfigProvider>
    );
}

export default App;
