import styled from 'vue-styled-components';
import defaultTheme from './theme';

// TODO For all move to Theme Interface, that you only need to pass an Theme Object on an Provider

const containerProps = {
    floating: Boolean,
    opened: Boolean,
};

const ChatbotContainer = styled('div', containerProps)`
  background-color: ${defaultTheme.background};
  border-radius: 10px;
  box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.15);
  font-family: ${defaultTheme.fontFamily};
  overflow: hidden;
  position: ${props => props.floating ? 'fixed' : 'relative'};
  bottom: ${props => props.floating ? '32px' : 'initial'};
  right: ${props => props.floating ? '32px' : 'initial'};
  width: 350px;
  z-index: 999;
  transform: ${props => props.opened ? 'scale(1)' : 'scale(0)'};
  transform-origin: bottom right;
  transition: transform .3s ease;

  @media screen and (max-width: 568px) {
    border-radius: ${props => props.floating ? '0' : ''};
    bottom: 0;
    height: 100%;
    right: 0;
    width: 100%;
  }
`;

export default ChatbotContainer;
