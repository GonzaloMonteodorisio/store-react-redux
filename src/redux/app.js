import Redux, { CreateStore } from '.redux';
console.log(Redux)

//###### Reducers
const defaultGamesState = {
    pokemon: 10
}

const gamesReducer = (state = defaultGamesState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

//###### Store
const store = CreateStore(gamesReducer);

console.info(`Estado inicial: ${store.getState()}`);
store.subscribe(() => {
    console.log(`Cambio de Estado: ${store.getState()}`);
});
