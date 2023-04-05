import React from 'react';
import PropTypes from 'prop-types';

DemoComponent.propTypes = {
    
};

function DemoComponent(props) {
    return (
        <div>
             <div>đây là tuổi: {props.age}</div>
            <div>đây là tên: {props.displayName}</div>
        </div>
    );
}

export default DemoComponent;