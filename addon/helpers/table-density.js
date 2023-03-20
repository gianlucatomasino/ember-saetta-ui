import { helper } from '@ember/component/helper';

export default helper(function density([density]) {
  switch (density) {
    case 'comfortable':
      return 'p-2';
    case 'compact':
      return 'p-1';
    default:
      return 'p-3';
  }
});
