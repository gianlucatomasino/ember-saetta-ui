import { helper } from '@ember/component/helper';

/*  
  Force tailwind to include the following classes
  
  grid-cols-1
  grid-cols-2
  grid-cols-3
  grid-cols-4
  grid-cols-5
  grid-cols-6
  grid-cols-7
  grid-cols-8
  grid-cols-9
  grid-cols-10
  grid-cols-11
  grid-cols-12
*/

export default helper(function gridCols([cols] /*, named*/) {
  if (cols < 1) cols = 1;
  if (cols > 12) cols = 12;

  return `grid-cols-${cols}`;
});
