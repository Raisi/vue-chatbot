import styled from 'vue-styled-components';
import defaultTheme from './theme';

// TODO For all move to Theme Interface, that you only need to pass an Theme Object on an Provider

const Header = styled.div`
    align-items: center;
    background: ${ defaultTheme.headerBgColor };
    color: ${ defaultTheme.headerFontColor };
    display: flex;
    fill: ${ defaultTheme.headerFontColor };
    height: 56px;
    justify-content: space-between;
    padding: 0 10px;
`;

export default Header;
