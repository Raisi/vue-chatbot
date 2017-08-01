import styled from 'vue-styled-components';
import defaultTheme from './theme'

const floatButtonPropTypes = {
    opened: Boolean,
};

const FloatButton = styled('a', floatButtonPropTypes)`
  align-items: center;
  cursor: pointer;
  background-color: ${defaultTheme.headerBgColor};
  bottom: 32px;
  border-radius: 100%;
  box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.15);
  display: flex;
  fill: ${defaultTheme.headerFontColor};
  stroke: ${defaultTheme.headerFontColor};
  height: 56px;
  justify-content: center;
  position: fixed;
  right: 32px;
  transform: ${props => props.opened ? 'scale(0)' : 'scale(1)'};
  transition: transform .3s ease;
  width: 56px;
  z-index: 999;
`;



export default FloatButton;
