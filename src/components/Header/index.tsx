import {
    AvatarContainer,
    Container,
    HeaderTitleContainer,
    HeaderUserContainer,
    BuildingsIconStyles,
    ArrowDownIconStyles,
    UserTextStyle,
    BiggerArrowDownIconStyles,
    HeaderTitleDynamicContainer,
} from './styles';
import { MdDomain, MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { SubTitle } from '@components/SubTitle'
import { Text } from '@components/Text'
import avatar from '@assets/avatar.svg'

interface HeaderProps {
    renderStaticTitle: boolean
}

export function Header({ renderStaticTitle }: HeaderProps) {
    return (
        <Container>
            {
                renderStaticTitle ?
                    <HeaderTitleContainer>
                        <MdDomain
                            style={BuildingsIconStyles}
                        />
                        <SubTitle
                            content='Minhas Empresas'
                        />
                    </HeaderTitleContainer>
                    :
                    <HeaderTitleContainer>
                        <HeaderTitleDynamicContainer>
                            <MdDomain
                                style={BuildingsIconStyles}
                            />
                            <SubTitle
                                content='Empresas do Janiu...'
                            />
                            <MdOutlineKeyboardArrowDown
                                style={BiggerArrowDownIconStyles}
                            />
                        </HeaderTitleDynamicContainer>
                    </HeaderTitleContainer>
            }
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