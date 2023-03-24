import { helper } from '@ember/component/helper';
import { isPresent } from '@ember/utils';

export default helper(function withDefault([value, defaultValue]) {
  if (isPresent(value)) return value;

  return defaultValue;
});
