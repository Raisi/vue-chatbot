import ChatbotContainer from './ChatbotContainer.jsx';
import Header from './Header.jsx';
import HeaderTitle from './HeaderTitle.jsx';
import HeaderIcon from './HeaderIcon.jsx';
import CloseIcon from './Icons/CloseIcon.jsx';
import FloatButton from './FloatButton.jsx';
import ChatIcon from './Icons/ChatIcon.jsx';


const defaultProps = {
    floating: {
        type: Boolean,
        default: true
    },
    opened: {
        type: Boolean,
        default: false
    }
};

const Chatbot = {

    name: 'Chatbot',

    props: Object.assign({}, defaultProps),

    components: {
        Header,
        HeaderTitle,
        HeaderIcon,
        CloseIcon,
        ChatbotContainer,
        FloatButton,
        ChatIcon
    },

    render(h) {
        return (
            <div class="cb">
                {
                    this.floating &&
                    <Float-button
                        className="rsc-float-button"
                        opened={this.opened}
                        onClick={() => 'Float clicked'}
                    >
                        <Chat-icon />
                    </Float-button>
                }

                <Chatbot-container
                    class="cb-container"
                    floating={this.floating}
                    opened={this.opened}
                >


                    <Header
                        class="cb-header"
                    >
                        <Header-title class="cb-header__title">
                            Chatbot title
                        </Header-title>
                        <Header-icon
                            class="cb-header__clo>se-button"
                        >
                            <Close-icon />
                        </Header-icon>
                    </Header>
                </Chatbot-container>
            </div>
        )
    }
};


export default Chatbot
