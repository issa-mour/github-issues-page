import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './PageItem.css';

PageItem.propTypes = {
	className: PropTypes.string,
	text: PropTypes.string.isRequired,
	disabled: PropTypes.bool,
	selected: PropTypes.bool
};

function PageItem({ className, text, disabled, selected }) {
	const cls = classNames(className,'page_item', { 'disabled': disabled },  { 'selected': selected });
	return (<a href="#" className={cls}>{text}</a>);
}

export default PageItem;