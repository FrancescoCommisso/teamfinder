import React from "react";
import { Redirect, Route } from "react-router-dom";
import { firebaseApp } from "../firebaseConfig";
const auth = firebaseApp.auth();
// auth.onAuthStateChanged(u => {
//   console.log("authstatechanged");
//   return u != null ? true : false;
// });
// class PrivateRoute extends Component {
//   state = { loggedIn: null };

//   render() {
//     return (
//       <Route
//         {...rest}
//         render={props =>
//           this.stateloggedIn ? (
//             <Component {...props} />
//           ) : (
//             <Redirect
//               to={{ pathname: "/login", state: { from: props.location } }}
//             />
//           )
//         }
//       />
//     );
//   }
// }

// export default PrivateRoute;

const PrivateRoute = ({ component: Component, ...rest }) => {
  // Add your own authentication on the below line.

  //   const loggedIn = auth.onAuthStateChanged(u => {
  //     console.log("authstatechanged");
  //     return u != null ? true : false;
  //   });
  return (
    <Route
      {...rest}
      render={props =>
        auth.currentUser != null ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
