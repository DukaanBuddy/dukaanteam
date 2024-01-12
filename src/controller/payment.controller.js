import PaytmChecksum from "../PaytmChecksum";
import dotenv from "dotenv"
const { v4: uuidv4 } = require('uuid')
dotenv.config();


export const paymentCreate = async (req, res) => {
    try {


        /* import checksum generation utility */
        const PaytmChecksum = require("./PaytmChecksum");

        var paytmParams = {};

        /* initialize an array */
        //  String body = "{/*YOUR_COMPLETE_REQUEST_BODY_HERE*/}";
        /*For example: \mid\":"\YOUR_MID_HERE\","\orderId\":"\YOUR_ORDER_ID_HERE\*/
        paytmParams["MID"] = "YOUR_MID_HERE";
        paytmParams["ORDERID"] = "YOUR_ORDER_ID_HERE";

        /**
        * Generate checksum by parameters we have
        * Find your Merchant Key in your Paytm Dashboard at https://dashboard.paytm.com/next/apikeys 
        */
        var paytmChecksum = PaytmChecksum.generateSignature(paytmParams, "YOUR_MERCHANT_KEY");
        paytmChecksum.then(function (checksum) {
            console.log("generateSignature Returns: " + checksum);
        }).catch(function (error) {
            console.log(error);
        });

    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
};

export default paymentCreate