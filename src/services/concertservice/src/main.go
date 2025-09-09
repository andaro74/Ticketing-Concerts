package main

import (
	"context"
	"encoding/json"
	"log"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
	"github.com/aws/aws-lambda-go/lambdacontext"
)

type Concert struct {
	ID          string `json:"id"`
	Name        string `json:"name"`
	Description string `json:"description"`
}

func handler(context context.Context, request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {

	lc, _ := lambdacontext.FromContext(context)
	log.Print("Client Context")
	log.Print(lc.ClientContext)

	log.Print("Request")
	log.Print(request)

	var concert Concert

	concert.ID = "123"
	concert.Name = "Aerosmith 40 years"
	concert.Description = "The band is playing their last concert."

	concert_response, _ := json.Marshal(concert)
	return events.APIGatewayProxyResponse{
		Body:       string(concert_response),
		StatusCode: 200,
	}, nil
}

func main() {
	lambda.Start(handler)
}
