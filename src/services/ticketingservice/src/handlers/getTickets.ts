import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { TicketResponse } from '../dtos/ticketResponse';
import { randomUUID } from 'crypto';
import { connect } from 'http2';

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 */

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {

     const ticketResponse = [{
            ticketId:randomUUID(),
            concert: "Aerosmith Tour",
            concertDate: "Saturday November 21, 6:30 PM",
            seatNumber:"14",
            rowNumber:"H",
            venueName:"The Forum",
            customerName:"John Smith",
            price:256,
            receipt: randomUUID(),
            transactionDate: "Monday September 1, 3:30 PM"          
        },
    {
            ticketId:randomUUID(),
            concert: "Aerosmith Tour",
            concertDate: "Saturday November 21, 6:30 PM",
            seatNumber:"15",
            rowNumber:"H",
            venueName:"The Forum",
            customerName:"John Smith",
            price:256,
            receipt: randomUUID(),
            transactionDate: "Monday September 1, 3:30 PM"          
        }]

        return {
            statusCode: 200,
            body: JSON.stringify(ticketResponse),
        };
    } catch (err) {
        console.log(err);
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: 'some error happened',
            }),
        };
    }
};
