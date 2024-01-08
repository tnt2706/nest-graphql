.PHONY: apollo

SERVICE_NAME = nest-graphql
APOLLO_KEY=service:My-Graph-bysnie:X5-1MhOs6ZUgHGcP36TZsA

apollo:
	APOLLO_KEY=$(APOLLO_KEY) \
  rover subgraph publish My-Graph-bysnie@current \
  --schema ./src/schema.gql \
  --name ${SERVICE_NAME} \
  --routing-url http://products.prod.svc.cluster.local:4001/graphql
