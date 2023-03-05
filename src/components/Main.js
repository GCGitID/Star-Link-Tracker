import React,{Component} from 'react';
import {Row, Col} from 'antd';
import axios from 'axios';
import SatSetting from './SatSetting';
import SatelliteList from './SatelliteList';
import WorldMap from './WorldMap';
import { BASE_URL,NEARBY_SATELLITE,SAT_API_KEY,STARLINK_CATEGORY } from '../constants';

class Main extends Component{
    constructor(){
        super();
        this.state={
            satInfo: {},
            satList: {},
            setting: {},
            isLoadingList: false
        };
    }

    showNearbySatellite=(setting)=>{
        console.log('show nearby');
        this.setState({
            setting: setting
        })
        this.fetchSatellite(setting);
    }

    fetchSatellite=(setting)=>{
        console.log('fetching');
        const {latitude, longitude, radius, altitude}=setting;
        const url=`${BASE_URL}/api/${NEARBY_SATELLITE}/${latitude}/${longitude}/${altitude}/${radius}/${STARLINK_CATEGORY}/&apiKey=${SAT_API_KEY}`;
        
        this.setState({isLoadingList: true});
        axios.get(url).then(
            response=>{
                //console.log(response.data);
                this.setState({
                    satInfo: response.data,
                    isLoadingList: false,
                });
            }
        ).catch(
            err=>{
                this.setState({isLoadingList: true});
                console.log('error in fetch satellite -> ',err);
            }
        );
    }
    showMap=(selected)=>{
        this.setState(
            preState=>({
                ...preState,
                satList: [...selected],
            })
        );
        // console.log('Selected:/n--------------------------',selected);
        // console.log('cur Satlist:/n--------------------------',this.state.satList);
    }
    render(){
        //console.log('cur render Satlist:/n--------------------------',this.state.satList);
        return(
            <Row className='main'>
                <Col span={8} className="left-side">
                    <SatSetting onShow={this.showNearbySatellite} />
                    <SatelliteList satInfo={this.state.satInfo}
                        isLoadingList={this.state.isLoadingList} 
                        onShowMap={this.showMap}   
                    />
                </Col>
                <Col span={16} className="right-side">
                    <WorldMap satData={this.state.satList} observerData={this.state.setting} />
                </Col>                
            </Row>
        );
    }
}

export default Main;
