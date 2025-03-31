import { Navigate, useParams } from 'react-router';
import { useGame } from '../apiHooks/gameApi';
import { useContext, useEffect, useRef, useState } from 'react';
import { UserContext } from '../contexts/UserContext';

export default function OwnerRoute({ children }) {
    let { _id } = useContext(UserContext);
    let { gameId } = useParams();
    let { game } = useGame(gameId);
    let [isOwner, setIsOwner] = useState(false);
    let [isPending, setIsPending] = useState(true);
    let hasRunned = useRef(false);

    useEffect(() => {
        if (game?._ownerId) {
            let ownerStatus = _id === game._ownerId;
            setIsOwner(ownerStatus);
            setIsPending(false);
        }
    }, [game, _id]);

    if (!isPending) {
        if (!isOwner) {
            if (hasRunned.current) return <Navigate to={`/${gameId}/details`} />;
            hasRunned.current = true;
            alert("You do not have permission to access this page.");
        }
        return children;
    }

}

