import { CSSProperties, InputHTMLAttributes } from 'react';
import {
    Container,
    Input,
    Label
} from './styles';
export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string;
    name: string;
    label: string;
    inputStyle?: CSSProperties;
    inputClassName?: string;
    inputContainerStyle?: CSSProperties;
    inputContainerClassName?: string;
}

export function TextInput({
    id,
    name,
    label,
    inputClassName,
    inputStyle,
    inputContainerClassName,
    inputContainerStyle,
    ...rest
}: TextInputProps) {
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