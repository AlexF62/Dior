import React, { JSX } from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1<{ fontSize?: string }>`
    font-size: ${({ fontSize }) => fontSize || '20px'};
    color: ${({ theme }) => theme.colors.text};
`;

interface TitleProps {
    as: keyof JSX.IntrinsicElements;
    children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ as = 'h1', children }) => {
    return <StyledTitle as={as}>{children}</StyledTitle>;
};

export default Title;
