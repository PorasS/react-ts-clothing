import { createSelector } from 'reselect';

const selectShopData = (state: any) => state.shopData;

export const selectData = createSelector(
    [selectShopData],
    shopData => shopData.collections
)

export const selectCollection = (collectionUrlParam: string) => createSelector(
    [selectData],
    collections => collections ? collections[collectionUrlParam] : null
)

export const selectCollectionForPreview = createSelector(
    [selectData],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
)