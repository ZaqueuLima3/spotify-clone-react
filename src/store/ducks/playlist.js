export const Types = {
  GET_REQUEST: 'playlist/GET_REQUEST',
  GET_SUCCESS: 'playlist/GET_SUCCESS',
  GET_RED: 'playlist/GET_RED',
};

const INITIAL_STATE = {
  data: [],
  loading: false,
  redirect: false,
};

export default function playlists(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_RED:
      return { ...state, redirect: true };
    case Types.GET_SUCCESS:
      return {
        ...state,
        loading: false,
        redirect: true,
        data: action.payload.data,
      };
    default:
      return state;
  }
}

export const Creators = {
  getPlaylistsRequest: () => {
    const action = { type: Types.GET_REQUEST };
    return action;
  },

  getPlaylistsSuccess: (data) => {
    const action = {
      type: Types.GET_SUCCESS,
      payload: { data },
    };
    console.log(action);
    return action;
  },
};
