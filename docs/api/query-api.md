# Query Service
## Informational endpoints

### Event Names Endpoint

- **URL:** `/api/info/eventNames`
- **Method:** GET
- **Description:** Retrieves a list of all event names available in the system.
- **Response:**
  - **Status Code:** 200 OK
  - **Body:** An array of event names in JSON format.

**Example Response Body:**
```javascript
[
  "login",
  "signup",
  "purchase"
]
```

### Attributes Endpoint

- **URL:** `/api/info/attributes`
- **Method:** GET
- **Description:** Retrieves a list of all attributes available in the system.
- **Response:**
  - **Status Code:** 200 OK
  - **Body:** An array of attributes in JSON format.

**Example Response Body:**
```javascript
{
  "event": {
    "platform": ["web", "mobile"],
    "browser": ["chrome", "firefox"],
    "country": ["US", "UK", "CA"]
  },
  "user": {
    "age_group": ["18-24", "25-34", "35-44"],
    "gender": ["male", "female"]
  }
}
```

## Data Endpoints

### Events Endpoint

- **URL:** `/api/query/events`
- **Method:** GET
- **Description:** Retrieves aggregated event data based on specified query parameters.
- **Request Body:**
  - `dateRange` (object): Object containing information about the date range for the query.
    - `timeUnit` (string): The time unit for aggregation (e.g., "hour", "day", "month").
    - `previous` (number): The number of previous time units to include in the query.
  - `eventName` (string): Optional. The name of the event to filter by.
  - `aggregationType` (string): The type of aggregation for the data (e.g., "total", "sum").
  - `filters` (object): Optional. Additional filters to apply to the query.
- **Response:**
  - **Status Code:** 200 OK
  - **Body:** Aggregated event data in JSON format.
---
**Example of url-encoded query parameters**
```
dateRange[timeUnit]=day&dateRange[previous]=7&eventName=login&aggregationType=total&filters[platform]=web
```
---
**Example of decoded query parameters:**
```javascript
{
  "dateRange": {
    "timeUnit": "day",
    "previous": 7
  },
  "eventName": "login",
  "aggregationType": "total",
  "filters": {
    "platform": "web"
  }
}
```
---
**Example Response Body:**
```javascript
[
  {
    "aggregationType": "total",
    "timeUnit": "day",
    "values": [
      {
        "total": 500,
        "day": "2024-04-11"
      },
      {
        "total": 550,
        "day": "2024-04-12"
      },
      {
        "total": 600,
        "day": "2024-04-13"
      }
    ]
  }
]
```

### Users Endpoint

- **URL:** `/api/query/users`
- **Method:** GET
- **Description:** Retrieves aggregated user data based on specified query parameters.
- **Request Body:**
  - `dateRange` (object): Object containing information about the date range for the query.
    - `timeUnit` (string): The time unit for aggregation (e.g., "hour", "day", "month").
    - `previous` (number): The number of previous time units to include in the query.
  - `aggregationType` (string): The type of aggregation for the data (e.g., "total", "sum").
  - `filters` (object): Optional. Additional filters to apply to the query.
- **Response:**
  - **Status Code:** 200 OK
  - **Body:** Aggregated user data in JSON format.

---
**Example of url-encoded query parameters:**
```
dateRange[timeUnit]=month&dateRange[previous]=1&aggregationType=total&filters[country]=US
```
---
**Example of decoded query parameters:**

```javascript
{
  "dateRange": {
    "timeUnit": "month",
    "previous": 1
  },
  "aggregationType": "total",
  "filters": {
    "country": "US"
  }
}
```
---
**Example Response Body:**
```javascript
[
  {
    "aggregationType": "total",
    "timeUnit": "month",
    "values": [
      {
        "total": 500,
        "month": "2024-04"
      },
      {
        "total": 550,
        "month": "2024-05"
      }
    ]
  }
]
```
