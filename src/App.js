import React, { Component } from 'react';
import './App.css';
import { TabBar } from 'antd-mobile';
import {withRouter,Switch,Route,Redirect} from 'react-router-dom';

import './icon/iconfont.css';
import Home from './components/Home';
import List from './components/List';
import Log from './components/Log';
import Shop from './components/Shop';
import Datail from './components/Detail';
import Register from './components/Register';
class App extends Component {
  constructor() {
    super();
    this.state = {
      tab: [
        {
          text: '首页',
          path: '/home',
          name: './components/Home',
          icon: 'iconfont icon-shouye',
        }, {
          text: '分类',
          path: '/list',
          name: './components/List',
          icon: 'iconfont icon-fenlei',
        },{
          text: '购物车',
          path: '/shop',
          name: './components/Shop',
          icon: 'iconfont icon-gouwu',
        }, {
          text: '我的',
          path: '/log',
          name: './components/Log',
          icon: 'iconfont icon-wode',
        }
      ],
      current: '/home',
      selectedTab: '/home',
      hidden: false,
    }
  }
  componentDidMount(){

    // 利用生命周期函数来保持当前路由高亮
    // 获取当前路由（hash,history）
    let hash = window.location.hash;// 可能得到的值：/home,/list,/list/computer
    hash = hash.split('/')[1];

    this.setState({
        current:'/'+hash,
        selectedTab:'/'+hash
    })

}
  render() {
    return (
      <div>
      <div  className="app">
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
          noRenderContent
        >
      {
        this.state.tab.map(item => {
            return (
                <TabBar.Item
                    title={item.text}
                    key={item.path}
                    icon={<div className={item.icon} style={{
                        width: '22px',
                        height: '22px',
                        fontSize: '22px'
                    }}
                    />
                    }
                    selectedIcon={<div className={item.icon} style={{
                        width: '22px',
                        height: '22px',
                        fontSize: '22px',
                        color: '#FDA143'
                    }}
                    />
                    }
                    selected={this.state.selectedTab === item.path}
                    onPress={() => {
                        this.setState({
                            selectedTab: item.path,
                        });
                        if (this.props.match.path === item.path) {
                            return
                        } else {
                            this.props.history.push(item.path)
                        }
                    }}
                >
                </TabBar.Item>
            )
        })
    }
    
        </TabBar>
        
      </div>
    
                <Switch>
                  <Route path="/home" component={Home}/>
                  <Route path="/list" component={List}/>
                  <Route path="/Log" component={Log}/>
                  <Route path="/shop" component={Shop}/>
                  <Route path="/datail" component={Datail}/>
                  <Route path="/register" component={Register}/> 
                  <Redirect from={'/'} to={'/home'} exact/>
                </Switch>
                </div>
    );
  }
}
App = withRouter(App);
export default App;
