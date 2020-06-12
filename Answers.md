## 1. What problem does the context API help solve?

<p>Context provides a way to share values between components without having to explicitly pass a prop through every level of the tree.</p>

## 2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

<p>Actions - Since the Redux store is read-only, the only way to modify application state when using Redux is by dispatching actions using action creators. Actions in Redux are packets of information that contain and action type and some data that we want associated with that action type. Actions are dispatched to our reducer functions as an argument.  </p>

<p>Reducers - Reducers calculate the new version of state based on the current state and a given Action. Reducers are pure functions (they produce no side effects) and are the glue that bind together our Actions and our Store. Reducers will NEVER update state directly, but will always return a new object, thus lending themselves to the pattern of Immutability really well. </p>

<p>Store - Everything that changes within the application will be represented as the store. The store contains our state for our application. </p>

<p>"Single Source of Truth" - The state of your whole application is stored in an object tree within a single store. </p>


## 3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

<p> Your application state is global, and your component state is local. Flux or a flux-like library like Redux, use what they call "stores" to hold application state. That means any component, anywhere in the app can access it (kind of like a database) so long as they hook into it.</p>

<p>Component state however, lives within that specific component. As such, it can only be updated within that component and passed down to its children via props. </p>

## 4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

<p>Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object. That function receives the store's dispatch method, which is then used to dispatch regular synchronous actions inside the body of the function once the asynchronous operations have completed.</p>


## 5. What is your favorite state management system you've learned and this sprint? Please explain why!

Right now, because of the issues I've had this entire sprint, I'm going to say Context API may be better. Redux and all the stuff we learned with it is hard for me to understand at the moment. 