import bridge from "@vkontakte/vk-bridge";

export async function setStorageHelper (value, key='role') {
    console.log("Сторедж", value)
    const response = await bridge.send('VKWebAppStorageSet', {
        key: key,
        value: value
    })
}

export async function getStorageHelper([key]) {
    const response = await bridge.send('VKWebAppStorageGet', {
        keys: [key]})
    console.log("res", response)
    return response
}
