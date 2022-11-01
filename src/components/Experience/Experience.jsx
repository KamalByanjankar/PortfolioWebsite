import React from 'react'
import './Experience.css'

function Experience() {
  return (
    <div className="experience__internship">

        {/* Experiences section */}
        <div className="header experiences">
            <h1>Experience</h1>

            <div className="experience__details">
                <h4>Master Thesis</h4>
                <h5>09/2021 - 04/2022</h5>
                <p>
                    <em>Frankfurt University of Applied Sciences, Frankfurt am Main, Germany</em>
                </p>
                <ul>
                    <li>Performed research on measurement of height of small stones for Autonomous Driving</li>
                    <li>Captured raw data of cobble stone, and curb stone using ultrasonic sensor</li>
                    <li>Performed data analysis on raw data and only the echo signals were captured</li>
                    <li>Different Machine Learning models were used to compare the accuracy of the models for recognizing the stone objects</li>
                    <li>Submitted weekly progress reports</li>
                </ul>
            </div>
            <div className="experience__details">
                <h4>Site engineer</h4>
                <h5>12/2014 -03/2017</h5>
                <p>
                    <em>Bizinsider Tech Nepal, Kupondole, Lalitpur, Nepal</em>
                </p>
                <ul>
                    <li>Conducted survey of GSM-BTS sites</li>
                    <li>Travelled to remote areas for feasibility study</li>
                    <li>Organized resources and proper planning for the survey</li>
                    <li>Submitted reports on time</li>
                </ul>
            </div>
        </div>

        {/* Internship section */}
        <div className="header internships">
            <h1>Individual Project / Internship</h1>

            <div className="internship__details">
                <h4>Project on Minimizing the feature Vectors using PCA</h4>
                <h5>08/2019 - 11/2019</h5>
                <p>
                    <em>Frankfurt University of Applied Sciences, Frankfurt am Main, Germany</em>
                </p>
                <ul>
                    <li>Captured data using ultrasonic sensor of wall, pillar, car, and human beings</li>
                    <li>Performed data analysis and implemented Machine Learning algorithms for classification of objects</li>
                    <li>Compared accuracy of Machine learning algorithms for better classification</li>
                    <li>Implemented Principal Component Analysis (PCA) for minimizing feature vector</li>
                    <li>Presented weekly progress reports</li>
                </ul>
            </div>
            
            <div className="internship__details">
                <h4>Internship in CDMA Systems (Radio Access Network and Core Network)</h4>
                <h5>11/2014 - 02/2015</h5>
                <p>
                    <em>Nepal Telecom Training Center, Kathmandu, Nepal</em>
                </p>
            </div>
        </div>

    </div>
  )
}

export default Experience