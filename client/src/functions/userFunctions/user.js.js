import { backendUrl } from "../../helper/constants/general"

export async function getUserIPAddress () {
    const ipAddress = await fetch('https://api.ipify.org?format=json')
    .then((resp) => resp.json())
    .then((data) => {return data.ip})
    
    return await ipAddress
}

export async function getUser(reqIPAddress) {
    // Req with get cannot have body. Change in backend as well, so that query asks for ipAddress
    const userAndToken = {}
    // const getUser = await fetch(`${backendUrl}/user/get`,{
    //     body: {ipAddress: reqIPAddress}
    // })
    // .then((resp) => resp.json())
    // .then((data) => {
    //     return data
    // })
    // const response = await getUser
    // userAndToken.user = response[0]; userAndToken.token = response[1]
    return userAndToken
}