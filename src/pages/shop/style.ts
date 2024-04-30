import styled from "styled-components";


const CategoryWrapper = styled.div`
    width: 20%;
    height: 100vh;
    padding-top: 40px;  
    padding-left: 80px;
    
`;

const DivText = styled.div`
    color: #000;

    display: flex;
    align-items: center;
    margin-bottom: 40px;

`

const ColorCards = styled.div`
    width: "30px";
    height: "30px";
    border-radius: "4px";
`
const CardBtn = styled.button`
    width: 200px;
    padding: 12px 16px;
    border-radius: 4px;
    border: 2px solid black;
    font-size: 17px;
    font-weight: 600;
    cursor: pointer;
    position: absolute;
    top: 230px;  
    display: none;  
`

const IconCards = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;  
    transition: 3s; 
    gap:10px;
    display: none;
    position: absolute;
    right: 10px;
    top: 10px;
`
const IconCard = styled.div`
    width: 30px;
    height: 30px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;

`
const Card = styled.div`
    width: 32%;
    border-radius: 4px;
    border: 2px solid black;
    cursor: pointer;
    position: relative;
    transitionAll: 5s;

    &:hover ${CardBtn} {
        display: block;
    }

    &:hover ${IconCards} {
        display: block;
    }        
    
    &:hover img{
        opacity: 0.8;
    }    

`


export { CategoryWrapper, DivText, ColorCards, Card, CardBtn, IconCards, IconCard }