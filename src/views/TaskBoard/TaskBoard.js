import React, { Component } from 'react';
import { View,StyleSheet } from 'react-native';
import { Header,Card,Button,Text,Icon,Input} from 'react-native-elements'

export default class TaskBoard  extends Component {
    render() {
      return (
        <View>
            <Header
                placement="center"
                statusBarProps={{ barStyle: 'light-content' }}
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: '事务板', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
                containerStyle={{
                    backgroundColor: '#3D6DCC',
                    justifyContent: 'space-around',
                }}
                statusBarProps={{
                    translucent: true,
                }}
                />
            <Card
            title='添加事务'
            containerStyle={{borderRadius: 2}}
            >
            <View>
                <Input
                placeholder='内容'
                containerStyle={{width:100}}
                />
                <Button
                icon={<Icon name='code' color='#ffffff' />}
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0,backgroundColor: '#3D6DCC',width:100}}

                title='提交' />
            </View>


            </Card>



            <Text style={{marginBottom: 10,marginTop: 10}}>
                The idea with React Native Elements is more about component structure than actual design.
            </Text>
            </Card>
        </View>
      );
    }
  }
