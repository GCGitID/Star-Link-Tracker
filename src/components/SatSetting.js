import React,{Component} from "react";
import { Form,Button,InputNumber } from "antd";

class SatSetting extends Component{
    render(){
        return(
            <Form 
            name="wrap"
            labelCol={{flex: "110px",}}
            labelAlign="left"
            labelWrap
            wrapperCol={{flex: 1,}}
            colon={false}
            className="sat-setting"
            onFinish={this.showSatellite}
            >
                <Form.Item 
                    label="Longitude(degrees)"
                    name="longitude"
                    rules= {[
                        {
                            required: true,
                            message: "Please input your Longitude",
                        },
                    ]}
                >
                    <InputNumber placeholder="Please input Longitude"
                        min={-180}
                        max={180}
                        style={{width: "100%"}}
                    />
                </Form.Item>
                <Form.Item 
                    label="Latitude(degrees)"
                    name="latitude"
                    rules= {[
                        {
                            required: true,
                            message: "Please input your Laitude",
                        },
                    ]}
                >
                    <InputNumber placeholder="Please input Laitude"
                        min={-90}
                        max={90}
                        style={{width: "100%"}}
                    />
                </Form.Item>
                <Form.Item 
                    label="Elevation(meters)"
                    name="elevation"
                    rules= {[
                        {
                            required: true,
                            message: "Please input your Elevation",
                        },
                    ]}
                >
                    <InputNumber placeholder="Please input Elevation"
                        min={-413}
                        max={8850}
                        style={{width: "100%"}}
                    />
                </Form.Item>
                <Form.Item 
                    label="Altitude(degrees)"
                    name="altitude"
                    rules= {[
                        {
                            required: true,
                            message: "Please input your Altitude",
                        },
                    ]}
                >
                    <InputNumber placeholder="Please input Altitude"
                        min={0}
                        max={90}
                        style={{width: "100%"}}
                    />
                </Form.Item>
                <Form.Item 
                    label="Duration(secs)"
                    name="duration"
                    rules= {[
                        {
                            required: true,
                            message: "Please input your Duration",
                        },
                    ]}
                >
                    <InputNumber placeholder="Please input Duration"
                        min={0}
                        max={90}
                        style={{width: "100%"}}
                    />
                </Form.Item>
                <Form.Item 
                    label="Radius(degrees)"
                    name="radius"
                    rules= {[
                        {
                            required: true,
                            message: "Please input your obeserve Radius",
                        },
                    ]}
                >
                    <InputNumber placeholder="Please input Radius"
                        min={0}
                        max={90}
                        style={{width: "100%"}}
                    />
                </Form.Item>

                <Form.Item className="show-nearby">
                    <Button 
                        type="primary" 
                        htmlType="submit" 
                        style={{textAlign: "center"}}
                    >
                        Find Nearby Satellite
                    </Button>
                </Form.Item>
            </Form>
        );
    }

    showSatellite=(values)=>{
        console.log('Received values of form: ',values);
        this.props.onShow(values);
    }


}


export default SatSetting;