import { useParams } from "react-router";
import { useDelete } from "../apiHooks/gameApi";
import { useNavigate } from 'react-router';

export default function DeletePage() {
    let { deleteGame } = useDelete();
    let navigate = useNavigate();
    let { gameId } = useParams();

    let hasConfirmed = confirm(`Are you sure you want to delete?`);

    if (!hasConfirmed) {
        return;
    }

    hasConfirmed ? deleteGame(gameId).then(() => {
        navigate('/games');
    })
        :
        null;
}