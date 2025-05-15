export const getCardThumbnailPath = (cardAssetBundleName, trained) => `/thumbnail/chara/${cardAssetBundleName}_${getSuffix(trained)}.png`;
export const getCardImagePath = (cardAssetBundleName, trained) => `/character/member/${cardAssetBundleName}/card_${getSuffix(trained)}.png`;
const getSuffix = (trained) => (trained ? 'after_training' : 'normal');
