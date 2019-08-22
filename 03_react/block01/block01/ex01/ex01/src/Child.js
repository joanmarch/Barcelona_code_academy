import React from 'react' 

class UserInfoComponent extends React.Component {

    state = {user: this.props.user} 

    static getDerivedStateFromProps(props){
       return { user : props.user}
    }

    componentWillUnmount (){
        console.log('Nooooooo!!!')
    }

    render() {
        if(this.state.user)
            return (
                <h1>{this.state.user}</h1>
                );

        return (
            <h1>loading</h1>
            )
    }
}

export default UserInfoComponent
