import React from 'react';
import './log.scss';
import { List, InputItem } from 'antd-mobile';
import {withRouter} from 'react-router-dom';
class Log extends React.Component {
    constructor(){
        super();
        this.go = this.go.bind(this)
    }
    go(){
        this.props.history.push('/register')
    }
    render() {
        return (<div>
            
                <header>
                    <h1 onClick={this.go}>用户登录</h1>
                    <span>注册</span>
                </header>

                <List renderHeader={() => 'Customize to focus'}>
                    <InputItem
                        clear
                        placeholder="请输入你的用户"
                    >账号</InputItem>
                    <InputItem
                        clear
                        placeholder="请输入密码"
                    >密码</InputItem>
                    <List.Item>
                        <div
                            style={{ width: '100%', color: '#108ee9', textAlign: 'center' }}
                            onClick={this.handleClick}
                        >
                            登陆
                    </div>
                    </List.Item>
                 </List>
            </div>)
        }
    }
Log=withRouter(Log);
export default Log;
