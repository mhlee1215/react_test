import React from 'react'
import PropTypes from 'prop-types';
import update from 'react-addons-update';

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

// Content.defaultProps = {
//     title: 'Default header'
// };

Content.propTypes = {
    title: PropTypes.number.isRequired
};

export default Content;