import styled from "styled-components";

export const Container = styled.div<{styles?: boolean}>`
    position: absolute;
    top: 60px;
    left: ${({styles})=> styles? "250px": "100px"};
    margin-left: 10px;
    margin-top: 8px;
`