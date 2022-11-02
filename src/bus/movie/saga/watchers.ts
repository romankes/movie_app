import {SagaIterator} from 'redux-saga';
import {all, call, takeEvery} from 'redux-saga/effects';
import {types} from '../types';

import {
  createItem,
  fetchDetail,
  fetchItems,
  importItems,
  removeItem,
} from './workers';

function* watchFetchItems(): SagaIterator {
  yield takeEvery(types.FETCH_ITEMS, fetchItems);
}
function* watchFetchDetail(): SagaIterator {
  yield takeEvery(types.FETCH_DETAIL, fetchDetail);
}

function* watchCreateItem(): SagaIterator {
  yield takeEvery(types.CREATE_ITEM, createItem);
}
function* watchImportItems(): SagaIterator {
  yield takeEvery(types.IMPORT_ITEMS, importItems);
}

function* watchRemoveItem(): SagaIterator {
  yield takeEvery(types.REMOVE_ITEM, removeItem);
}

export function* watchMovie(): SagaIterator {
  yield all([
    call(watchFetchItems),
    call(watchFetchDetail),
    call(watchCreateItem),
    call(watchImportItems),
    call(watchRemoveItem),
  ]);
}
