import React, { JSX } from 'react';
import styled from 'styled-components';

interface TitleProps {
    as?: keyof JSX.IntrinsicElements;
    children: React.ReactNode;
    fontWeight?: number;
    fontSize?: string;
}

const StyledTitle = styled.h1<{ fontWeight?: number; fontSize?: string }>`
    font-size: ${({ fontSize }) => fontSize || '20px'};
    color: ${({ theme }) => theme.colors.text};
    font-weight: ${({ fontWeight = 400 }) => fontWeight};
    text-transform: uppercase;
    margin-left: auto;
`;

const Title: React.FC<TitleProps> = ({
    as = 'h1',
    children,
    fontWeight,
    fontSize,
}) => {
    return (
        <StyledTitle fontWeight={fontWeight} fontSize={fontSize} as={as}>
            {children}
        </StyledTitle>
    );
};

export default Title;
