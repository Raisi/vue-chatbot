import { injectGlobal } from 'vue-styled-components';

injectGlobal`
    @keyframes loading {
        0% { opacity: .2; }
        20% { opacity: 1; }
        100% { opacity: .2; }
    };
  
    @keyframes scale {
        100% { transform: scale(1); }
    }

    @keyframes invalidInput{
        25% { transform: rotate(-1deg); }
        100% { transform: rotate(1deg); }
    }
`;

const loading = 'loading';
const scale = 'scale';
const invalidInput = 'invalidInput';

export { loading, scale, invalidInput };
