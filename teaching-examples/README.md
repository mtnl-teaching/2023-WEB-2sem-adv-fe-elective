# Commands

### Download schema:

```
npx apollo service:download --endpoint=https://endpoint graphql-schema.json
```

### Generate types:

```
npx apollo codegen:generate --localSchemaFile=graphql-schema.json --target=typescript --tagName=gql
```
