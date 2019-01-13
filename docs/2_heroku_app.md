# Heroku Web App Deployment

[Heroku](https://www.heroku.com/) was utilized to deploy the app on both web and mobile.

### Input to Heroku App
This output file, `model.pth` will be the input to the heroku app.  

 
### Test running the web app
This Docker image contains Python 3, Flask and fastai.
```
docker build -it app .
docker run -it app -p 5000:5000
```

## Heroku Setup
If you don't have a Heroku account, create one here: https://www.heroku.com/ 
```
wget -qO- https://cli-assets.heroku.com/install-ubuntu.sh | sh
heroku login
heroku container:login

APP_NAME="food-img-classifier"
heroku create $APP_NAME

heroku container:push web --app ${APP_NAME}

heroku container:release web --app ${APP_NAME}
heroku open --app $APP_NAME
heroku logs --tail --app ${APP_NAME}
```
 
## Our Flask Web Application
https://food-img-classifier.herokuapp.com

