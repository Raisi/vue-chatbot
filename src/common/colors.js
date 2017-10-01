/**
 * Theme Colors
 **/

const colors = {
    green: 'rgb(145, 185, 128)',
    magenta: 'rgb(234, 80, 128)',
    cyan: 'rgb(98, 195, 208)',
    yellow: 'rgb(247, 170, 88)',
    blue: 'rgb(0, 159, 227)',
    violet: 'rgb(126, 109, 141)',
    purple: 'rgb(205, 90, 130)',
    black: 'rgb(0, 0, 0)',
    white: 'rgb(255, 255, 255)',
    grey: 'rgb(137,137,137)',
    lightgrey: 'rgb(239,239,239)',
    darkgrey: 'rgb(77,77,77)',
};


const getThemeColor = name => colors[name] ? colors[name] : null;


export { colors, getThemeColor }
