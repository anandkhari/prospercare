import sanitizeHtml from "sanitize-html";

const sanitizeOptions = {
  allowedTags: sanitizeHtml.defaults.allowedTags.concat([
    "img", "iframe", "h1", "h2", "h3", "h4", "h5", "h6", "span", "div", "u", "s", "strike", "sub", "sup"
  ]),
  allowedAttributes: {
    ...sanitizeHtml.defaults.allowedAttributes,
    "*": ["class", "style", "id", "dir", "align"],
    a: ["href", "name", "target", "rel", "title"],
    img: ["src", "srcset", "alt", "title", "width", "height", "loading", "class", "style"],
    iframe: ["src", "width", "height", "frameborder", "allow", "allowfullscreen", "class", "style"]
  },
  allowedSchemes: ["http", "https", "mailto", "tel", "data"],
};

export function sanitizeArticleContent(html = "") {
  if (!html) return "";
  return sanitizeHtml(html, sanitizeOptions);
}
