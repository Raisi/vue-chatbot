import ChatbotContainer from './ChatbotContainer.jsx';
import Header from './Header.jsx';
import HeaderTitle from './HeaderTitle.jsx';
import HeaderIcon from './HeaderIcon.jsx';
import CloseIcon from './Icons/CloseIcon.jsx';
import FloatButton from './FloatButton.jsx';
import ChatIcon from './Icons/ChatIcon.jsx';
import Content from './Content.jsx';


const defaultProps = {
    floating: {
        type: Boolean,
        default: true,
    },
    opened: {
        type: Boolean,
        default: false,
    }
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
                        class="rsc-float-button"
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
                        class="rsc-content"
                        floating={this.floating}
                    >
                    </Content>
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
        Content
    },

    data() {
        return {
            isFloating: this.floating,
            isOpen: this.isOpen,
        }
    },

    methods: {
        setChatbotVisibility(state) {
            this.isOpen = state;
        },
    },

};


export default Chatbot
