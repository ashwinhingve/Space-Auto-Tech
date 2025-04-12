'use client'
import React from 'react'
 
 
const page = () => {
    return (
      <section>
      <div className="pt-24 h-20"></div>
      <section className="contact-section">
        <div className="background-overlay"></div>
        <div className="justify-items-center">
          <div className="container">
            <div className="right-column">
              <div className="heading">
                <h3>We Are Happy to Serve You!</h3>
              </div>
              <form className="contact-form" method="post" action="/components/inquiry/" noValidate>
                <div className="form-group">
                  <label htmlFor="name" className="visually-hidden">Name</label>
                  <input type="text" id="name" name="name" placeholder="Your Full Name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="companyName" className="visually-hidden">Company&apos;s Name</label>
                  <input type="text" id="companyName" name="companyName" placeholder="Your Company's Name" required />
                </div>
                <div className="form-group hidden">
                  <label htmlFor="numberCommentPhone" className="visually-hidden">Number Comment Phone</label>
                  <input type="text" id="numberCommentPhone" name="numberCommentPhone" />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="visually-hidden">Email</label>
                  <input type="email" id="email" name="email" placeholder="Your Email Address" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phoneNumber" className="visually-hidden">Phone Number</label>
                  <input type="text" id="phoneNumber" name="phoneNumber" placeholder="Your Phone Number" required />
                </div>
                <div className="form-group">
                  <label htmlFor="comment" className="visually-hidden">Comment</label>
                  <textarea id="comment" name="comment" placeholder="Please Submit Your Query" required></textarea>
                </div>
                <button type="submit" className="submit-button">Get Started</button>
              </form>
            </div>
          </div>
        </div>
    
        <style jsx>{`
          .contact-section {
            position: relative;
            padding: 60px 20px;
            background: linear-gradient(to bottom, #e3f2fd, #90caf9);
            font-family: Arial, sans-serif;
          }
          .background-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.05);
            z-index: -1;
          }
          .container {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: center;
            align-items: flex-start;
          }
          .right-column {
            flex: 1;
            max-width: 600px;
            background-color: #fff;
            padding: 40px;
            border-radius: 12px;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
          }
          .heading h3 {
            font-size: 24px;
            color: #333;
            margin-bottom: 20px;
            text-align: center;
          }
          .contact-form {
            display: flex;
            flex-direction: column;
            gap: 15px;
          }
          .form-group {
            display: flex;
            flex-direction: column;
          }
          .form-group.hidden {
            display: none;
          }
          input, textarea {
            padding: 12px;
            border: 1px solid #ccc;
            border-radius: 6px;
            font-size: 16px;
            background-color: #f9f9f9;
            transition: border-color 0.3s;
          }
          input:focus, textarea:focus {
            border-color: #007bff;
            outline: none;
          }
          textarea {
            resize: none;
            min-height: 100px;
          }
          .submit-button {
            background-color: #007bff;
            color: #fff;
            border: none;
            padding: 12px 20px;
            border-radius: 6px;
            cursor: pointer;
            font-size: 18px;
            font-weight: bold;
            transition: background-color 0.3s;
          }
          .submit-button:hover {
            background-color: #0056b3;
          }
          @media (max-width: 768px) {
            .right-column {
              padding: 20px;
            }
          }
        `}</style>
      </section>
    </section>
    

    )
}

export default page