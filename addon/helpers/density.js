import { helper } from '@ember/component/helper';

export default helper(function density([density]) {
  switch (density) {
    case 'comfortable':
      return 'gap-2';
    case 'compact':
      return 'gap-1';
    default:
      return 'gap-3';
  }
});
