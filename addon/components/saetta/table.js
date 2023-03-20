import Component from '@glimmer/component';

export default class SaettaTableComponent extends Component {
  get isFirstPage() {
    if (this.args.pagination.number === 1) return true;
    return false;
  }

  get isLastPage() {
    if (this.args.pagination.number === this.args.pagination.totalPages)
      return true;
    return false;
  }
}
