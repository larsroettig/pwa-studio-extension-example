/**
 * Determine if the content is fontawesome
 *
 * @param content
 * @returns {boolean}
 */
export default function detectFontAwesome(content) {
  return /:FontAwesome:/.test(content);
}
