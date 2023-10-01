# HNGix Stage Five Task - Backend

Creating a Backend that handles video upload from the frontend, saves the video to disk and renders a page to play the video without authentication.

## Getting Started

### Technologies

> - NodeJS
> - Express
> - MongoDB
> - Multer
> - Cloudinary

### Installation

> - Clone the repository using `git clone git clone git@github.com:aniebietafia/hng-internship-tasks.git`
> - Navigate to the project directory `cd hng-internship-tasks/stage-five_task`
> - Install all dependencies using `npm install`
> - Create a `.env` file in the root directory of the project and add the following environment variables:

> - ```
>   PORT=3000
>   MONGO_URI=<your-mongodb-uri>
>   CLOUDINARY_CLOUD_NAME=<your-cloudinary-cloud-name>
>   CLOUDINARY_API_KEY=<your-cloudinary-api-key>
>   CLOUDINARY_API_SECRET=<your-cloudinary-api-secret>
>   ```

```
> - Start the server using `npm start`
```

### API Endpoints

| Endpoint        | HTTP Method | Description           |
| --------------- | ----------- | --------------------- |
| `/api/video`    | `POST`      | Uploads the Recording |
| `/api/:videoId` | `GET`       | Get a single Video    |

### Hosted API

`https://video-uploader-3df06b651fde.herokuapp.com/`

### Sample Request/Response

#### POST `/api/video`

##### Response

```
{
    "message": "Video uploaded successfully",
    "video": {
        "id": "5f3f5b3b1c9d440000f1b0a0",
        "title": "Sample Video",
        "url": "https://res.cloudinary.com/aniebietafia/video/upload/v1598016675/5f3f5b3b1c9d440000f1b0a0.mp4"
    }
}
```

#### GET `/api/:videoId`

##### Response

```
{
    "id": "5f3f5b3b1c9d440000f1b0a0",
    "title": "Sample Video",
    "url": "https://res.cloudinary.com/aniebietafia/video/upload/v1598016675/5f3f5b3b1c9d440000f1b0a0.mp4"
}
```

### Author

Aniebiet Afia
