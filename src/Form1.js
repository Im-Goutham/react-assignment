import React, { Component } from 'react';
import { Menu, Dropdown, Button, Icon, message, InputNumber } from 'antd';

class Form1 extends Component {

    constructor(props) {
      super(props);
      this.state = {

      };
    }

     handleButtonClick(e) {
      message.info('Click on left button.');
      console.log('click left button', e);
    }

     handleMenuClick(e) {
      message.info('Click on menu item.');
      console.log('click', e);
    }

    onChange(value) {
      console.log('changed', value);
    }


  render() {
    const menu = (
    <Menu onClick={this.handleMenuClick}>
      <Menu.Item key="1">1st menu item</Menu.Item>
      <Menu.Item key="2">2nd menu item</Menu.Item>
      <Menu.Item key="3">3rd item</Menu.Item>
    </Menu>
  );
    return (
      <div>
           <div>
           <h4>Please select a meal</h4>
            <div>
              <Dropdown overlay={menu}>
                <Button style={{ marginLeft: 8 }}>
                  Select meal <Icon type="down" />
                </Button>
              </Dropdown>
            </div>
            </div>
            <div style={{marginTop:50}}>
            <h4>Please enter number of people</h4>
             <div>
               <InputNumber min={1} max={10} defaultValue={1} onChange={this.onChange} />
             </div>
            </div>
      </div>
    );
  }
}

export default Form1;
