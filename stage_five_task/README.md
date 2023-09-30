# HNGix Stage Five Task - Backend

Creating a Backend that handles video upload from the frontend, saves the video to disk and renders a page to play the video without authentication.

## Getting Started

### Tools

> - NodeJS
> - ExpressJS
> - Multer
> - Cloudinary

### Installation

> - Clone the repository `git clone git@github.com:aniebietafia/hng-internship-tasks.git` to your local machine
> - Change directory into the `hng-internship-tasks/stage_five_task` directory
> - Open the terminal in the current directory
> - Create a `.env` file in the root directory of the project and add the following environment variables

```
PORT=<your port number>
CLOUDINARY_CLOUD_NAME=<your cloudinary cloud name>
CLOUDINARY_API_KEY=<your cloudinary api key>
CLOUDINARY_API_SECRET=<your cloudinary api secret>
```

> - Run `npm install` to install dependencies
> - Run `npm start` to start the server

### API Documentation

The API documentation on Postman is available [here](https://documenter.getpostman.com/view/22984536/UV5WD8Qo)

### API Endpoints

| Endpoint      | HTTP Method | Description  |
| ------------- | ----------- | ------------ |
| `/api/upload` | `POST`      | Upload Video |

### Hosted API URL on Heroku

```
https://video-uploader-3df06b651fde.herokuapp.com
```

### Sample Request/Response

#### Upload Video

##### Request

```
POST https://video-uploader-3df06b651fde.herokuapp.com/api/upload
```

##### Response

```
{
    "status": "success",
    "message": "Video uploaded successfully",
    "title": "Sample Video",
    "videoUrl": "https://res.cloudinary.com/aniebietafia/video/upload/v1629869852/VideoUploader/1629869851.mp4",
}
```

## Author

[Aniebiet Afia]("https://twitter.com/aniebietafia_")
