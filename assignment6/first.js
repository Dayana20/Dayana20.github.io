ReactDOM.render(
    <img src='react_logo.png' height={200}/>,
    document.getElementById('image')
);
// <!-- https://reactjs.org/docs/hello-world.htmls -->
ReactDOM.render(
    <h2>Hello, world!!!</h2>,
    document.getElementById('root')
);

const elem = React.createElement;
class Welcome extends React.Component{
    render(){
        return 'Hello World!!';
    }
}

const domContainer2 = document.querySelector('#root2');
ReactDOM.render(elem(Welcome), domContainer2);



// https://reactjs.org/docs/add-react-to-a-website.html
// https://gist.github.com/gaearon/6668a1f6986742109c00a581ce704605
const e = React.createElement;

class button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
    this.count = 0;
  }

  render() {
    if (this.state.liked) {
        // the bottom one will go on top of current button
        // return(<button id="b1" onClick={() => this.handleClick()}>Now this is a button object</button>);
        this.count+=1;
        if (this.count == 1){
            return e(
                'button',
                { onClick: () => this.setState({ liked: false }) },
                'I was clicked once'
              );
        }
        return e(
            'button',
            { onClick: () => this.setState({ liked: false }) },
            'I was clicked ',this.count,' times'
          );
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Click Me!'
    );
  }

//   handleClick(){
//     console.log('this is:', this);
//   }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(button), domContainer);


// using only function and then rendering function as object
// https://www.geeksforgeeks.org/reactjs-lists/
function Listing(props)
{
    const list = props.menuitems;
    const updatedList = list.map((listItems)=>{
        // return must have one parent elemet -> using div as parent
        return(
                <div>
                    <h5>Elem: {listItems}</h5> 
                    <h4>Adding 10: {listItems+10}</h4>
                </div>
            ); 
    });
  
    return(
        <ul>{updatedList}</ul>
    );
}
  
const menuItems = [1,2,3,'hi'];
  
ReactDOM.render(
    <Listing menuitems = {menuItems} />, 
    document.getElementById('lists')
);