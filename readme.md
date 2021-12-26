// React Router DOM

1. Installation with typescript - 'npm install react-router-dom @types/react-router-dom'
2. exact and component don't have support in react-router v6. New way <Route path="/" element={<Home />} />
3. v6+ way of routing - 
    a. first wrap index.tsx with BrowserRouter
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </React.StrictMode>, 
        document.getElementById("root")
    );

    b. Now define routes inside App component
    <Routes>
        <Route path="/" element={<Home />} />   
    </Routes>







// React Typescript

1. React functional component returns JSX.Element
const Home: React.FC = (): JSX.Element => {
    return (
        <div>
            <h1>Home</h1>
        </div>
    );
}

2. If a React functional component has props define this way, but first put the types in interface InputProps
const InputField: React.FC<InputProps> = ({ type, name, value }): JSX.Element => {
    return (
        <div>
            <input type = {type} />
        </div>
    );
}


