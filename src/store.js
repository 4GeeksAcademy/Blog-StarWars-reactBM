export const initialStore = () => {
  return {
    planets: [],
    vehicles: [],
    people: [],
    favorites: []
  }
}

export default function storeReducer(store, action = {}) {

  switch (action.type) {
    
    case "SET_PLANETS":

      return {
        ...store,
        planets: action.payload
      };


    case "SET_VEHICLES":

      return {

        ...store,
        vehicles: action.payload

      };

      case "SET_PEOPLE":

      return {
        ...store,
        people: action.payload
      };


    case "ADD_FAVORITE":

      if (

        store.favorites.some(

          fav => fav.name === action.payload.name

        )

      ) {

        return store

      }


      return {

        ...store,

        favorites: [

          ...store.favorites,

          action.payload

        ]

      };


    case "DELETE_FAVORITE":

      return {

        ...store,

        favorites:

          store.favorites.filter(

            fav =>

              fav.name !== action.payload

          )

      };

    default:

      throw Error('Unknown action.');
  }
}