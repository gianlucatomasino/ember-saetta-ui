import { helper } from '@ember/component/helper';
import { typeOf } from '@ember/utils';
import { isPresent } from '@ember/utils';

export default helper(function padding([value]) {
  if (typeOf(value) === 'object') {
    if (isPresent(value['left'])) return `pl-${value['left']}`;
    if (isPresent(value['right'])) return `pr-${value['right']}`;
    if (isPresent(value['top'])) return `pt-${value['top']}`;
    if (isPresent(value['bottom'])) return `pb-${value['bottom']}`;
  }
});
