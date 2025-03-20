import '../styles/register.css'

function Register() {
    return (
        <div className="register-container">
            <div className="register-header">
                <h1>Registration</h1>
                <p>Learn How to Register for <span>SPARK 2025</span>: A guide to submitting your paper for premier international conference that brings together researchers, academicians, industry professionals, and students to explore cutting-edge advancements in smart systems, power electronics, artificial intelligence, robotics, and knowledge engineering.</p>
                <a href="ssssssss" target='_blank'>Register Now</a>
            </div>
            <div className="register-table-content">
                <h1>Registration fee</h1>
                <div className="register-table">
                    <table border="1" cellpadding-right="15">
                        <tr>
                            <th>Details</th>
                            <th>Amount</th>
                        </tr>
                        <tr>
                            <td>Student Members</td>
                            <td>13,000 INR</td>
                        </tr>
                        <tr>
                            <td>Academician / Professional Members</td>
                            <td>12,000 INR</td>
                        </tr>
                        <tr>
                            <td>Research Scholors</td>
                            <td>13,000 INR</td>
                        </tr>
                        <tr>
                            <td>Industry Members</td>
                            <td>5,000 INR</td>
                        </tr>
                        <tr>
                            <td>Foreign student Members</td>
                            <td>$200 USD</td>
                        </tr>
                        <tr>
                            <td>Foreign Academician / Professional Members</td>
                            <td>$250 USD</td>
                        </tr>
                        <tr>
                            <td>Foreign Research Scholors</td>
                            <td>$350 USD</td>
                        </tr>
                        <tr>
                            <td>Foreign Industry Members</td>
                            <td>$350 USD</td>
                        </tr>
                    </table>
                    <p>* All the fees details given above are including 18% GST</p>
                </div>
            </div>
            <div className="register-account-details">
                <h1>Bank Account Details</h1>
                <p>Here are the bank account details for the registration fee payment.</p>
                <p><span>PAYMENT MODE</span> – NEFT / IMPS / DIRECT DEPOSIT / SWIFT TRANSFER / UPI</p>
                <div className="account-table">
                    <table border="0">
                        <tr>
                            <td>Account Number</td>
                            <td>xxxxxxxxxxxxxx</td>
                        </tr>
                        <tr>
                            <td>Account Name</td>
                            <td>KPR Institute of Engineering and Technology</td>
                        </tr>
                        <tr>
                            <td>IFSC Code</td>
                            <td>xxxxxxxxxx</td>
                        </tr>
                        <tr>
                            <td>MICR Code</td>
                            <td>xxxxxxxxxxxxx</td>
                        </tr>
                        <tr>
                            <td>Swift Code</td>
                            <td>xxxxxxxxxxxxx xxx</td>
                        </tr>
                        <tr>
                            <td>Bank Name</td>
                            <td>xxxxxxxxxxxxxx</td>
                        </tr>
                        <tr>
                            <td>Account Type</td>
                            <td>Current Account - General</td>
                        </tr>
                        <tr>
                            <td>Bank Address</td>
                            <td>Arasur, Coimbatore</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Register;