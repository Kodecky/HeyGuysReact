# 1 - useState - simple counter example

This a simple counter app showcasing on the useState hook.
Inside App.jsx file you can find the code containing comments.

## Tasks:

##### 1) Result
    - Inside components/elements folder: create a "Result" component for the text: "Your value is {count}" text to, import it inside App.jsx and use it.
    - The state for the count component has to be shared between the "Button" and "Result" components, therefore it needs to stay in the parent component.

##### 2) Button
     - Inside components/elements folder: create a "Button" component, import it inside App.jsx and use it.
     - Remember to pass the onClick prop here and receive it correctly in the component.

##### 3) Reset the count button
    - using the "Button" component created earlier, render a button that allows us to reset the count variable to 0

##### 4) Input
    - Inside components/elements folder: create an "Input" component for the input field, import it here and use it.
    - The state for the input component has to be shared between the "Button" and "Input" components, therefore it needs to stay in the parent component.
    - The input allows us to change the value of the count variable by a custom amount.
    - The input should be of type number
    - The input should have a button next to it that allows us to change the count variable by the value of the input.
