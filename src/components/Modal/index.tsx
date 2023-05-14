import { ReactNode } from 'react';
import {
    Container,
    TitleContainer,
    CloseIconStyle,
    Divider,
    ActionContainer,
    ModalTitle
} from './styles';
import { Button } from '@components/Button';
import { MdClose } from 'react-icons/md'
import { useTheme } from 'styled-components'

interface ModalBoxProps {
    isOpen: boolean;
    onRequestClose: () => void;
    title: string;
    confirmButtonTitle: string;
    onConfirm: () => void;
    onCancel: () => void;
    children?: ReactNode;
    modalClassName?: string;
    overlayClassName?: string;
    showAnimation?: boolean;
    variant?: 'primary' | 'delete'
}

export function ModalBox({
    isOpen,
    onRequestClose,
    children,
    confirmButtonTitle,
    onCancel,
    onConfirm,
    title,
    modalClassName,
    overlayClassName,
    showAnimation = true,
    variant = 'primary'
}: ModalBoxProps) {

    const theme = useTheme()

    return (
        <Container
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className={modalClassName}
            overlayClassName={overlayClassName}
            showAnimation={showAnimation}
            ariaHideApp={false}
        >
            <TitleContainer
                style={{
                    background: variant === 'primary' ?
                        theme?.colors.primary :
                        theme?.colors.error
                }}
            >
                <ModalTitle>
                    {title}
                </ModalTitle>
                <MdClose
                    onClick={onCancel}
                    style={CloseIconStyle}
                />
            </TitleContainer>
            {children}
            <Divider />
            <ActionContainer>
                <Button
                    onClick={onConfirm}
                    title={confirmButtonTitle}
                    style={{
                        background: variant === 'primary' ?
                            theme?.colors.primary :
                            theme?.colors.error
                    }}
                />
            </ActionContainer>
        </Container>
    )
}