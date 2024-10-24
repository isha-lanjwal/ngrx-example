// The NgRx lifecycle process is a state management process that uses the Redux pattern to manage 
// application data. The lifecycle includes the following steps:
// Components dispatch actions: Components send actions to the store
// Actions hold unique events: Actions hold unique events
// Reducers handle actions to update the store: Reducers handle actions to update the store
// Selectors obtain data from the store: Selectors obtain data from the store 

// Store to component proecess:
// store >> selector >> component

// component to store process:
// component >> action >> effects >> service >> db >> service >> effects >> action >> reducer >> store