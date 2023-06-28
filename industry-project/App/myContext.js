// import React, {Component} from 'react';
// import ControlPanel from './ControlPanel';
// import PahoConnection from './PahoConnection';

// const MyContextMsg = React.createContext({
//     level: 5,
// });

// const user = { name: 'Tania', loggedIn: true }



// // function contextWrapper() {
// //     return (
// //       <UserProvider value={user}>
// //         <ControlPanel/>
// //       </UserProvider>
// //     )
// //   }

// export class MyProvider extends Component {
//     state = {
//         level: 10,
//     }

//     setLevel = (p)=> { this.setState({level: p}) }

//     render(){
//         const level = this.state.level;
//         const update = this;

//         return (
//             <MyContextMsg.Provider value={{level,update}
//             }>
//                 {this.props.children}
//             </MyContextMsg.Provider>
//         )
//     }
// }

// export default MyContextMsg

import React from 'react';

const ShareValueContext = React.createContext();

export default ShareValueContext;