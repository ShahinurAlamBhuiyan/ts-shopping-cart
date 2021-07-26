import styled from 'styled-components';



export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;
    

`;

export const Content = styled.div`
    border: 1px solid lightblue;
    border-radius: 20px;
    max-width: 500px;
    
    div{
        padding: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-family: Arial, Helvetica, sans-serif;
    }
    

    button{
        border-radius: 0px 0px 20px 20px;
        width: 100%;
    }

    img{
        max-height: 250px;
        object-fit: cover;
        border-radius: 20px 20px 0 0;
    }
`;
