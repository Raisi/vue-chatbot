import Header from './Header.jsx';
import HeaderTitle from './HeaderTitle.jsx';
import HeaderIcon from './HeaderIcon.jsx';
import CloseIcon from './CloseIcon.jsx';


const Chatbot = {

    name: 'Chatbot',

    components: {
        Header,
        HeaderTitle,
        HeaderIcon,
        CloseIcon
    },

    render(h) {
        return (
            <Header
                class="Header"
            >
                <Header-title class="Header__title">
                    Chatbot title
                </Header-title>
                    <Header-icon
                        class="Header__close-button"
                    >
                        <Close-icon />
                    </Header-icon>
            </Header>
        )
    }
};


export default Chatbot
