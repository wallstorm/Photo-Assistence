import React, { Component } from "react";
import { connect } from "react-redux"

export default (OriginalComponent) => {
    class MixedComponent extends Component {
        checkAuth() {
            if (this.props.isAuth && this.props.jwtToken) {
                this.props.history.push("/");
            }   
        }

        componentDidMount() {
            // Whether the user is authenticated
            this.checkAuth();         
        }

        componentDidUpdate() {
            // Whether the user is authenticated
            this.checkAuth();
        }

        render() {
            return <OriginalComponent />
        }
    }
    const mapStateToProps = (state) => {
        return {
            isAuth: state.auth.isAuthenticated,
            jwtToken: state.auth.token
        }
    }
    return connect(mapStateToProps)(MixedComponent);
};

