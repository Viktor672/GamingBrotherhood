import { useParams } from "react-router";
import { useDelete } from "../apiHooks/gameApi";
import { useNavigate } from 'react-router';
import { useEffect } from "react";

export default function DeletePage() {
    let { deleteGame } = useDelete();
    let navigate = useNavigate();
    let { gameId } = useParams();

    useEffect(() => {
        let hasConfirmed = window.confirm("Are you sure you want to delete?");

        if (!hasConfirmed) {
            navigate(`/${gameId}/details`);
            return;
        }

        deleteGame(gameId).
        then(() => {
            return navigate('/games');
        });

    }, [deleteGame, navigate, gameId]);

    return null;
}
