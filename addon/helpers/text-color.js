import { helper } from '@ember/component/helper';

export default helper(function textColor([theme]) {
  switch (theme) {
    case 'secondary':
      return 'text-gray-500';
    case 'primary':
    default:
      return 'text-gray-800';
  }
});
