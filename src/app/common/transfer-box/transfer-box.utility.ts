import { TransferBoxItem } from '../../interface/interface';

/**
 * Transfer all selected items from source to target array
 * @param source
 * @param target
 */
export const transferItems = (
  source: Array<TransferBoxItem>,
  target: Array<TransferBoxItem>
) => {
  // loop backward instead of forward here, due to we remove item of array while looping
  // refer: https://unspecified.wordpress.com/2009/02/12/thou-shalt-not-modify-a-list-during-iteration/
  for (let i = source.length - 1; i >= 0; i--) {
    if (source[i].selected) {
      target.unshift({ ...source[i], selected: false }); // add on top instead of bottom
      source.splice(i, 1);
    }
  }
};
