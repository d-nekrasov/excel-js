import {$} from '@core/dom';

/**
 *
 */
export class Excel {
  /**
     *
     * @param {string} selector
     * @param {object} options
     */
  constructor(selector='#app', options = []) {
    this.$el = $(selector);
    this.components = options.components;
  }

  /**
   *
   * @return {Dom}
   */
  getRoot() {
    const $root = $.create('div', 'excel');

    this.components.forEach((Component) => {
      const $el = $.create('div', Component.className);
      const component = new Component($el);
      $el.html(component.toHTML());
      $root.append($el);
    });

    return $root;
  }

  /**
   *
   */
  render() {
    this.$el.append(this.getRoot());
  }
}
