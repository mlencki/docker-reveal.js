# Docker image for reveal.js presentations

Ready to use docker image for serving [reveal.js](https://github.com/hakimel/reveal.js) markdown presentations

## Serving presentations

Slides can be served with `docker run` command:

```
docker run -p 8888:8000 -v path_to_your_presentations_directory:/app/presentations --env PRESENTATION_PATH="path_to_active_presentation" ghcr.io/mlencki/reveal.js-docker
```

or with docker-compose:

```
version: "3.8"

services:
    reveal.js:
        container_name: reveal.js
        image: mlencki/reveal.js-docker:latest
        environment:
            PRESENTATION_PATH: path_to_my_presentation
        ports:
            - 8888:8000
        volumes:
            - ./:/app/presentations
```

open:\
`localhost:8888`