import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStles";
import  Button  from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";


const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;

export default function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row>

        <Heading as="h1">The wild Oasis</Heading>
        <div>

        <Heading as="h2">Checkin in and Out</Heading>
        <Button>check me in</Button>
        <Button>check me out</Button>
        </div>
        </Row>
        <Row>
        <Heading as="h3">Form</Heading>
        <Row>
        <Input type="number" placeholder="number of guests" />
        <Input type="number" placeholder="number of guests" />
        </Row>
        </Row>
      </StyledApp>
    </>
  );
}
