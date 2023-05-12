import {
    AvatarContainer,
    Container,
    HeaderTitleContainer,
    HeaderUserContainer,
    BuildingsIconStyles,
    ArrowDownIconStyles,
    UserTextStyle,
} from './styles';
import { MdDomain, MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { SubTitle } from '@components/SubTitle'
import { Text } from '@components/Text'
import avatar from '@assets/avatar.svg'


export function Header() {
    return (
        <Container>
            <HeaderTitleContainer>
                <MdDomain
                    style={BuildingsIconStyles}
                />
                <SubTitle
                    content='Minhas Empresas'
                />
            </HeaderTitleContainer>
            <HeaderUserContainer>
                <AvatarContainer>
                    <img
                        src={avatar}
                        alt='hublocal-avatar-placeholder'
                        width='52px'
                        height='52px'
                    />
                </AvatarContainer>
                <Text
                    content='Janiu'
                    style={UserTextStyle}
                />
                <MdOutlineKeyboardArrowDown
                    style={ArrowDownIconStyles}
                />
            </HeaderUserContainer>
        </Container>
    )
}