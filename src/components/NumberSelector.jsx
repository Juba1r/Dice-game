import styled from "styled-components";
import { useState } from "react";

function NumberSelector({selectedNumber, setSelectedNumber} ) {

    const arrNumber = [1, 2, 3, 4, 5, 6];
    
    return (
        <NumberSelectorContainer>
        <div className="flex">


            {arrNumber.map((value,i) => (
            <Box isSelected={value == selectedNumber} key={i} onClick={() => setSelectedNumber(value)}>{value}</Box>))}
            

            
        </div>
        <p>Select Number</p>
        
        </NumberSelectorContainer>
    );
}

export default NumberSelector;


const NumberSelectorContainer = styled.div`



display: flex;
flex-direction: column;
align-items: end;
    
.flex{
    display: flex;
    gap: 24px;
}

p{

    font-size: 24px;
    font-weight: 700px;
}


`;

const Box = styled.div`

    border: 2px solid black;
    width: 72px;
    height: 72px;
    font-size: 24px;
    font-weight: 800;
    display: grid;
    place-items: center;
    background-color: ${(props) => (props.isSelected ? "black" : "white")};
    color: ${(props) => (!props.isSelected ? "black" : "white")};
    


`;

