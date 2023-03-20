import { helper } from '@ember/component/helper';

export default helper(function size(_, { height, width }) {
  let classes = [];
  if (width === 'full') classes.push('w-full');
  if (height === 'full') classes.push('h-full');

  return classes.join(' ');
});
