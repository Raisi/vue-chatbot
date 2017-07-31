import styled from 'vue-styled-components';

const floatButtonProps = {
    floating: Boolean,
};

const Content = styled('div', floatButtonProps)`
  height: 400px;
  overflow-y: scroll;
  margin-top: 2px;
  padding-top: 6px;

  @media screen and (max-width: 568px) {
    height: ${props => props.floating ? 'calc(100% - 112px)' : ''};
  }
`;

export default Content;
