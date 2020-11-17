# Metalsoft Challenge

## API Documentation
Used endpoint: `POST /query`
### Customer

### Create
Request:
```json
{
    "jsonrpc": "2.0",
    "method": "customer_add",
    "params": {
        "name": "Test Name"
    },
    "id": 1
}
```
Response:
```json
{
    "jsonrpc": "2.0",
    "result": {
        "id": 2,
        "name": "Test Name",
        "updatedAt": "2020-11-17T18:12:56.534Z",
        "createdAt": "2020-11-17T18:12:56.534Z"
    },
    "id": 1
}
```

### List
Request:
```json
{
    "jsonrpc": "2.0",
    "method": "customer_list",
    "params": {},
    "id": 1
}
```
Response:
```json
{
    "jsonrpc": "2.0",
    "result": [
        {
            "id": 1,
            "name": "Test3",
            "createdAt": "2020-11-17T18:07:03.119Z",
            "updatedAt": "2020-11-17T18:07:03.119Z"
        },
        {
            "id": 2,
            "name": "Test Name",
            "createdAt": "2020-11-17T18:12:56.534Z",
            "updatedAt": "2020-11-17T18:12:56.534Z"
        }
    ],
    "id": 1
}
```

### Find
Request:
```json
{
    "jsonrpc": "2.0",
    "method": "customer_find",
    "params": {
        "id": 1
    },
    "id": 3
}
```
Response:
```json
{
    "jsonrpc": "2.0",
    "result": {
        "id": 1,
        "name": "Test3",
        "createdAt": "2020-11-17T18:07:03.119Z",
        "updatedAt": "2020-11-17T18:07:03.119Z"
    },
    "id": 3
}
```

### Update:
Request:
```json
{
    "jsonrpc": "2.0",
    "method": "customer_update",
    "params": {
        "id": 1,
        "name": "Test 4"
    },
    "id": 3
}
```
Response:
```json
{
    "jsonrpc": "2.0",
    "result": [
        1
    ],
    "id": 3
}
```

### Delete:
Request:
```json
{
    "jsonrpc": "2.0",
    "method": "customer_delete",
    "params": {
        "id": 1
    },
    "id": 3
}
```
Response:
```json
{
    "jsonrpc": "2.0",
    "result": 1,
    "id": 3
}
```