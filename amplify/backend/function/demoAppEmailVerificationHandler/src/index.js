/* Amplify Params - DO NOT EDIT
    AUTH_DEMOAPP2D44C8C3_USERPOOLID
    ENV
    REGION
Amplify Params - DO NOT EDIT */

const AWS = require('aws-sdk');

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    try {
        const userPoolId = process.env.AUTH_DEMOAPP2D44C8C3_USERPOOLID;
        const cognito = new AWS.CognitoIdentityServiceProvider();

        // GET LIST OF USERS
        const { Users } = await cognito.listUsers({
            UserPoolId: userPoolId,
            AttributesToGet: ["email", "phone_number"]
        }).promise();

        // GET LIST OF USERS EMAILS AND PHONE NUMBERS
        const userEmails = Users?.map((u) => u?.Attributes[0]?.Value);
        const userPhoneNumbers = Users?.map((u) => u?.Attributes[1]?.Value);

        // DETERMINE IF EMAIL OR PHONE NUMBER IS BEING USED
        const containsEmail = userEmails.includes(event?.arguments?.email);
        const containsPhoneNumber = event?.arguments?.phoneNumber
            ? userPhoneNumbers.includes(event.arguments.phoneNumber)
            : false;

        // UNCOMMENT FOR TROUBLESHOOTING PURPOSES
        // console.log("EVENT", event);
        // console.log("EVENT EMAIL", event?.arguments?.email);
        // console.log("EVENT PHONE NUMBER", event?.arguments?.phoneNumber);
        // console.log("USER POOL ID", userPoolId);
        // console.log("USERS", Users);
        // console.log("USER EMAILS", userEmails);
        // console.log("USER PHONE NUMBERS", userPhoneNumbers);
        // console.log("CONTAINS EMAIL", containsEmail);
        // console.log("CONTAINS PHONE NUMBER", containsPhoneNumber);

        return {
            statusCode: 200,
            body: JSON.stringify({
                CONTAINS_EMAIL: containsEmail,
                CONTAINS_PHONE_NUMBER: containsPhoneNumber
            })
        };

    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        };
    }
};
