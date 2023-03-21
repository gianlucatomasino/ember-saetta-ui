import { helper } from '@ember/component/helper';

export default helper(function textWeight([weight]) {
  switch (weight) {
    case 'light':
      return 'font-light';
    case 'medium':
      return 'font-medium';
    case 'bold':
      return 'font-bold';
    case 'normal':
    default:
      return 'font-normal';
  }
});
