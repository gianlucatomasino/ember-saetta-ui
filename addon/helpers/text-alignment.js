import { helper } from '@ember/component/helper';

export default helper(function textAlignment([alignment]) {
  switch (alignment) {
    case 'left':
      return 'text-left';
    case 'right':
      return 'text-right';
    case 'center':
    default:
      return 'text-center';
  }
});
