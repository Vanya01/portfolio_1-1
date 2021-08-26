
import './styles_hero/hero_style.css'





export default function Hero(){

    const addClass_ = function addClass(e){
    console.log(e)
        return e
    }

        return (
            <div
                className={this.state.active ? 'active': null}
                onClick={this.toggleClass}
            >
                <p>{this.props.text}</p>
            </div>
        )

}


//
// class MyComponent extends Component {
//     constructor(props) {
//         super(props);
//         this.addActiveClass= this.addActiveClass.bind(this);
//         this.state = {
//             active: false,
//         };
//     }
//     toggleClass() {
//         const currentState = this.state.active;
//         this.setState({ active: !currentState });
//     };
//
//     render() {
//         return (
//             <div
//                 className={this.state.active ? 'your_className': null}
//                 onClick={this.toggleClass}
//             >
//                 <p>{this.props.text}</p>
//             </div>
//         )
//     }
// }