import styled from "../../../styles/theme/Theme";

const Card = styled.div`
    border-radius: 15px;
    box-shadow: 0 0 26px lightgray;
    background-color: white;
    padding: 1em;
    transition: all .5s;
    width: 100%;

    &::hover {
        transform: scale(1.2);
        box-shadow: 0 0 0 36px gray;
    }
`

export default Card;