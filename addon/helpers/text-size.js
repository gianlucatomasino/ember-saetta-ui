import { helper } from '@ember/component/helper';

export default helper(function textSize([size]) {
  switch (size) {
    case 'xsmall':
      return 'text-xs';
    case 'small':
      return 'text-sm';
    case 'large':
      return 'text-lg';
    case 'xlarge':
      return 'text-xl';
    case 'normal':
    default:
      return 'text-base';
  }
});
