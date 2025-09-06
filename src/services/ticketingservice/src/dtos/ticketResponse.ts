import { UUID } from "crypto";

export interface TicketResponse {
    ticketId: UUID;
    concert: String;
    concertDate: String;
    seatNumber: String;
    rowNumber:String;
    venueName:String;
    customerName:String;
    price:Number;
    receipt:String;
    transactionDate:String;
}