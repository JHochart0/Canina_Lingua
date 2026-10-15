import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

function PhoneButton(props) {
    const className = props.className;

    return (
        <a href="tel:0661970116" className={className}>
            <FontAwesomeIcon className="phone-icon" icon={faPhone} />
            <span>06 61 97 01 16</span>
        </a>
    );
}

export default PhoneButton;