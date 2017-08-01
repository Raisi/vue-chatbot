import ChatbotContainer from './ChatbotContainer.jsx';
import Header from './Header.jsx';
import HeaderTitle from './HeaderTitle.jsx';
import HeaderIcon from './HeaderIcon.jsx';
import CloseIcon from './Icons/CloseIcon.jsx';
import FloatButton from './FloatButton.jsx';
import ChatIcon from './Icons/ChatIcon.jsx';
import Content from './Content.jsx';
import Input from './Input.jsx';
import Footer from './Footer.jsx';
import SubmitButton from './SubmitButton.jsx';
import SubmitIcon from './Icons/SubmitIcon.jsx';


const defaultProps = {
    floating: {
        type: Boolean,
        default: true,
    },
    opened: {
        type: Boolean,
        default: false,
    },

    placeholder: {
        type: String,
        default: 'Type the message ...',
    },

    hideSubmitButton: {
        type: Boolean,
        default: false,
    },
};

const Chatbot = {

    name: 'Chatbot',

    props: Object.assign({}, defaultProps),


    render() {
        return (
            <div class="cb">
                {
                    this.floating &&
                    <Float-button
                        class="cb-float-button"
                        opened={this.isOpen}
                        nativeOnClick={() => this.setChatbotVisibility(true)}
                    >
                        <Chat-icon />
                    </Float-button>
                }

                <Chatbot-container
                    class="cb-container"
                    floating={this.isFloating}
                    opened={this.isOpen}
                >


                    <Header
                        class="cb-header"
                    >
                        <Header-title class="cb-header__title">
                            Chatbot title
                        </Header-title>
                        <Header-icon
                            class="cb-header__close-button"
                            nativeOnClick={() => this.setChatbotVisibility(false)}
                        >
                            <Close-icon />
                        </Header-icon>
                    </Header>

                    <Content
                        class="cb-content"
                        floating={this.floating}
                    >
                    </Content>

                    <Footer
                        class="cb-footer"
                    >
                        <Input
                            type="textarea"
                            class="cb-input"
                            placeholder={this.inputInvalid ? '' : this.placeholder}
                            onKeyPress={this.handleKeyPress}
                            onChange={this.onValueChange}
                            value={this.inputValue}
                            floating={this.floating}
                            invalid={this.inputInvalid}
                            disabled={this.disabled}
                            hasButton={!this.hideSubmitButton}
                        />
                        {
                            !this.hideSubmitButton &&
                            <Submit-button
                                class="cb-submit-button"
                                nativeOnClick={this.handleSubmitButton}
                                invalid={this.inputInvalid}
                                disabled={this.disabled}
                            >
                                <Submit-icon />
                            </Submit-button>
                        }
                    </Footer>
                </Chatbot-container>
            </div>
        )
    },

    components: {
        Header,
        HeaderTitle,
        HeaderIcon,
        CloseIcon,
        ChatbotContainer,
        FloatButton,
        ChatIcon,
        Content,
        Footer,
        SubmitButton,
        SubmitIcon,
        Input,
    },

    data() {
        return {
            isFloating: this.floating,
            isOpen: this.opened || !this.floating,
            inputInvalid: false,
            disabled: true,
            inputValue: '',
            renderedSteps: [],
            previousSteps: [],
            currentStep: {},
            previousStep: {},
            steps: {},
            defaultUserSettings: {},
        }
    },

    methods: {
        setChatbotVisibility(state) {
            this.isOpen = state;
        },

        handleSubmitButton(ev) {
            console.log('Submit Click');
        },

        handleKeyPress(ev) {

        },

        onValueChange() {

        }

    },

};


export default Chatbot
