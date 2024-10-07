# Critical thinking thought for frontend developer test
# As developer every approach required reason

### State Management - Composition Api or options Api ?

Both ! I think its good practice to apply both approach for this task to understand how the state managegement work for vue
As compostion Api giving more maintainable, and reusable way to handle component logic
while options Api where logic is organized by type and spread across different sections of the component.

### How was the data being pass down ?

Well instead of props drilling, I prefer V-slot for better separation of concerns and cleaner code, as it enables child components to define their own rendering logic while still receiving data from the parent. For example V-slot can easily jump to child 4 (if require) while props driling has to follow the rule (parent -> child 1 -> child 2 -> child 3 -> child 4)

### Files management ?

I split it into proper file structure where its have components, helper, pages and every page will be divided into hook and index.
Inside the hook where the magic happen focusing on fetching data and manipulation of it. It will then pass down to index component focusing on rendering the UI. So anything related to data, developer can easily find them.

### Helper page ?

Any function that reusable and require across component will be store here for easier other developer to use

### Reusable Component ? (DRY) 

So some component are great for making it reusable to avoid duplication same code for example articleCard and card component.
Developer just require to pass the props and its good to go !

### Why SVG instead PNG and other ?

SVG is fast and lightweight since it build based on code. Its perfect for scaling into responsive web design since the picture will be not downgrade

### Cross browser resolution ?

1. CSS grid: My first approach was using grid and then switch back to flex since for browsers like IE 10 and Safari 8 was not supported
2. ES6 Features: I transpile modern JavaScript code using tools like Babel to convert ES6+ features into ES5, which is supported by older browsers 
3. CSS prefix: Ensure the build process automatically adds vendor prefixes to required CSS properties.
4. Polyfills: Its for other cross browser do not support certain modern JavaScript features like Promises, fetch, or Object.assign.

### How do you improve in sense of speed or optimization ?

Lazy load for optimisation since this approach will render the UI or pages that only required

### How do you manage CSS

So we use the scss to share the same css to other component. This makes code much more cleaner and much more maintainability since everything inside one file only

### What can be improve ?

Well in term UI/UX the article can be limit to 5 only first for mobile screen size and the rest is 8. This is to avoid overwhelming as screen size small and user required to scroll more. It should have arrow down button to show all. 