import { useContext } from "react";
import { Container } from "./history";
import { menuContext } from "../../context/menuContext";

function History() {

    const {menu} = useContext(menuContext)

    return (
        <Container styles={menu}>History</Container>
    )
}

export default History;