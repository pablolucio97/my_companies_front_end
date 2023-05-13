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
import { Link } from 'react-router-dom'

interface CompanyCardProps {
    company: string;
    totalPlaces: number;
    onEdit: () => void;
    onDelete: () => void;
    link: string;
}

export function CompanyCard({
    company,
    totalPlaces,
    onDelete,
    onEdit,
    link
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
                <Link to={link}>
                    <Button
                    >
                        <img
                            src={officeLocationIcon}
                            alt="local"
                        />
                    </Button>
                </Link>
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