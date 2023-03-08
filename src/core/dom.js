/**
 *
 */
class Dom {
  /**
   * @param {*} selector
   */
  constructor(selector) {
    this.$el = typeof selector === 'string' ?
    document.querySelector(selector) : selector;
  }

  /**
   *
   * @param {string} html
   * @return {Dom|string}
   */
  html(html) {
    if (typeof html === 'string') {
      this.$el.innerHTML = html;
      return this;
    }
    return this.$el.outerHTML.trim();
  }

  /**
   *
   * @return {Dom}
   */
  clear() {
    this.html('');
    return this;
  }

  /**
   *
   * @param {*} node
   * @return {Dom}
   */
  append(node) {
    if (node instanceof Dom) {
      node = node.$el;
    }
    if (Element.prototype.append) {
      this.$el.append(node);
    } else {
      this.$el.appendChild(node);
    }
    return this;
  }
}

/**
 * @param  {*}selector
 * @return {Dom}
 */
export function $(selector) {
  return new Dom(selector);
}

$.create = (tagName, classes = '') => {
  const el = document.createElement(tagName);
  if (classes) {
    el.classList.add(classes);
  }
  return $(el);
};
