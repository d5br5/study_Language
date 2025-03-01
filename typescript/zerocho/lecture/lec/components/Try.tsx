import * as React from "react";
import { TryInfo } from "../types";

const Try: React.FunctionComponent<{ tryInfo: TryInfo; key: string }> = ({
	key,
	tryInfo,
}) => {
	return (
		<li>
			<div>{key}</div>
			<div>{tryInfo.try}</div>
			<div>{tryInfo.result}</div>
		</li>
	);
};

export default Try;
