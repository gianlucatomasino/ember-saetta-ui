import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class SaettaTablePaginatorComponent extends Component {
  get isFirstPage() {
    if (this.args.currentPage === 1) return true;
    return false;
  }

  get isLastPage() {
    if (this.args.currentPage === this.args.totalPages) return true;
    return false;
  }

  @action
  onFirstPage() {
    this.args.onPageChange(1);
  }

  @action
  onLastPage() {
    this.args.onPageChange(this.args.totalPages);
  }

  @action
  onNextPage() {
    this.args.onPageChange(this.args.currentPage + 1);
  }

  @action
  onPreviousPage() {
    this.args.onPageChange(this.args.currentPage - 1);
  }
}
