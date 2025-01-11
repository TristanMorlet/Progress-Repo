// Components

// react apps are made of components. Pieces of UI that has its own logic and appearance.
// components can be as small as a button or as large as a whole page.

// React components are JS functions, that return markup

function MyButton() {
    return (
    <button>I am a button</button>
    );
}

// once declared it can be nested into another component
// react components always begin with a capital letter.
export default function myApp() {
    return (
    <div>
        <h1>Hello World</h1>
        <MyButton /> 
    </div>
    );
}

// export and default keyword specify the "main" component
// in the file.

// JSX 

// This markup syntax is called JSX, it is used in most
// react projects

// JSX is stricter than HTML, you must close things
// even like <br />. Your component also can't return
// more than one element. You have to wrap them into
// a shared parent like a big <div> wrapper or <> wrapper.


function AboutPage() {
    return (
        <>
            <h1>About</h1>
            <p>This is the about page <br /> how are you? </p>
        </>
    )
}

// If you want to port html to jsx, there are many online
// tools to convert.

// Adding styles

// in React you specify a CSS class with className.
// this works the same as HTML class attribute.

<img className="avatar"></img>


// and of course you can write the CSS for it in a styles.css file

// React does not care how you add CSS Files, you can use <link>
// tags Or consult documentation if you are using a build tool
// or framework.

// Displaying Data

// JSX lets you put markup into JavaScript. Curly braces
// are used to embed javascript from your code into the markup
// and display it to the user.

function UserName() {
    return (
        <h1>
            {user.name}
        </h1>
    );
}

// you can also use Javascript from JSX attributes
// using curly braces instead of quotes.

function UserImage() {
    return (
        <img className = "avatar" 
        src = {user.imageURL}></img>
    );
}


// You can put almost any expression into JSX curly braces.
// for exxample string concatenation.

const user = {
    name: "Spongebob",
    imageURL: 'https://madeupurl.com/spongebob.jpg',
    imageSize: 90,
};

export default function Profile() {
    return (
        <>
            <h1>{user.name}</h1>
            <img
                className="avatar"
                src={user.imageURL}
                alt={'Photo of ' + user.name}
                style = {{
                    width: user.imageSize,
                    height: user.imageSize
                }}
            />
        </>
    );
}

// notice the double curly braces, this is a regular {} object
// insiide the style = { } JSX curly braces.
// You can use the style attribute if your styles 
// depend on JS variables

// Conditional Rendering:

// In react there is no special syntax. We simply use
// the same techniques we use when writing normal
// JS. So if statements and turnary operators are still used

let content;

if (isLoggedIn) {
    content = <AdminPanel />;
} else {
    content = <LoginForm />;
}
return (
    <div>
        {content}
    </div>
);

// So we define the content variable, not initialized.
// If the user has logged in, we set the content to be the AdminPanel object
// if not, the user must log in, we set the content to Login Form.
// Once we have determined what the content is, we return it for the user.

// Here is an alternate with turnary

function ConditionalRendering({isLoggedIn}) {
    return (
        <div>
            {isLoggedIn ?  <AdminPanel /> : <LoginForm />}
        </div>
    );
}

// Rendering lists

// You will rely on JS features like for loop and array map function to
// rendeer lists of components.

// lets say we have an array of products

const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
];


// inside the component, use the map() function to transform
// the array of products into an array of <li> items.

const products = [
    { title: 'Cabbage', isFruit: false,id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
];


export default function ProductList() {
    const listItems = products.map(product =>
        <li 
            key = {product.id}
            style= {{
                color: product.isFruit? 'magenta' : 'darkgreen'
            }}
        >
            {product.title}
        </li>
    );
    
    return (
        <ul>{listItems}</ul>
    );
}


// notice the key attribute in the Li, For each item
// you should pass a string a number that uniquely 
// identifies them. Usually a key should come from
// your data, such as a database ID. React uses your 
// keys to know what happened if you later insert, delete
// or reorder the items.


// Responding to Events

// you can respond to events by declaring event handler functions inside
// components.

function MyButton() {
    function handleClick() {
        alert("clicky clicky winged chicky");
    }

    return (
        <button onClick={handleClick}>
            Click me
        </button>
    );
}

// notice the handleClick is not called. We do not call the event handler
// you only need t o pass it down. React will call your
// event handler when the user clicks the button.

// Updating the screen

// often you want components to "remember" information for them to display it
// For example, maybe after you want to count the number of times a button is clicked. 
// we do this by adding state to a component.

// first import useState from react.

import { useState } from 'react';

// now we can declare a statevariable inside a component.

function MyButton() {
    const [count, setCount] = useState(0);
}

// You will get two things from useState: the current state (count),
// and the function that lets you update it, (setCount).
// The names can be anything, but the convention is to write
// [item, setItem].

// The first time the button is displayed, count is 0, when we want to change
// that, call setCount() and pass a new value to ti. Clicking this button
// will increment this counter.

function MyButton() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <button onClick = {handleClick}>
            Clicked {count} times.
        </button>
    );
}

// React will call your component function. This time count will increment
// if you render the same component multiple times, each will have its own
// state.


import { useState } from 'react';

export default function MyApp() {
    return (
        <div>
            <h1> Counters that update seperately</h1>
            <MyButton />
            <MyButton />
        </div>
    );
}

// Notice how each button "remembers" its own count state and doesn't
// affect the other button.

// Using Hooks

// functions starting with "use" are called Hooks.
// useState is a built-in Hook provided by react. You can find other 
// built-in Hooks in the API reference. You can write your own Hooks by
// combining existing Hooks.

// Hooks are more restrictive. You can only call Hooks at the top
// of your components. Or other hooks.

// If  you want to use useState in a condition or loop, extract a new 
// component and put it in there.

// Sharing data between Components

// in the previous example, we made buttons that updated counters seperately.
// however, what if we wanted the opposite to happen?

// We may need components to share data and always update together.
// to make both MyButton components display the same count and update
// together, you need to move the state from the individual buttons "upwards"
// to the closest component containing all of them.

// In this case, when you click either button, the setCount is in myApp
// and it will change, and this will change both of the counts
// in MyButton. Here's how you code this.

export default function MyApp() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div>    
            <h1> Counters that update seperately</h1>
            <MyButton />    
            <MyButton />
        </div>
    );
}

function MyButton() {
    // code just moved ^^^
}

// now we pass the state down from MyApp to each MyButton. Togetehr with the shared click handler.
// You can pass information to MyButton using the JSX curly braces.

export default function MyApp() {
    const [count, setCount] = useState(0);
  
    function handleClick() {
      setCount(count + 1);
    }
  
    return (
      <div>
        <h1>Counters that update together</h1>
        <MyButton count={count} onClick={handleClick} />
        <MyButton count={count} onClick={handleClick} />
      </div>
    );
  }

// The information you pass down is called "Props". Now the MyApp 
// component contains the count state and the handeClick event handler. 
// It will pass both of them down as props to each of the buttons.
// Finally, change MyButton to rread the props you have passed from its
// parent component.

  function MyButton({ count, onClick }) {
    return (
      <button onClick={onClick}>
        Clicked {count} times
      </button>
    );
  }


  // When you click the button the onClick handler fires. Each button's onClick prop
  // was set to the handeClick function inside MyApp, so the code inside of it runs.
  // That code calls setCount(count + 1), incrementing the count state variable. 
  // The new count value is passed as a prop to each button, so they all show the new value.

  // This is called "lifting state up". By moving state up, you've shared it between components.

// completed example:
import { useState } from 'react';

export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}
