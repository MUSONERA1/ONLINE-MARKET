 
        function buy() {
            const buy = `
            <html>
            <head>
                <style>
                    table {
                        background-color: gold;
                        border-radius: 10px;
                    }
                </style>
            </head>
            <body>
            <form>
                <table>
                    <th><h1>PAYMENT</h1></th>
                    <tr>
                        <td>NUMBER OF ITEMS</td>
                        <td><input type="number" min="1" required></td>
                    </tr>
                    <tr>
                        <td>PAY VIA</td>
                        <td>
                            <select>
                                <option>MTN MOMO</option>
                                <option>Airtel Money</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td><button type="button">SUBMIT</button></td>
                    </tr>
                </table>
            </form>
            </body>
            </html>
            `;
            const newWindow = window.open('', '_blank');
            newWindow.document.write(buy);
            newWindow.document.close();
        }
    
        function supplier() {
            const sup = `
            <html>
            <head>
                <style>
                    
                        table {
                            background-color: gold;
                            border-radius: 10px;
                            padding: 20px;
                            margin: auto;
                        }
                    
                </style>
            </head>
            <body>
            <form>
                <table>
                    <th><h1>SUPPLIER INFORMATION</h1></th>
                    <tr>
                        <td>Names</td>
                        <td>Musonera Richard</td>
                    </tr>
                    <tr>
                        <td>Phone number</td>
                        <td>0791281014</td>
                    </tr>
                    <tr>
                        <td>Location</td>
                        <td><address>KIGALI-RWANDA<br>Street KK706st</address></td>
                    </tr>
                </table>
            </form>
            </body>
            </html>
            `;
            const newWindow = window.open('', '_blank');
            newWindow.document.write(sup);
            newWindow.document.close();
        }
    