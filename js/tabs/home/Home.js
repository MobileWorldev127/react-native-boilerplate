/**
 * Copyright 2016 Facebook, Inc.
 *
 * You are hereby granted a non-exclusive, worldwide, royalty-free license to
 * use, copy, modify, and distribute this software in source code or binary
 * form for use in connection with the web services and APIs provided by
 * Facebook.
 *
 * As with any software that integrates with the Facebook platform, your use
 * of this software is subject to the Facebook Developer Principles and
 * Policies [http://developers.facebook.com/policy/]. This copyright notice
 * shall be included in all copies or substantial portions of the software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE
 *
 * @flow
 */
'use strict';

import React, {Component, Image} from 'react-native';
import {Container, Header, Title, Button, Icon, Content, Text, Thumbnail, View} from 'native-base';
import {connect} from 'react-redux';
var Navigator = require('Navigator');
var {dispatchAccount} = require('../../actions/account');
var ListContainer = require('ListContainer');
var Account = require('../account/Account');


type Props = {
    navigator: Navigator;
};

class Home extends React.Component {
    props: Props;

    constructor(props: Props) {
        super(props);
    }

    render() {

        return (
            <View>
                <ListContainer
                    title="Home"
                    backgroundImage={require('./img/notifications-background.png')}
                    backgroundColor={'#E78196'} />

                <Container>
                    <Content style={{backgroundColor: '#fff'}} padder>
                        <Text>Hey.....</Text>
                        <Text></Text>
                        <Button onPress={() => this.props.goToAccount()}>
                            next
                        </Button>
                    </Content>
                </Container>
            </View>
        );
    }  
}

function bindActions(dispatch) {
    return {
        goToAccount: ()=>dispatch(dispatchAccount('account'))
    };
}



module.exports = connect(null, bindActions)(Home);