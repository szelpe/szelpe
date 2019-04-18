# szelpe.hu

## Build

1. run `build.ps1` - this generates `index.html`
2. run `docker-build.ps1` - this creates and pushes the image called `szelpe/szelpe.hu:latest`

## Run

You can run the docker image:

```bash
docker run -d -p 8080:80 szelpe/szelpe.hu:latest
```
