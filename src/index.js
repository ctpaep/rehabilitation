import React from "react";
import bridge from "@vkontakte/vk-bridge";
import { RouterProvider, createHashRouter } from '@vkontakte/vk-mini-apps-router';
import { createRoot } from 'react-dom/client';
import { AdaptivityProvider, AppRoot, ConfigProvider } from '@vkontakte/vkui';
import App from "./App";

const router = createHashRouter([
  {
    path: '/',
    panel: 'home_panel',
    view: 'default_view',
  },
]);
// Init VK Mini App
bridge.send("VKWebAppInit");

const root = createRoot(
    document.getElementById('root') as HTMLElement);

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
