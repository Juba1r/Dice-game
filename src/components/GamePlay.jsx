import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RoleDice from "./RoleDice";
import { useState } from "react";


function GamePlay() {
    
    const [score, setScore] = useState();
    const [selectedNumber, setSelectedNumber] = useState();
    const [currentDice , setCurrentDice] = useState(1);

    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
      };

      const roleDice = () => {

        const randomNumber = generateRandomNumber(1,7);

        setCurrentDice((prev) => randomNumber);


      };

    return (
        <MainContainer>
            <div className="top_section">

            <TotalScore/>
            <NumberSelector

            selectedNumber={selectedNumber}
            roleDice={roleDice}
            />

            </div>

             <RoleDice
             currentDice = {currentDice}
             setCurrentDice = {setCurrentDice}
             />


       </MainContainer>
    );
}

export default GamePlay;

const MainContainer = styled.main`


padding-top: 70px;


.top_section{


    display: flex;
    justify-content: space-around;
    align-items: end;
}
  
  


`;





