/**
 *
 */
export class DomListener {
  /**
     * @param {string} $root
     */
  constructor($root) {
    if (!$root) {
      throw new Error(`No $root provided for DOMListener`);
    }
    this.root = $root;
  }
}
