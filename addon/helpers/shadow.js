import { helper } from '@ember/component/helper';

export default helper(function shadow([value] /*, named*/) {
  if (value === 'all') return 'shadow-md';
  return 'shadow-none';
});
