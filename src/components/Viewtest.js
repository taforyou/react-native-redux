import React, { Component } from 'react';
import { View, Text ,Button} from 'react-native';
import {connect} from 'react-redux';

class Viewtest extends Component {
    render() {
        return (
            <View style={{
                marginTop:30
            }}>
                <Text>Name : {this.props.user.name}</Text>
                <Button title="Changename"
                    onPress={()=>this.props.setname("React Name")}
                 />
            </View>
        );
    }
}
const mapStatetoProps = (state) => {
    return {
        user: state.user,
        emp: state.emp
    }
}

const mapDispatchtoProps = (dispatch)=>{
    return {
        setname:(name)=>{
            dispatch({
                type:"CHANGENAME",
                payload:name
            });
        }
    }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(Viewtest);