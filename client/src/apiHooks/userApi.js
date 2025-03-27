import { useContext } from "react";
import { handleRequest } from "../utils/handlerequest"
import { UserContext } from "../contexts/UserContext";

let baseUrl = 'http://localhost:3030/data';

export let useUser = () => {
    let { accessToken } = useContext(UserContext);
    let options = {
        headers: {
            'X-Authorization': accessToken
        }
    }

    let like = async (_ownerId, gameId) => {
        console.log(_ownerId, gameId);


        try {
            let result = await handleRequest(`${baseUrl}/likes`, 'POST', { _ownerId, gameId }, options);
            console.log(result);

        }
        catch (err) {
            throw new Error(err.message);
        }
    }

    let getLikes = async (gameId) => {
        try {
            let likesData = await handleRequest(`${baseUrl}/likes`, 'GET');

            likesData = likesData.filter(curObj => curObj.gameId === gameId);

            return likesData.length;
        } catch (err) {
            console.error("Error fetching likes:", err);
            return 0;
        }
    }

    return {
        like,
        getLikes
    }
}