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

import defaultProps from './config/defaultProps';

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

    computed: {

    },

    data() {
        return {
            isFloating: this.floating,
            isOpen: this.opened || !this.floating,
            inputInvalid: false,
            disabled: true,
            inputValue: '',
            renderedSteps: [this.steps[this.currentStep.id]],
            previousSteps: [this.steps[this.currentStep.id]],
            currentStep: this.steps[0],
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
            this.submitUserMessage()
        },

        submitUserMessage() {

            const isInvalid = this.currentStep.validator && this.checkInvalidInput();

            if (!isInvalid) {
                const step = {
                    message: this.inputValue,
                    value: this.inputValue,
                };

                this.currentStep = Object.assign(
                    {},
                    this.defaultUserSettings,
                    this.currentStep,
                    step,
                );

                this.renderedSteps.push(this.currentStep);
                this.previousSteps.push(this.currentStep);
                this.disabled = true;
                this.inputValue = '';
            }
        },

        handleKeyPress(ev) {

        },

        onValueChange() {

        }

    },

};


export default Chatbot
