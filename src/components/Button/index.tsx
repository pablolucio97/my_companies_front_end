import { ButtonHTMLAttributes } from 'react';
import ReactLoading from 'react-loading';
import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    loading?: boolean;
    variant?: 'primary' | 'secondary'
}

export function Button({
    title,
    loading,
    ...rest
}: ButtonProps) {

    return (
        <Container
            {...rest}
        >
            {loading ? (
                <ReactLoading
                    type='bubbles'
                    color='#FFFFFF'
                    height={40}
                    width={40}
                />
            ) : (
                title
            )}
        </Container>
    )
}