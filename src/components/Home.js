import React from 'react';
import './home.scss';

import { Carousel, WingBlank } from 'antd-mobile';
import axios from 'axios';

import { SearchBar} from 'antd-mobile';
class Home extends React.Component{
    constructor(){
        super();
        this.state={
            data: ['1', '2',],
            imgHeight: 176,
            banner:[]
        }
    }
    componentWillMount(){
        axios.post('http://api.scjuchuang.com/home/get_top').then(res=>{
            console.log('xxx',res.data.data.banner)
            this.setState({
                banner: res.data.data.banner
            })
            
        })
    }
    componentDidMount() {
    // simulate img loading
        setTimeout(() => {
            this.setState({
            data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
        }, 100);
    }
    render(){
        return (<div>
            <div>
            <SearchBar
        value={this.state.value}
        placeholder="淘药网"
        onSubmit={value => console.log(value, 'onSubmit')}
        onClear={value => console.log(value, 'onClear')}
        onFocus={() => console.log('onFocus')}
        onBlur={() => console.log('onBlur')}
        onCancel={() => console.log('onCancel')}
        showCancelButton
        onChange={this.onChange}
        cancelText="搜索    "
      />
        <Carousel
          autoplay={true}
          infinite={true}
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.banner.map(item => (
            <a
              key={item.url}
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={item.image}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' ,height:'150px'}}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
        <Carousel className="my-carousel"
            vertical
            dots={false}
            dragging={false}
            swiping={false}
            autoplay
            infinite
        >
        <div className="v-item">咳嗽有痰，就用...</div>
        <div className="v-item">2018年11月表彰大会</div>
        <div className="v-item">2019中国民营</div>
        <div className="v-item">单体药店的</div>
        <div className="v-item">做到这一点，人生多一点精彩</div>
    </Carousel>
        <div className="nav">
            <ul>
                <li><img src='./img/quan.png'/><p>全部商品</p></li>
                <li><img src='./img/quan.png'/><p>医院专区</p></li>
                <li><img  src='./img/quan.png'/><p>药品专区</p></li>
                <li><img  src='./img/quan.png'/><p>诊所专区</p></li>
                <li><img  src='./img/quan.png'/><p>特惠专区</p></li>
                <li><img  src='./img/quan.png'/><p>优惠卷</p></li>
                <li><img  src='./img/quan.png'/><p>直通车</p></li>
                <li><img  src='./img/quan.png'/><p>积分商城</p></li>
            </ul>
        </div>
        <div className="back"></div>
        <div><li><img /></li></div>
            </div>
        </div>)
    }
}

export default Home;
