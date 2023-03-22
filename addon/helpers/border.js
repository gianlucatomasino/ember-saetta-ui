import { helper } from '@ember/component/helper';
import { typeOf } from '@ember/utils';

export default helper(function border([value]) {
  if (value === 'all') {
    return 'border border-neutral-100 rounded';
  }

  return '';
});
