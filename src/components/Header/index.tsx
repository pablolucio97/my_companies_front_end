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
    SignOutButton,
    Button,
    ActionsContainer
} from './styles';
import { MdDomain, MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowLeft } from 'react-icons/md'
import { SubTitle } from '@components/SubTitle'
import { Text } from '@components/Text'
import avatar from '@assets/avatar.svg'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@store/index';
import { useState } from 'react';
import { signOut } from '@store/auth/auth.store'

interface HeaderProps {
    renderStaticTitle: boolean
}

export function Header({ renderStaticTitle }: HeaderProps) {

    const { user } = useSelector((state: RootState) => state.auth)
    const dispatch = useDispatch()

    const [enableSignOutButton, setEnableSignOutButton] = useState(false)

    function handleSignOut() {
        dispatch(signOut())
        localStorage.removeItem('@my-companies:authToken')
    }

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
                                content={`Empresas do ${user.nome}`}
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
                    content={user.nome}
                    style={UserTextStyle}
                />
                {
                    enableSignOutButton ?
                        <Button
                            onClick={() => setEnableSignOutButton(!enableSignOutButton)}
                        >
                            <ActionsContainer>
                                <MdOutlineKeyboardArrowLeft
                                    style={ArrowDownIconStyles}
                                />
                                <SignOutButton
                                    onClick={handleSignOut}
                                >
                                    Sair
                                </SignOutButton>
                            </ActionsContainer>
                        </Button>
                        :
                        <Button
                            onClick={() => setEnableSignOutButton(!enableSignOutButton)}
                        >
                            <MdOutlineKeyboardArrowDown
                                style={ArrowDownIconStyles}
                            />
                        </Button>
                }
            </HeaderUserContainer>
        </Container >
    )
}