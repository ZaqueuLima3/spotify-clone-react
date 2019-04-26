import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as PlaylistDetailsActions } from '../ducks/playlistDetails';

export function* getPlaylistDetais(action) {
  try {
    const response = yield call(api.get, `/playlists/${action.payload.id}?_embed=songs`);

    const { data } = response;

    yield put(PlaylistDetailsActions.getPlaylistDetailsSuccess(data));
  } catch (err) {
    console.log(err);
  }
}
