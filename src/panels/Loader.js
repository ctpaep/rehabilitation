import React from 'react';
import PropTypes from 'prop-types';
import bridge from '@vkontakte/vk-bridge';
import { Panel, PanelHeader, PanelHeaderBack, PanelSpinner, Spinner } from '@vkontakte/vkui';

import './style.css';

const Loader = props => (
    <Panel id={props.id}  >
        <PanelHeader
            before={<PanelHeaderBack onClick={props.go} data-to="home"/>}
        >
            Loader
        </PanelHeader>
        <PanelSpinner>
            <Spinner size="large" style={{ margin: '20px 0' }} />
            Панель загружается, пожалуйста, подождите...
        </PanelSpinner>
    </Panel>
);

Loader.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
};

export default Loader;
