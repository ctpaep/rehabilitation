import React from "react";
import bridge from "@vkontakte/vk-bridge";
import { RouterProvider, createHashRouter } from '@vkontakte/vk-mini-apps-router';
import { createRoot } from 'react-dom/client';
import { AdaptivityProvider, AppRoot, ConfigProvider } from '@vkontakte/vkui';
import {App} from "./App";

const router = createHashRouter([
    {
        path: '/',            // Путь
        panel: 'home_panel',  // Желаемый Panel
        view: 'default_view', // Желаемый View
        root: 'default_root', // Желаемый Root
    },
    {
        path: `/doctor`,
        panel: 'doctor_panel',
        view: 'default_view'
    },
    {
        path: `/patient`,
        panel: 'patient_panel',
        view: 'default_view'
    },
    {
        path: `/coach`,
        panel: 'coach_panel',
        view: 'default_view'
    },
    {
        path: `/active/:id/training/:train`, // Параметр id
        panel: 'active_panel',
        view: 'default_view'
    },
]);
// Init VK Mini App
bridge.send("VKWebAppInit");

const root = createRoot(
    document.getElementById('root'));

root.render(
    <ConfigProvider>
        <AdaptivityProvider>
            <AppRoot>
                <RouterProvider router={router}>
                    <App />
                </RouterProvider>
            </AppRoot>
        </AdaptivityProvider>
    </ConfigProvider>
);
