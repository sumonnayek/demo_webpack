import React from 'react';

const GenericList = (props) => {
	const { list = [], renderComponent: ItemComponent, ...rest } = props;

	return list.map((item) => <ItemComponent key={item.id} {...item} {...rest} />);
};

export default GenericList;
export { GenericList };
