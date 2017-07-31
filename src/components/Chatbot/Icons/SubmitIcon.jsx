const SubmitIcon = {
    'name': 'SubmitIcon',

    props: {
        size: {
            type: Number,
            default: 20,
        },

    },

    render(h) {
        return (
            <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width={this.size}
                height={this.size}
                viewBox="0 0 500 500"
            >
                <g>
                    <g>
                        <polygon points="0,497.25 535.5,267.75 0,38.25 0,216.75 382.5,267.75 0,318.75"/>
                    </g>
                </g>
            </svg>
        )
    }
};


export default SubmitIcon;
