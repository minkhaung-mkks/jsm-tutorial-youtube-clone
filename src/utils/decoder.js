const he = require('he')


/**
 * Decodes HTML entities and converts '<br>' to line breaks in the given string.
 * 
 * @param {string} htmlString - The string containing encoded HTML entities and '<br>' tags.
 * 
 * @returns {string} The decoded string with line breaks.
 */

export const decodeHtml = (htmlTxt) => {
    // Decode HTML entities
    const decodedText = he.decode(htmlTxt);
    // Replace <br> with line breaks
    const formattedText = decodedText.replace(/<br>/g, '\n');

    return formattedText
}