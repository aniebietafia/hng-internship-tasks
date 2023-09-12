# REST API with Basic CRUD Operation

## Description

This is a simple REST API capable of CRUD operations on a "person" resource, interfacing with a database. It is built with Node.js, Express.js, and MongoDB using Mongoose ODM. The API dynamically handles parameters, such as adding or retrieving a person by name. The API development has UML diagram to represent the system's design and database structure. The entire project is hosted on GitHub, with a well-structured documentation in the repository that outlines request/response formats, setup instructions, and sample API usage.

## Installation

1. Clone this repository to your local machine

```
git clone https://github.com/aniebietafia/hng-internship-tasks.git
```

2. Change directory into the `hng-internship-tasks - stage two` directory

```
cd hng-internship-tasks/stage_two_task
```

3. Install dependencies

```
npm install
```

4. Create a `.env` file in the root directory of the project and add the following environment variables

```
PORT=<your port number>
MONGODB_URI=<your mongodb uri>
```

5. Start the application

```
npm start
```

6. Use [Postman](https://www.postman.com/) to test the endpoints

## API Documentation

The API documentation is available [here](https://documenter.getpostman.com/view/22984536/2s9YC2zDDv)

## API Endpoints

| Endpoint        | HTTP Method | Description   |
| --------------- | ----------- | ------------- |
| `/api/:user_id` | `GET`       | Fetch Person  |
| `/api`          | `POST`      | Create Person |
| `/api/:user_id` | `PUT`       | Update Person |
| `/api/:user_id` | `DELETE`    | Delete Person |

## Sample Request/Response

### Fetch Person

#### Request

```
GET /api/Aniebiet Afia
```

#### Response

```
{
    "person": {
        "_id": "65002c97afcb2192478cf8e6",
        "name": "Aniebiet Afia",
        "createdAt": "2023-09-12T09:17:11.863Z",
        "updatedAt": "2023-09-12T09:17:11.863Z",
        "__v": 0
    }
}
```

## UML Diagram

<img src="./src/assets/UML class.png">
