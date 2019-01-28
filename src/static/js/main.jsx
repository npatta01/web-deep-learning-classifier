//import { Button } from 'reactstrap';
//import React from 'react';
const Button = window.Reactstrap.Button;


const Collapse = window.Reactstrap.Collapse;
const Navbar = window.Reactstrap.Navbar;
const NavbarBrand = window.Reactstrap.NavbarBrand;
const Nav = window.Reactstrap.Nav;
const NavItem = window.Reactstrap.NavItem;
const NavLink = window.Reactstrap.NavLink;


const Router = window.ReactRouterDOM.BrowserRouter;
const Route = window.ReactRouterDOM.Route;
const ReactMarkdown = window.ReactMarkdown;

const Form = window.Reactstrap.Form;
const FormGroup = window.Reactstrap.FormGroup;
const Label = window.Reactstrap.Label;
const Input = window.Reactstrap.Input;
const axios = window.axios;



//import { Button } from 'reactstrap';

// Obtain the root 
const rootElement = document.getElementById('root');


class About extends React.Component {
    //

// Use the render function to return JSX component
    render() {
        return (

            <div>
                About
                <ReactMarkdown source={window.APP_CONFIG.about}/>
            </div>
        );
    }
}


// Create a ES6 class component
class MainPage extends React.Component {
    //

    constructor(props) {
        super(props)
        this.state = {
            file: null,
            predictions: [],
            imageSelected: false,
            url: null
        }
    }

    _onFileUpload = (event) => {
        this.setState({
            rawFile: event.target.files[0],
            file: URL.createObjectURL(event.target.files[0]),
            imageSelected: true
        })
    }

    _onUrlChange = (event) => {
        const url = event.target.value;
        if ((url.length > 5) && (url.indexOf("http") === 0)) {
            this.setState({
                file: url,
                imageSelected: true
            })
        }

    }

    _clear= async (event) => {
        this.setState({
            file: null,
            imageSelected: false,
            predictions: [],
            rawFile: null
        })
    }

    _predict = async (event) => {

        let res = null;
        if (this.state.rawFile) {
            const data = new FormData();
            data.append('file', this.state.rawFile);
            res = await axios.post('/api/classify', data);
        } else {
            res = await axios.get('/api/classify', {
                params: {
                    url: this.state.file
                }
            });

        }

        const payload = res.data;

        this.setState({predictions: payload.predictions});
        console.log(payload)

    }


    renderPrediction() {
        const predictions = this.state.predictions || [];

        if (predictions.length > 0) {

            const predictionItems = predictions.map((item) =>
                <li>{item.class} ({item.prob * 100}%) </li>
            );

            return (
                <ul>
                    {predictionItems}
                </ul>
            )

        } else {
            return null
        }
    }

    render() {


        return (

            <div>


                <h2>{APP_CONFIG.description}</h2>

                <p>Select an image </p>


                <Form>
                    <FormGroup>
                        <div>
                            <p>Provide a Url</p>
                            <Input name="file" onChange={this._onUrlChange}
                            />
                        </div>
                    </FormGroup>

                    <h3>OR</h3>
                    <FormGroup id={"upload_button"}>
                        <div>
                            <p>Upload an image</p>
                        </div>
                        <Label for="imageUpload">
                            <Input type="file" name="file" id="imageUpload" accept=".png, .jpg, .jpeg" ref="file"
                                   onChange={this._onFileUpload}/>
                            <span className="btn btn-primary">Upload</span>
                        </Label>
                    </FormGroup>

                    <img src={this.state.file} className={"img-preview"} hidden={!this.state.imageSelected}/>
                    <FormGroup>
                        <Button color="primary" onClick={this._predict}> Predict</Button>
                        <span class="p-1 "/>
                        <Button color="danger" onClick={this._clear}> Clear</Button>
                    </FormGroup>
                </Form>

                {this.renderPrediction()}


            </div>
        );
    }
}

class CustomNavBar extends React.Component {


    render() {
        const link = APP_CONFIG.code;
        return (
            <Navbar color="light" light fixed expand="md">
                <NavbarBrand href="/">{APP_CONFIG.title}</NavbarBrand>
                <Collapse navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/about">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href={link}>GitHub</NavLink>
                        </NavItem>

                    </Nav>
                </Collapse>
            </Navbar>
        )
    }
}

// Create a function to wrap up your component
function App() {
    return (


        <Router>
            <div className="App">
                <CustomNavBar/>
                <div>
                    <main role="main" className="container">
                        <Route exact path="/" component={MainPage}/>
                        <Route exact path="/about" component={About}/>

                    </main>


                </div>
            </div>
        </Router>
    )
}

(async () => {
    const response = await fetch('/config');
    const body = await response.json();

    window.APP_CONFIG = body;

    // Use the ReactDOM.render to show your component on the browser
    ReactDOM.render(
        <App/>,
        rootElement
    )
})();


