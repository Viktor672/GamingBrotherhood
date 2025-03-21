import { useContext, useEffect, useState } from "react";
import { handleRequest } from "../utils/handlerequest";
import { UserContext } from '../contexts/UserContext';

let baseUrl = 'http://localhost:3030/data/games';

export let useAllGames = () => {
    let [allGames, setallGames] = useState([]);

    useEffect(() => {
        handleRequest(baseUrl, 'GET')
            .then(data => {
                setallGames(data);
            })
            .catch(err => {
                alert(err.message);
            })
    }, []);

    return {
        allGames
    }
}

export let useGame = (gameId) => {
    let [game, setGame] = useState({});

    useEffect(() => {
        handleRequest(`${baseUrl}/${gameId}`, 'GET')
            .then(data => {
                setGame(data)
            })
            .catch(err => {
                return alert(err.message);
            });
    }, [gameId]);

    return {
        game
    }
}

export let useCreate = () => {
    let { accessToken } = useContext(UserContext);

    let options = {
        headers: {
            'X-Authorization': accessToken
        }
    }
    let create = async (gameData) => {
        try {
            console.log(options);

            await handleRequest(baseUrl, 'POST', gameData, options);
        }
        catch (err) {
            return alert(err.message);
        }
    }

    return {
        create
    }
}

export let useDelete = () => {
    let { accessToken } = useContext(UserContext);
console.log(accessToken);

    let options = {
        headers: {
            'X-Authorization': accessToken
        }
    }

    let deleteGame = async (gameId) => {
        try {
            await handleRequest(`${baseUrl}/${gameId}`, 'DELETE',{},options);
        }
        catch (err) {
            return alert(err.message);
        }
    }

    return {
        deleteGame
    }
}