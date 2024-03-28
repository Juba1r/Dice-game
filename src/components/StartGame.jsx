import styled from "styled-components"

const StartGame = ( {toggle} ) => {
  return (
    <Container>
        <div>
            <img src="dices.png" alt="Dices" />
            
        </div>
        
        
        <div className="content">
            <h1>DICE GAME</h1>

            <Button onClick={toggle}>Play now</Button>
        </div>

    </Container>
  );
};

export default StartGame;

const Container = styled.div`
    max-width: 1180px;
    height: 100vh;
    display: flex;
    margin: 0 auto;
    align-items: center;



.content{
    h1{
        font-size: 96px;
        white-space: nowrap;

    }
}


`;

const Button = styled.button`

display: flex;
padding: 10px 18px;
background-color: black;
border-radius: 3px ;
color: white;
min-width: 220px;
justify-content: center;
font-size: 16px;
cursor: pointer;
border: 1px solid transparent;
transition: 0.2s background ease-in;

&:hover{
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.2s background ease-in;


}

    
`;



