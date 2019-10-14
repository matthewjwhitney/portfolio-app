import React from 'react';
import { NavLink } from 'react-router-dom';

const AdapterNavLink = React.forwardRef((props, ref) => <NavLink innerRef={ref} {...props} />);

export default AdapterNavLink;