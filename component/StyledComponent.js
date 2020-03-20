import React, { Component } from 'react';
import styled from 'styled-components'

const Text = styled.span`
    font-size: 18px;
    color:red;
`
const Text1 = styled.span`
    font-size: 18px;
    color:#00FFFF;
`
const Text2 = styled.span`
    font-size: 18px;
    color:#0000FF;
`

class StyledComponent extends Component {
    render(){
        return (
            <div>
                <hr/>
                <h2>This is StyledComponent page</h2>
                <hr/>
                <Text>StyledComponent_1</Text><br/><hr/>
                <Text1>StyledComponent_2</Text1><br/><hr/>
                <Text2>StyledComponent_3</Text2><hr/>
            </div>
        );
    }
}
export default StyledComponent;