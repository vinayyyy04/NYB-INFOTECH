export const initialState = {
  cars: [
    {
      id: 1,
      name: "Hundai Creta",
      color: "Black",
      price: "15 Lakhs",
    },
    {
      id: 2,
      name: "XUV 3XO",
      color: "Dark Blue",
      price: "13 Lakhs",
    },
    {
      id: 3,
      name: "Kia Seltos",
      color: "Ash",
      price: "14 Lakhs",
    },
    {
      id: 4,
      name: "Mahindra THAR ROXX",
      color: "Black",
      price: "23 Lakhs",
    },
    {
      id: 5,
      name: "Hundai Venue",
      color: "Matt black",
      price: "9.99 Lakhs",
    },
    {
      id: 6,
      name: "Kia Sonet",
      color: "Silver",
      price: "8.90 Lakhs",
    },
  ],
};

export function reducer(state, action) {
  switch (action.type) {

    case "ADD_CAR":
      return {
        ...state,
        cars: [...state.cars, action.payload],
      };

    case "SELL_CAR":
      return {
        ...state,
        cars: state.cars.filter(
          (car) => car.id !== action.payload
        ),
      };

    case "UPDATE_PRICE":
      return {
        ...state,
        cars: state.cars.map((car) =>
          car.id === action.payload.id
            ? { ...car, price: action.payload.price }
            : car
        ),
      };

    case "CLEAR_SHOWROOM":
      return {
        ...state,
        cars: [],
      };

    default:
      return state;
  }
}