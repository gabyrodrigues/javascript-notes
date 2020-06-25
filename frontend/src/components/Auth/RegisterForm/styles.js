import styled from 'styled-components';

export const Form = styled.form`
    display: block;
`;

export const Field = styled.div`
    display: flex;
    flex-direction: column;

    & + div {
        margin-top: 20px;
    }
`;

export const Label = styled.label`
    color: #363636;
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 10px;
`;

export const Input = styled.input`
    border: 2px solid #ebebeb;
    border-radius: 5px;
    padding: 10px 15px;
`;

export const Actions = styled.div`
    display: flex;
    justify-content: space-between;

    a {
        border-radius: 5px;
        color: #694ed8;
        font-size: 16px;
        padding: 10px;
        text-decoration: none;

        &:hover {
            background-color: #f9f9f9;
        }
    }
`;

export const Button = styled.button`
    background-color: transparent;
    border: 1px solid #694ed8;
    border-radius: 5px;
    color: #694ed8;
    font-size: 16px;
    padding: 10px;

    &:hover {
        background-color: #694ed8;
        color: #fff;
    }
`;