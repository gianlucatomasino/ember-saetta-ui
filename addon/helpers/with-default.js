import { helper } from '@ember/component/helper';
import { isPresent } from '@ember/utils';

export default helper(function withDefault([value], { def }) {
  if (isPresent(value)) return value;

  return def;
});
