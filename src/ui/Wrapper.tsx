import styled from 'styled-components';

interface WrapperProps {
    display?: 'flex' | 'grid';
    justifyContent?: string;
    paddingTop?: string;
}

export const Wrapper = styled.div<WrapperProps>`
    display: ${({ display = 'flex' }) => display};
    justify-content: ${({ justifyContent }) => justifyContent || 'initial'};
    padding-top: ${({ paddingTop = '0' }) => paddingTop};
`;
