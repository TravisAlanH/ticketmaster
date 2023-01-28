let data = {
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
    },
    "type": {
      "type": "string",
    },
    "id": {
      "type": "string",
    },
    "test": {
      "type": "boolean",
    },
    "url": {
      "type": "string",
    },
    "locale": {
      "type": "string",
    },
    "externalLinks": {
      "type": "object",
      "properties": {
        "facebook": {
          "type": "array",
          "items": [
            {
              "type": "object",
              "properties": {
                "url": {
                  "type": "string",
                },
              },
              "required": ["url"],
            },
          ],
        },
        "musicbrainz": {
          "type": "array",
          "items": [
            {
              "type": "object",
              "properties": {
                "id": {
                  "type": "string",
                },
              },
              "required": ["id"],
            },
          ],
        },
      },
      "required": ["facebook", "musicbrainz"],
    },
    "images": {
      "type": "array",
      "items": [
        {
          "type": "object",
          "properties": {
            "ratio": {
              "type": "string",
            },
            "url": {
              "type": "string",
            },
            "width": {
              "type": "integer",
            },
            "height": {
              "type": "integer",
            },
            "fallback": {
              "type": "boolean",
            },
          },
          "required": ["ratio", "url", "width", "height", "fallback"],
        },
        {
          "type": "object",
          "properties": {
            "ratio": {
              "type": "string",
            },
            "url": {
              "type": "string",
            },
            "width": {
              "type": "integer",
            },
            "height": {
              "type": "integer",
            },
            "fallback": {
              "type": "boolean",
            },
          },
          "required": ["ratio", "url", "width", "height", "fallback"],
        },
        {
          "type": "object",
          "properties": {
            "ratio": {
              "type": "string",
            },
            "url": {
              "type": "string",
            },
            "width": {
              "type": "integer",
            },
            "height": {
              "type": "integer",
            },
            "fallback": {
              "type": "boolean",
            },
          },
          "required": ["ratio", "url", "width", "height", "fallback"],
        },
        {
          "type": "object",
          "properties": {
            "ratio": {
              "type": "string",
            },
            "url": {
              "type": "string",
            },
            "width": {
              "type": "integer",
            },
            "height": {
              "type": "integer",
            },
            "fallback": {
              "type": "boolean",
            },
          },
          "required": ["ratio", "url", "width", "height", "fallback"],
        },
        {
          "type": "object",
          "properties": {
            "ratio": {
              "type": "string",
            },
            "url": {
              "type": "string",
            },
            "width": {
              "type": "integer",
            },
            "height": {
              "type": "integer",
            },
            "fallback": {
              "type": "boolean",
            },
          },
          "required": ["ratio", "url", "width", "height", "fallback"],
        },
        {
          "type": "object",
          "properties": {
            "ratio": {
              "type": "string",
            },
            "url": {
              "type": "string",
            },
            "width": {
              "type": "integer",
            },
            "height": {
              "type": "integer",
            },
            "fallback": {
              "type": "boolean",
            },
          },
          "required": ["ratio", "url", "width", "height", "fallback"],
        },
        {
          "type": "object",
          "properties": {
            "ratio": {
              "type": "string",
            },
            "url": {
              "type": "string",
            },
            "width": {
              "type": "integer",
            },
            "height": {
              "type": "integer",
            },
            "fallback": {
              "type": "boolean",
            },
          },
          "required": ["ratio", "url", "width", "height", "fallback"],
        },
        {
          "type": "object",
          "properties": {
            "ratio": {
              "type": "string",
            },
            "url": {
              "type": "string",
            },
            "width": {
              "type": "integer",
            },
            "height": {
              "type": "integer",
            },
            "fallback": {
              "type": "boolean",
            },
          },
          "required": ["ratio", "url", "width", "height", "fallback"],
        },
        {
          "type": "object",
          "properties": {
            "ratio": {
              "type": "string",
            },
            "url": {
              "type": "string",
            },
            "width": {
              "type": "integer",
            },
            "height": {
              "type": "integer",
            },
            "fallback": {
              "type": "boolean",
            },
          },
          "required": ["ratio", "url", "width", "height", "fallback"],
        },
        {
          "type": "object",
          "properties": {
            "ratio": {
              "type": "string",
            },
            "url": {
              "type": "string",
            },
            "width": {
              "type": "integer",
            },
            "height": {
              "type": "integer",
            },
            "fallback": {
              "type": "boolean",
            },
          },
          "required": ["ratio", "url", "width", "height", "fallback"],
        },
      ],
    },
    "classifications": {
      "type": "array",
      "items": [
        {
          "type": "object",
          "properties": {
            "primary": {
              "type": "boolean",
            },
            "segment": {
              "type": "object",
              "properties": {
                "id": {
                  "type": "string",
                },
                "name": {
                  "type": "string",
                },
              },
              "required": ["id", "name"],
            },
            "genre": {
              "type": "object",
              "properties": {
                "id": {
                  "type": "string",
                },
                "name": {
                  "type": "string",
                },
              },
              "required": ["id", "name"],
            },
            "subGenre": {
              "type": "object",
              "properties": {
                "id": {
                  "type": "string",
                },
                "name": {
                  "type": "string",
                },
              },
              "required": ["id", "name"],
            },
            "type": {
              "type": "object",
              "properties": {
                "id": {
                  "type": "string",
                },
                "name": {
                  "type": "string",
                },
              },
              "required": ["id", "name"],
            },
            "subType": {
              "type": "object",
              "properties": {
                "id": {
                  "type": "string",
                },
                "name": {
                  "type": "string",
                },
              },
              "required": ["id", "name"],
            },
            "family": {
              "type": "boolean",
            },
          },
          "required": ["primary", "segment", "genre", "subGenre", "type", "subType", "family"],
        },
      ],
    },
    "upcomingEvents": {
      "type": "object",
      "properties": {
        "_total": {
          "type": "integer",
        },
        "ticketmaster": {
          "type": "integer",
        },
        "_filtered": {
          "type": "integer",
        },
      },
      "required": ["_total", "ticketmaster", "_filtered"],
    },
    "_links": {
      "type": "object",
      "properties": {
        "self": {
          "type": "object",
          "properties": {
            "href": {
              "type": "string",
            },
          },
          "required": ["href"],
        },
      },
      "required": ["self"],
    },
  },
  "required": ["name", "type", "id", "test", "url", "locale", "externalLinks", "images", "classifications", "upcomingEvents", "_links"],
};

export default data;
