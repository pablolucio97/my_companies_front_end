import { CSSProperties } from 'react';
import {
    Container,
    Input,
    Label
} from './styles';
import { Props } from 'react-input-mask'

export interface TextInputMaskProps extends Props {
    id: string;
    name: string;
    label: string;
    inputStyle?: CSSProperties;
    inputClassName?: string;
    inputContainerStyle?: CSSProperties;
    inputContainerClassName?: string;
}

export function TextInputMask({
    id,
    name,
    label,
    inputClassName,
    inputStyle,
    inputContainerClassName,
    inputContainerStyle,
    ...rest
}: TextInputMaskProps) {
    return (
        <Container
            style={inputContainerStyle}
            className={inputContainerClassName}
        >
            <Label>{label}</Label>
            <Input
                type='text'
                id={id}
                name={name}
                style={inputStyle}
                className={inputClassName}
                {...rest}
            />
        </Container>
    )
}