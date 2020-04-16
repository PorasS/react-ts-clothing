import { createSelector } from 'reselect';

const selectShopData = (state: any) => state.shopData;

export const selectData = createSelector(
    [selectShopData],
    shopData => shopData.collections
)