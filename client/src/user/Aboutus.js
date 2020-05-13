import React from "react";
import Layout from "../core/Layout";
import {Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Fade, Stagger } from 'react-animation-components';

const Aboutus = () => {
  
   
    return (
        <Layout
            title="Aboutus"
            description="About Us Page"
            className="container col-md-8 offset-md-2"
        >
           <div className="container">
            <div className="row">
                <div className="col-12">
                    <h3>About Us</h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <h2>Our Work</h2>
                    <p>
                        <ul>
                            <li>
                            We have modelled a Online Bookstore application by primarily making use of the MERN stack.
                            </li>
                            <li>
                            Furthermore we have integrated a PayPal payment gateway through Braintree ,which tracks all the payments made for each order.</li>
                            <li>This Bookstore will keep a track of order history and the tracking information, which is stored and retrieved from a Mongo Database, through API calls.</li>
                            <li>
                           Whole package is deployed to the Digital Ocean hosting platform.
                           </li>
                        </ul>
 

</p>
                  
                </div>
                <div className="col-12 col-md-6">
                    <Card>
                        <CardHeader className="bg-primary text-white">Technologies Used</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Front-End</dt>
                                <dd className="col-6">HTML, CSS , Bootstrap, React</dd>
                                <dt className="col-6">Back-End</dt>
                                <dd className="col-6">Node.js, Express.js, JavaScript</dd>
                                <dt className="col-6">Database</dt>
                                <dd className="col-6">MongoDB</dd>
                                <dt className="col-6">Cloud Platform</dt>
                                <dd className="col-6">Digital Ocean</dd>
                                <dt className="col-6">Payment Service</dt>
                                <dd className="col-6">Braintree(PayPal)</dd>
                                <dt className="col-6">API IDE </dt>
                                <dd className="col-6">Postman</dd>                                 
                            </dl>
                        </CardBody>
                    </Card>
                </div>
               
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h2>Members</h2>
                </div>
                <div className="col-12">
        <Media list>
             <Stagger in>

                <div className="col-12 mt-5">

              <Fade in>
                 <Media tag="li">
                   <Media left middle>
                       <Media object src={ require('../img/Rachit.png') } />
                       
                   </Media>
                   <Media body className="ml-5">
                   <h3>  Rachit Agrawal  </h3>
                     <br/>
                     <Media heading><p>Northeastern University</p></Media>
                     <p>MS in Information Systems• Currently Enrolled</p>
                     <p>Skilled in : Application Engineering Development (Java), 
                         Web Design and User Experience, Data Structures and Algorithms,
                          Database Management Systems,Cloud Computing, Data Science Engineering Methods</p>
                          <h4>Contact</h4>
                          <p>Email  : <a href="mailto:agrawal.rac@husky.neu.edu">agrawal.rac@husky.neu.edu
                          </a><br></br>Phone : +1-(857)-930-5297
                          <br/>Linkedin : <a 
                          href="https://www.linkedin.com/in/rachitagrawal07/"
                          target="_blank">www.linkedin.com/in/rachitagrawal07/</a>
                          </p>
                          <br/>
                   </Media>
                 </Media>
                 <Media tag="li">
                   <Media left middle>
                       <Media object src={ require('../img/Gaurav.jpg') } />
                   </Media>
                   <Media body className="ml-5">
                   <h3>  Gaurav Lohani </h3>
                     <br/>
                     <Media heading><p>Northeastern University</p></Media>
                     <p>MS in Information Systems• Currently Enrolled</p>
                     <p>Skilled in : Application Engineering Development (Java), 
                         Web Design and User Experience, Data Structures and Algorithms,
                          Database Management Systems,Cloud Computing, Data Science Engineering Methods</p>
                          <h4>Contact</h4>
                          <p>Email  : <a href="mailto:lohani.g@husky.neu.edu">lohani.g@husky.neu.edu
                          </a><br></br>Phone : +1-(646)-215-1093
                          <br/>Linkedin : <a 
                          href="https://www.linkedin.com/in/lohanigaurav/"
                          target="_blank">www.linkedin.com/in/lohanigaurav/</a>
                          </p>
                          <br/>
                   </Media>
                 </Media>
 </Fade>
               </div>
               </Stagger>
                    </Media>
                </div>
            </div>
        </div>
        </Layout>
    );
};

export default Aboutus;




