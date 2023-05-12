import { ReactNode } from 'react';
import { Container, TitleContainer, CloseIconStyle, Divider, ActionContainer } from './styles';
import { SubTitle } from '@components/SubTitle';
import { Button } from '@components/Button';
import { MdClose } from 'react-icons/md'



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
    showAnimation?: boolean
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
    showAnimation = true
}: ModalBoxProps) {

    return (
        <Container
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className={modalClassName}
            overlayClassName={overlayClassName}
            showAnimation={showAnimation}
            ariaHideApp={false}
        >
            <TitleContainer>
                <SubTitle
                    content={title}
                />
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
                />
            </ActionContainer>
        </Container>
    )
}