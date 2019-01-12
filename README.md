

# Get Data
```
wget http://data.vision.ee.ethz.ch/cvl/food-101.tar.gz
tar -xvf food-101.tar.gz
```



```
mkdir -p subset/train
ls food-101/images | head | xargs -I {}  cp -r food-101/images/{}  subset/train
```

# Upload Model
```
gsutil -m cp -r models/* gs://np-training-private/models/food101/
rm -rf models
mkdir -p models
gsutil -m cp -r gs://np-training-private/models/food101/ models/

```


# Deploy

##

## Heroku Setup
```
wget -qO- https://cli-assets.heroku.com/install-ubuntu.sh | sh
heroku login
heroku container:login

APP_NAME="np-food-classifier"
heroku create $APP_NAME

heroku container:push web --app ${APP_NAME}

heroku container:release web --app ${APP_NAME}
heroku open --app $APP_NAME
heroku logs --tail --app ${APP_NAME}
```

# Test
```
INSTANCE_NAME=dl
gcloud compute --project np-training ssh --zone=$ZONE ubuntu@$INSTANCE_NAME -- -L 8080:localhost:8080 -L 5000:localhost:5000

docker build -it app .
docker run -it app -p 5000:5000
```
