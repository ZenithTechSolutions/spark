import '../styles/register.css'

function Register() {
    return (
        <div className="register-container">
            <div className="register-header">
                <h1>Registration</h1>
                <p>Learn How to Register for <span>SPARK 2025</span>: A guide to submitting your paper for premier international conference that brings together researchers, academicians, industry professionals, and students to explore cutting-edge advancements in smart systems, power electronics, artificial intelligence, robotics, and knowledge engineering.</p>
                <a href="#https://forms.gle/axGvHTnTHuhFuZdTA" target='_blank'>Register Now</a>
            </div>
            <div className="register-table-content">
                <h1>Registration fee</h1>
                <div className="register-table">
                    <table border="1" cellpadding-right="15">
                        <tr>
                            <th>Details</th>
                            <th>Early Bird Registration</th>
                            <th>Late Registration</th>
                        </tr>
                        <tr>
                            <td>Student Members</td>
                            <td>11,500 INR</td>
                            <td>12,000 INR</td>
                        </tr>
                        <tr>
                            <td>Academician / Professional Members</td>
                            <td>11,500 INR</td>
                            <td>12,000 INR</td>
                        </tr>
                        <tr>
                            <td>Research Scholors</td>
                            <td>11,500 INR</td>
                            <td>12,000 INR</td>
                        </tr>
                        <tr>
                            <td>Industry Members</td>
                            <td>15,000 INR</td>
                            <td>20,000 INR</td>
                        </tr>
                        <tr>
                            <td>Foreign student Members</td>
                            <td>$200 USD</td>
                            <td>$250 USD</td>
                        </tr>
                        <tr>
                            <td>Foreign Academician / Professional Members</td>
                            <td>$200 USD</td>
                            <td>$250 USD</td>                        </tr>
                        <tr>
                            <td>Foreign Research Scholors</td>
                            <td>$200 USD</td>
                            <td>$250 USD</td>                        </tr>
                        <tr>
                            <td>Foreign Industry Members</td>
                            <td>$250 USD</td>
                            <td>$300 USD</td>                        </tr>
                    </table>
                </div>
                <p>* All the fees details given above are including 18% GST</p>
            </div>
            <div className="register-account-details">
                <h1>Bank Account Details</h1>
                <p>Bank account details for the registration fee payment.</p>
                <p><span>PAYMENT MODE</span> – NEFT / IMPS / DIRECT DEPOSIT / SWIFT TRANSFER</p>
                <div className="account-table">
                    <table border="0">
                        <tr>
                            <td>Account Number</td>
                            <td>50200066428996</td>
                        </tr>
                        <tr>
                            <td>Account Name</td>
                            <td>KPR GLOBAL EDUTECH CONSULTING SERVICES</td>
                        </tr>
                        <tr>
                            <td>IFSC Code</td>
                            <td>HDFC0000031</td>
                        </tr>
                        <tr>
                            <td>MICR Code</td>
                            <td>641240002</td>
                        </tr>
                        <tr>
                            <td>Swift Code</td>
                            <td>HDFCINBBCHE</td>
                        </tr>
                        <tr>
                            <td>Bank Name</td>
                            <td>HDFC Bank</td>
                        </tr>
                        <tr>
                            <td>Account Type</td>
                            <td>Current Account</td>
                        </tr>
                        <tr>
                            <td>Branch Name</td>
                            <td>Coimbatore-Trichy Road</td>
                        </tr>
                        <tr>
                            <td>Bank Address</td>
                            <td>Classic towers 1547, Trichy Road, Coimbatore, Tamil Nadu 641018</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Register;