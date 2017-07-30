<template>
    <div id="app">
        <Chatbot></Chatbot>
    </div>
</template>

<script>
    import Hello from './components/Hello';
    import Test from './components/Test.jsx';
    import Chatbot from './components/Chatbot/Chatbot.jsx';

    export default {
        name: 'app',
        components: {
            Hello,
            Test,
            Chatbot
        },
    };
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2C3E50;
        margin-top: 60px;
    }
</style>
