//* IMPORT
import { HttpClient } from "services";
import { ResponseData, PlaceHolderItem } from "types/Placeholder";

import { TYPES } from "./PlaceholderTypes";

//* Started pending thunk
const getDataPlacePending = () => {
	return {
		type: TYPES.GET_PLACEHOLDER_PENDING
	} as const;
};

//* Get data for thunk
const getDataPlaceSuccess = (data: PlaceHolderItem) => {
	return {
		type: TYPES.GET_PLACEHOLDER_SUCCESS,
		payload: data
	} as const;
};

//* Get error for thunk
const getDataPlaceError = (error: Error) => {
	return {
		type: TYPES.GET_PLACEHOLDER_ERROR,
		payload: error
	} as const;
};

// Action thunk Get data for placeholder
export const getPlaceholderInitiate = (): any => {
	return async (dispatch: (arg0: { type: TYPES; payload?: PlaceHolderItem | Error }) => void) => {
		try {
			dispatch(getDataPlacePending());

			const response: ResponseData = await HttpClient.getMethod(`${process.env.API_SERVER_DEMO}`);

			dispatch(getDataPlaceSuccess(response.data));
		} catch (error: unknown) {
			if (error instanceof Error) {
				dispatch(getDataPlaceError(error));
			}
		}
	};
};
