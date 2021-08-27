
import './styles_hero/hero_style.css'


const changeBtn = function ChangeTypeBtn(){


}




export default function Hero(){


        return(
            <div className={'main_hero_wrap'}>
               <div className={'wrap_btns'}>
                   <button className={'btn_main '} onClick={changeBtn}> </button>
                   <button className={'btn_main '}> </button>
                   <button className={'btn_main '}> </button>
               </div>
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