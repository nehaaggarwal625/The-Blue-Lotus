import React, {Component} from "react";
import {Form} from 'antd';
import { Redirect } from "react-router-dom";

export default class App  extends Component{

  constructor(props) {
        super(props);
        this.state ={
            username: "",
            password: "",
        }
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }

    onFormSubmit(values){
      console.log(values);

      const formData = new FormData();
      formData.append("username", values.username);
      formData.append("password", values.password);

        const options = {
            method: 'POST',
            body: formData
        };

      fetch('http://localhost:8000/api/login', options).then(() => {
        <Redirect to="/home" />
        }).catch((error) => {
      console.log(this.props.state)
      })


    };


 render(){
    return(

      <div>
                            <Form onFinish={this.onFormSubmit}>
                                <div class="col-md-12 form-group p_star">
                                    <Form.Item name="username">
                                      <input type="text" class="form-control" placeholder="Username"/>
                                    </Form.Item>
                                </div>
                                <div class="col-md-12 form-group p_star">
                                  <Form.Item name="password">
                                    <input type="password" class="form-control"
                                        placeholder="Password"/>
                                   </Form.Item>
                                </div>
                                <div class="col-md-12 form-group">
                                    <button type="submit" value="submit" class="btn_3">
                                        log in
                                    </button>
                                </div>
                            </Form>

     </div>