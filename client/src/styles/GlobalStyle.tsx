import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans', 'Noto Sans KR', sans-serif;
    color: #252525;
}
button{
    cursor:pointer;
}

li {
    list-style: none;
}
`;

export default GlobalStyle;
