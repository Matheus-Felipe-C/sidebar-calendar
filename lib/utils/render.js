/**
 * Function to render HTML templates as an interpolated string
 * @param {string} template 
 * @param {*} data 
 * @returns {string}
 */
export function render(template, data = {}) {
  return template.replace(/{{(.*?)}}/g, (_, key) => {
    return data[key.trim()] ?? "";
  });
}