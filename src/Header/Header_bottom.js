import './Header_bottom.css'
import 'imgs/logo.png'

export function Header_bottom(){
    return(
        <div className={'header_upper'}>
          <div className="header_upper_top">
               <div className="header_upper_logo">
                   <img src={''} alt="logo"/>
               </div>
              <h1>BACK DOWN SOUTH</h1>
          </div>
            <div className="header_upper_bottom">

            </div>
        </div>
    )
}