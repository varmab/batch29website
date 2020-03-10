import React, { Component } from 'react'

class Contact extends Component {
    constructor(){
        super();

        this.state={
            name:"",
            email:"",
            message:"",
            touched:{
                name:false,
                email:false,
                message:false
            }
        }
    }

    isValidEmail=(email)=>{
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        return pattern.test(email);
    }

    onChange=(e)=>{
        var fieldName=e.target.name;
        var fieldValue=(e.target.type=="checkbox")? e.target.checked : e.target.value;
        console.log(fieldName + " : " + fieldValue)
        this.setState({
            [fieldName]:fieldValue
        })
    }

    onBlur=(e)=>{
        var fieldName=e.target.name;
        var touched=Object.assign({},this.state.touched);
        touched[fieldName]=true;

        this.setState({
            touched
        })
    }

    validate=()=>{
        var errors={}

        if(this.state.name==""){
            errors.name="Name is required"
        }
        
        if(this.state.email==""){
            errors.email="Email is required"
        }
        else if(!this.isValidEmail(this.state.email)){
            errors.email="Invalid email"
        }

        if(this.state.message==""){
            errors.message="Message is required"
        }

        return {
            errors,
            isValid:Object.keys(errors).length>0 ? false : true
        }
    }


    submit=(e)=>{
        e.preventDefault();


    }
    
    render() {
        var {errors, isValid}=this.validate();

        return (
            <section className="contacts-3 bg-clouds">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-5">
                            <h3>Contact Us</h3>
                            <p>Vanes is just few finger taps away. Feel free to reach us any time during normal business hours from Monday to Saturday.</p>
                            <div className="links">
                                <a href="#"><span className="fui-phone"></span>+91 80963 80962</a><br />
                                <a href="#"><span className="fui-mail"></span>hr@vanes.in</a>
                            </div>
                            <h6>Corporate HQ</h6>
                            <p>Vanes is located near to heart of technology in Hyderabad.</p>
                            <p>Vanes Industries</p>
                            <p> Door No: 2-91/5&6/MPTP/3F/B-2<br />
                                Kondapur, Serilingampally,<br />
                                Hyderabad, Telangana-500084.
                        </p>

                            <div className="map">
                                <iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
                                    src="https://maps.google.com/?ie=UTF8&amp;t=m&amp;ll=40.714353,-74.005973&amp;spn=0.04554,0.072956&amp;z=12&amp;output=embed"></iframe>
                            </div>
                        </div>
                        <div className="col-sm-6 col-sm-offset-1">
                            <h3>Email us</h3>
                            <p>Want to reach us by email, Send us a quick message by filling form below.</p>
                            <form>
                                <label className="h6">Name / Last Name</label>
                                <input type="text" onChange={this.onChange} onBlur={this.onBlur} name="name" className="form-control" />
                                    {
                                        (errors.name) && (this.state.touched.name==true) && <p style={{color:"red"}}>{errors.name}</p>
                                    }
                                <label className="h6">E-mail</label>
                                <input type="text" onChange={this.onChange} onBlur={this.onBlur} name="email" className="form-control" />
                                <div>
                                    {
                                        (errors.email) && (this.state.touched.email==true) && <p style={{color:"red"}}>{errors.email}</p>
                                    }
                                </div>
                                <label className="h6">Message</label>
                                <textarea rows="7" onChange={this.onChange} onBlur={this.onBlur} name="message" className="form-control"></textarea>
                                <div>
                                    {
                                        (errors.message) && (this.state.touched.message==true) && <p style={{color:"red"}}>{errors.message}</p>
                                    }
                                </div>
                                <button type="button" onClick={this.submit} className="btn btn-primary" disabled={!isValid}><span className="fui-mail"></span></button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Contact;