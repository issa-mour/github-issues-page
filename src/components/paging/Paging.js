import React from 'react';
// import PropTypes from 'prop-types';

import PageItem from './PageItem';
import './Paging.css';
// Paging.propTypes = {
    
// };

function Paging(){
	return <div className="paging">
		<PageItem className="paging_item" text="Previous" disabled={true} />
		<PageItem className="paging_item" text="1" selected={true} />
		<PageItem className="paging_item" text="2" />
		<PageItem className="paging_item" text="3" />
		<PageItem className="paging_item" text="4" />
		<PageItem className="paging_item" text="5" />
		<PageItem className="paging_item" text="..." disabled={true} />
		<PageItem className="paging_item" text="12" />
		<PageItem className="paging_item" text="13" />
		<PageItem className="paging_item" text="Next" />
	</div>;
}

export default Paging;