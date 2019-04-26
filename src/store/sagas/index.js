import { all, takeLatest } from 'redux-saga/effects';

import { Types as PlaylistsTypes } from '../ducks/playlist';
import { Types as PlaylistDetailsTypes } from '../ducks/playlistDetails';

import { getPlaylists } from './playlists';
import { getPlaylistDetais } from './playlistDetails';

export default function* rootSaga() {
  yield all([
    takeLatest(PlaylistsTypes.GET_REQUEST, getPlaylists),
    takeLatest(PlaylistDetailsTypes.GET_REQUEST, getPlaylistDetais),
  ]);
}
