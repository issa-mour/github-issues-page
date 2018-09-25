import React from 'react';
import IntlRelativeFormat from 'intl-relativeformat';

export const intlRelativeFormat = new IntlRelativeFormat('en-US');
const IntlRelativeFormatContext = React.createContext(intlRelativeFormat);
export default IntlRelativeFormatContext;
