import React from "react";

import { Navbar } from "react-bootstrap";

const Top = ({ background, variant, justification, edge, children }) => {
	let navbarClass = edge ? "border-bottom shadow-sm" : null;
	let childrenClass = justification
		? `d-flex justify-content-${justification}`
		: `d-flex`;

	return (
		<Navbar
			fixed={"top"}
			bg={background}
			variant={variant}
			className={navbarClass}
		>
			<div className={childrenClass}>{children}</div>
		</Navbar>
	);
};

export default Top;
