// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable jsx-a11y/alt-text */
//* LIB
// import useStoreTodo from "hooks/useSelectorPlace";
import React, { FC } from "react";
import { useRecoilValueLoadable } from "recoil";
// eslint-disable-next-line import/order
import { userState } from "state";

//* IMPORT
import logo from "static/logo.png";
import { getConfig } from "utils/config";
import { Box, Header, Text } from "zmp-ui";

import appConfig from "../../../app-config.json";

export const Welcome: FC = () => {
	const user = useRecoilValueLoadable(userState);

	console.log(user);
	return (
		<>
			<Header
				className="app-header no-border pl-4 flex-none pb-[6px]"
				showBackIcon={false}
				title={
					(
						<Box flex alignItems="center" className="space-x-2">
							<img
								className="w-8 h-8 rounded-lg border-inset"
								src={getConfig((c) => c.template.headerLogo) || logo}
							/>
							<Box>
								<Text.Title size="small">{appConfig.app.title}</Text.Title>
								{user.state === "hasValue" ? (
									<Text size="xxSmall" className="text-gray">
										Welcome, {user.contents.name}!
									</Text>
								) : (
									<Text>...</Text>
								)}
							</Box>
						</Box>
					) as unknown as string
				}
			/>
		</>
	);
};
