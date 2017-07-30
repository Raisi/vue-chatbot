import styled from 'vue-styled-components';
import {lighten} from 'polished';

/**
 * Styled Components
 */
const StyledTitle = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;


const StyledInput = styled.input`
  font-size: 1.25em;
  padding: 0.5em;
  text-align: center;
  margin: 0.5em;
  color: black;
  background: papayawhip;
  border: none;
  border-radius: 3px;

  &:hover {
    box-shadow: inset 1px 1px 2px rgba(0,0,0,0.1);
  }
`;


const btnProps = {primary: Boolean};

const StyledButton = styled('button', btnProps)`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  background: ${props => props.primary ? 'palevioletred' : 'white'};
  color: ${props => props.primary ? 'white' : lighten(0.6, '#000000')};
`;


class Test {



    /**
     * Actual Component
     * @type {{name: string, components: {StyledTitle: *, StyledInput: *}, data: (()), render: (())}}
     */
    render() {

        // const StyledLink = StyledButton.withComponent('a');
        const testClick = (event) => {
            console.log('Clicked');
        };


        const renderList = (h, list) => {
            return (
                list.map(item => <li>{item}</li>)
            );
        };

       return Test = {

            name: 'Test',
            components: {
                StyledTitle,
                StyledInput,
                StyledButton,
                // StyledLink,
            },

            data() {
                return {
                    msg: 'Helloi JSX',
                    testList: [
                        'Item 1',
                        'Item 2',
                    ],
                };
            },

            render(h) {
                console.log(this);
                return (
                    <div>
                        <styled-title>
                            {this.msg}
                        </styled-title>
                        <div class="rainsch">
                            <styled-input placeholder="Test" type="text"/>
                            <styled-input placeholder="Test" type="text" primary/>
                        </div>
                        <div>
                            <button onClick={testClick}> Test Button</button>
                            <styled-button onClick={() => testClick} primary> Test Button</styled-button>
                            <styled-button primary> Test Button</styled-button>
                        </div>
                        <div>
                            {renderList(h, this.testList)}
                        </div>
                    </div>
                );
            },
        };

    }
}


export default new Test().render();
