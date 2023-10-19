const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport(
    {
        service: "gmail",
        auth: {
            user: "no.reply.tpt1@gmail.com",
            pass: "awhkblkbzdbaluze"
        }
    }
);

// Verification si l'email est prêt
// transporter.verify((error,success) => {
//     if (error) {
//         console.log(error);
//     }else{
//         console.log("Ready from send Email");
//         console.log(success);
//     }
// })

const sendMail = async (email, subject, bodyFile) => {
    try {
        const mailOptions = {
            from: '"Locative Mada" <no.reply.tpt1@gmail.com>',
            to: email,
            subject: subject,
            html: bodyFile
        };
        return await new Promise((resolve, reject) => {
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    throw error;
                } else {
                    console.log('Email sent: ' + info.response);
                    resolve(true)
                }
            });
        })
    } catch (error) {
        throw error;
    }
}


const generateEmail = (body) => {
    return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>Invoice</title>
        <style>
            body {
                font-family: Arial, sans-serif;
            }
            .invoice {
                max-width: 800px;
                margin: 0 auto;
                padding: 20px;
            }
            .invoice-header {
                text-align: center;
                background-color: #333;
            }
            .invoice-header h1 {
                font-size: 15px;
                padding: 10px 0;
                color: white;
            }
            .invoice-details {
                margin-top: 20px;
                border: 1px solid #ddd;
                padding: 10px;
            }
            .invoice-details h2 {
                font-size: 18px;
                color: #333;
            }
            .invoice-table {
                width: 100%;
                border-collapse: collapse;
                margin-top: 20px;
            }
            .invoice-table th, .invoice-table td {
                border: 1px solid #ddd;
                padding: 8px;
                text-align: left;
            }
            .invoice-table th {
                background-color: #f2f2f2;
            }
            .invoice-total {
                margin-top: 20px;
            }
            .invoice-total p {
                text-align: right;
            }
    
            .date-table-container{
                display: flex;
                justify-content: end;
            }
    
            .date-table{
                width: 250px;
                border-collapse: collapse;
                border: 1px solid #333;
            }
    
            .date-table th, .date-table td {
                border: 1px solid #ddd;
                padding: 8px;
                text-align: left;
            }
    
            .header-table{
                background-color: #f2f2f2;      
            }
    
            .margin-top{
                margin-top: 12px;
            } 
    
            .footer {
                display: flex;
                justify-content: space-between;
            }
    
            .description {
                border: 1px solid #ddd;
                padding: 15px;
                width: 45%;
            }
        </style>
    </head>
    <body>
        <div class="invoice">
            <div class="invoice-header">
                <h1>QUITTANCE DE LOYER</h1>
            </div>
            <div class="description-header">
                <p>Corresspondant à la location du bien situé :  [adresse Postale]</p>
            </div>
            <div class="invoice-details">
                <h2>Bailleur</h2>
                <p>[Nom] [Prénom]</p>
                <p>[Adresse postale]</p>
                <br>
                <p>Tél : [Téléphone]</p>
                <p>E-mail : [email]</p>
                <br>
                <h2>Locataire</h2>
                <p>[Nom] [Prénom]</p>
                <p>[Adresse Postale]</p>
                <div class="date-table-container">
                    <table class="date-table">
                        <tbody class="">
                            <tr>
                                <td class="header-table">Date de quittance</td>
                                <td>2dedee</td>
                            </tr>
                            <tr>
                                <td class="header-table">Date de paiement</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td class="header-table">Mois de location</td>
                                <td>2</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
    
            
    
            <table class="invoice-table">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Unit Price</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Product A</td>
                        <td>2</td>
                        <td>$50.00</td>
                        <td>$100.00</td>
                    </tr>
                    <tr>
                        <td>Product B</td>
                        <td>3</td>
                        <td>$30.00</td>
                        <td>$90.00</td>
                    </tr>
                </tbody>
            </table>    
    
            <div class="footer margin-top">
                <div class="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae saepe assumenda consequatur perspiciatis cum sed vitae. Fugiat nihil labore nesciunt explicabo velit molestias, necessitatibus blanditiis nostrum. Quibusdam id modi impedit!
                </div>
    
                <div class="date-table-container ">
                    <table class="date-table">
                        <tbody class="">
                            <tr>
                                <td class="header-table">Loyer hors charges à payer</td>
                                <td>2dedee</td>
                            </tr>
                            <tr>
                                <td class="header-table">TVA 20%</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td class="header-table">Total à payer</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td class="header-table">Montant à payer</td>
                                <td>2</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
    
            
            
            <div class="invoice-total">
                <p>[Bailler Nom]</p>
            </div>
        </div>
    </body>
    </html>
    `
}

const sendInviteEmail = async (user, vote) => {
    try {
        return await sendMail(user?.email, 'Invitation à voter', generateEmail(user, vote));
    } catch (error) {
        throw error;
    }
}




module.exports = {
    sendMail,
    generateEmail,
    sendInviteEmail
}