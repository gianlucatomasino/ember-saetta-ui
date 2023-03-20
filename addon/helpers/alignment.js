import { helper } from '@ember/component/helper';

export default helper(function alignment(_, { main, cross }) {
  let classes = [];

  switch (cross) {
    case 'start':
      classes.push('items-start');
      break;
    case 'end':
      classes.push('items-end');
      break;
    case 'center':
    default:
      classes.push('items-center');
  }

  switch (main) {
    case 'start':
      classes.push('justify-start');
      break;
    case 'end':
      classes.push('justify-end');
      break;
    case 'center':
    default:
      classes.push('justify-center');
  }

  return classes.join(' ');
});
