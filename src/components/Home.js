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
            banner:[],
            spcarea:[],
            notice:[],
            dayrecom:[],
            banner_l:[],
            banner_right:[],
            a:'',
            b:'',
            giveup:[]
        }
        
    }
    componentWillMount(){
        axios.post('http://api.scjuchuang.com/home/get_top').then(res=>{
            this.setState({
                banner: res.data.data.banner,
                spcarea:res.data.data.spcarea,

            })
            
        })
        axios.post('http://api.scjuchuang.com/home/get_middle').then(res=>{
            this.setState({
                dayrecom:res.data.data.dayrecom,
                banner_l:res.data.data.necessary.banner,
                banner_right:res.data.data.necessary.banner_right,
                a:res.data.data.necessary.banner_right[0],
                b:res.data.data.necessary.banner_right[1],
                giveup:res.data.data.giveup
            })
            // console.log('dayrecom',res)
            // console.log('dayrecom',this.state.dayrecom)
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
        cancelText="搜索"
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
        <div className="v-item">做到这一点，你人生的色彩可以炫彩夺目</div>
        <div className="v-item">单体药店转型智慧药店，这些你需要知道</div>
        <div className="v-item">30条药店陈列技巧的专业用语，医药人必看</div>
        <div className="v-item">咳嗽有痰,就用羧甲司坦</div>
        <div className="v-item">2019 中国民营医疗三大关键词！淘汰、回归、创新</div>
    </Carousel>
        <div className="nav">
            <ul>
                <li><img src={require('./img/qb.png')}/></li>
                <li><img src={require('./img/yl.png')}/></li>
                <li><img  src={require('./img/yd.png')}/></li>
                <li><img  src={require('./img/zs.png')}/></li>
                <li><img  src={require('./img/th.png')}/></li>
                <li><img  src={require('./img/yh.png')}/></li>
                <li><img  src={require('./img/zt.png')}/></li>
                <li><img  src={require('./img/jf.png')}/></li>
            </ul>
        </div>
        <div className="back"></div>
            <ul className="recom">
                {
                    this.state.spcarea.map(item=>{
                        return (
                            <li><img src={item.image}/></li>
                        )
                    })
                }
            </ul>
            <div className="everyday"><h2>每日精选</h2></div>
            <ul className="medicine">
            {
                this.state.dayrecom.map(item=>{
                return(
                    <li><img src={item.image} /></li>
                )
            })
        }
            </ul>
        <div className="slideshow">
            <ul>
                <li className="slideshow-l">
                <h2>新品推荐</h2>
                    <Carousel
                        autoplay={true}
                        infinite={true}
                        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        afterChange={index => console.log('slide to', index)}
                        >
                        {this.state.banner_l.map(item => (
                            <a
                            key={item.url}
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                            >
                            <img
                                src={item.image}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top'}}
                                onLoad={() => {
                                // fire window resize event to change height
                                window.dispatchEvent(new Event('resize'));
                                this.setState({ imgHeight: 'auto' });
                                }}
                            />
                            </a>
                        ))}
                    </Carousel>
                </li>
                <li className="slideshow-l">
                    <h2>医院专区</h2>
                    <img src={this.state.a.image} style={{height:'70px',width:'85px'}}></img>
                </li>
                <li className="slideshow-l">
                    <h2>诊所专区</h2>
                    <img src={this.state.b.image} style={{height:'70px',width:'85px'}}></img>
                </li>
            </ul>
        </div>

        <div className="gave">
            <h3>超值赠送</h3>
            <ul>
                {
                    this.state.giveup.map(item=>{
                        return(
                            <li>
                                <div>
                                    <p>{item.goods_name}</p>
                                    <span>{item.goods_num+item.unit+item.traded_price+item.traded_goods_name}</span>
                                </div>
                                <img src={item.goods_image}/>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
        </div>
        </div>
        )
    }
}

export default Home;
