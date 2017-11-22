import React from 'react'

class Content extends React.Component {
    render(){
        return (
            <div>
                <h2>Content</h2>
                <p> Hey! {this.props.title}</p>
            </div>
        );
    }
}

Content.defaultProps = {
    title: 'Default header'
};

export default Content;