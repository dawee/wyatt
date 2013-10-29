module.exports = {
  "el": 'view',
  "options": {
    "backgroundColor": "red",
    "width": 200
  },
  "tree": [
    {"el": "button"},
    {"el": "label"},
    {"el": "textfield"},
    {
      "el": "view",
      "egg": "spam",
      "eggegg": "spamspam"
    }
  ]
};