export const schema = {
  type: "object",
  properties: {
    Food: { type: "string", enum: ["Lentil", "Rice", "Milk", "Vegetables"] },
    Utencils: { type: "string", enum: ["Tea Sets", "Spoons", "Plates"] },
    Toys: {
      type: "string",
      enum: ["Electric toys", "Board games", "Card games"],
    },
  },
  required: ["Food", "Utencils", "Toys"],
  dependencies: {
    Food: {
      properties: {
        foodQuantity: {
          type: "string",
          default: "10",
          title: "Food Quantity in Kgs",
        },
      },
      oneOf: [
        {
          properties: {
            Food: { enum: ["Lentil"] },
            foodType: {
              type: "string",
              enum: ["Masoor Dal", "Toor/Archar Dal", "Lobia", "Chickpea"],

              title: "Lentil",
            },
          },
        },
        {
          properties: {
            Food: { enum: ["Milk"] },
            foodType: {
              type: "string",
              enum: ["Silm Milk", "Cow Milk"],
              default: "Silm Milk",
              title: "Milk",
            },
          },
        },
        {
          properties: {
            Food: { enum: ["Rice"] },
            foodType: {
              type: "string",
              enum: ["Basmati Rice", "Brown Rice", "Jasmine Rice"],
              default: "Basmati Rice",
              title: "Rice",
            },
          },
        },
        {
          properties: {
            Food: { enum: ["Vegetables"] },
            foodType: {
              type: "string",
              enum: ["Tomato", "Potato", "Peas"],
              default: "Tomato",
              title: "Vegetables",
            },
          },
        },
      ],
    },
    Utencils: {
      properties: {
        utencilsQuantity: {
          type: "string",
          default: "10",
          title: "Utencils Quantity In Pcs",
        },
      },
    },
    Toys: {
      properties: {
        toysQuantity: {
          type: "string",
          default: "10",
          title: "Toys Quantity In Pcs",
        },
      },
    },
  },
};
