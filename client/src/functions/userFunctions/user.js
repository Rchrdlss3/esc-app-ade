import { backendUrl } from "../../helper/constants/general"

export async function getUserIPAddress () {
    const ipAddress = await fetch('https://api.ipify.org?format=json')
    .then((resp) => resp.json())
    .then((data) => {return data.ip})
    
    return await ipAddress
}

export async function getUser(reqIPAddress) {
    const userAndToken = {}
    try {
        const receivedUser = await fetch(`${backendUrl}/user/get?ipAddress=${reqIPAddress}`)
        .then((resp) => resp.json())
        .then((data) => {
            return data
        })
        const response = await receivedUser
        const user = userAndToken.user = response[0]; const token = userAndToken.token = response[1]; const expiresIn = userAndToken.expiresIn = response[2]
        localStorage.setItem("TOKEN",token); localStorage.setItem("EXPIRES_IN",expiresIn)
    } catch (e) {
        console.log(e)
    }
    return userAndToken
}