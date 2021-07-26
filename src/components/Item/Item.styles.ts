import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    border: 1px solid lightblue;
    border-radius: 20px;
    height: 100%;
    

    

    img{
        max-height: 250px;
        object-fit: cover;
        border-radius: 20px 20px 0 0;
    }

    div{
        font-family: Arial, Helvetica, sans-serif;
        padding: 1rem;
        height: 100%;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    
    button{
        width: 150px;
        border-radius: 20px;
        margin-bottom: 10px;
    }
`;