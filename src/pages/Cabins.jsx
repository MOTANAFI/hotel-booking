
import { useState } from "react";
import CabinTable from "../features/cabins/CabinTable";
import CreateCabinForm from "../features/cabins/CreateCabinForm"
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import Button from "../ui/Button";

function Cabins() {
  const [show, setShow] = useState(false)
  return (
    <>
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>Filte / Sort</p>
    </Row>
      <Row>
        <CabinTable />
      </Row>
        <Button onClick={() => setShow(!show)}>Add new Cabin</Button>
        {show && <CreateCabinForm />}
    </>
  );
}

export default Cabins;
