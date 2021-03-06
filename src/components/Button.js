import styled from 'styled-components'

export let ButtonContainer = styled.button `
    text-transform: capitalize;
    background: transparent;
    border: 0.1rem solid var(--lightBlue);
    border-color: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    font-size: 1.4rem;
    color:${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    margin: 0.2rem 0.5rem;
    transition: 0.5s ease-in-out;

        &:hover{
            background: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
            color: var(--mainBlue)
        }
        &:focus{
            outline: none;
        }
`