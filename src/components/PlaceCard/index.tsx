import {
    Container,
    Text,
    ActionsContainer,
    Button,
    PlaceNameContainer,
} from './styles';
import editIcon from '@assets/edit.svg'
import trashIcon from '@assets/trash.svg'

interface PlaceCardProps {
    place: string;
    onEdit?: () => void;
    onDelete?: () => void;
}

export function PlaceCard({
    place,
    onDelete,
    onEdit,
}: PlaceCardProps) {
    return (
        <Container>
            <PlaceNameContainer>
                <Text>{place}</Text>
            </PlaceNameContainer>
            <ActionsContainer>
                <Button
                    onClick={onEdit}
                >
                    <img
                        src={editIcon}
                        alt="edit"
                    />
                </Button>
                <Button
                    onClick={onDelete}
                >
                    <img
                        src={trashIcon}
                        alt="delete"
                    />
                </Button>
            </ActionsContainer>
        </Container>
    )
}