import {
    Container,
    Text,
    ActionsContainer,
    Button,
    CompanyNameContainer,
    CompanyTotalPlacesContainer
} from './styles';
import officeLocationIcon from '@assets/office-location.svg'
import editIcon from '@assets/edit.svg'
import trashIcon from '@assets/trash.svg'

interface CompanyCardProps {
    company: string;
    totalPlaces: number;
    onEdit: () => void;
    onDelete: () => void;
    onViewLocal: () => void;
}

export function CompanyCard({
    company,
    totalPlaces,
    onDelete,
    onEdit,
    onViewLocal
}: CompanyCardProps) {
    return (
        <Container>
            <CompanyNameContainer>
                <Text>{company}</Text>
            </CompanyNameContainer>
            <CompanyTotalPlacesContainer>
                <Text>{totalPlaces}</Text>
            </CompanyTotalPlacesContainer>
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
                    onClick={onViewLocal}
                >
                    <img
                        src={officeLocationIcon}
                        alt="local"
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