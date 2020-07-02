import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const List = styled.div`
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
`;

export const Item = styled.div`
    background-color: ${props => (props.active ? "#e4e4e4" : "#f5f5f5")};
    padding: 15px;

    &:first-child {
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
    }

    &:not(:last-child) {
        border-bottom: 1px solid #dbdbdb;
    }
`;

export const Column = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 20px 15px;
`;

export const Counter = styled.p`
    color: #363636;
    font-size: 18px;
    font-weight: 700;
`;

export const Title = styled.h1`
    color: #363636;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.125;
`;

export const Body = styled(Title)`
    color: #4a4a4a;
    font-weight: 400;
    margin-top: 10px;
`;

export const Date = styled.time`
    align-items: center;
    background-color: #363636;
    border-radius: 5px;
    color: #fff;
    display: inline-flex;
    font-size: 12px;
    height: 30px;
    justify-content: center;
    padding: 5px 10px;
`;

export const Info = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
`;

export const Delete = styled.div`
    padding: 10px;
`;

export const FAIcon = styled(FontAwesomeIcon)`
    color: #808080;
`;