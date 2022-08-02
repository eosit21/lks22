const AWS = require("aws-sdk");

const dynamo = new AWS.DynamoDB.DocumentClient();

const tableName = process.env.TABLE_NAME;

exports.handler = async (event) => {
    if(event.resource === '/jobs'){
        if(event.httpMethod === 'POST'){
            let requestData = JSON.parse(event.body);
            const crypto = require("crypto");
            const id = crypto.randomBytes(16).toString("hex");
            await dynamo
              .put({
                TableName: tableName,
                Item: {
                  id: id,
                  title: requestData.title,
                  message: requestData.message,
                }
              })
              .promise();            
            const response = {
                statusCode: 200,
        		headers: {
        			"Access-Control-Allow-Origin": "*"
        		},	
                body: JSON.stringify('Item Added.'),
            };
            return response;
        }
        if(event.httpMethod === 'GET' ){
            const jobs = await dynamo.scan({ TableName: tableName }).promise();
            
            const response = {
                statusCode: 200,
        		headers: {
        			"Access-Control-Allow-Origin": "*"
        		},	
                body: JSON.stringify(jobs),
            };
            return response;
        }
    }
    
    const response = {
        statusCode: 400,
        body: JSON.stringify('Page Not Found'),
    };
    return response;
};
