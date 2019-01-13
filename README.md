# Part 1:  Training the Image Classifier & Creating a Web App

This project was completed jointly by [Nidhin Pattaniyil](https://www.linkedin.com/in/nidhinpattaniyil/) and [Reshama Shaikh](https://reshamas.github.io).

This is what was used for model **training**:    
- fastai:  version 1.18
- PyTorch:  version  1.0  (dev or stable)
- Python:  version 3.6

This is what was used for model **deployment**:    
- Heroku
- Flask
 

## Overview Diagram



# Test running the web app
```
docker build -it app .
docker run -it app -p 5000:5000
```

### fastai code
Note to RS:  add snippets of code to share.

This output file, `model.pth` will be the input to the heroku app.  

---

# Deployment

## Using Heroku for Deployment
[Heroku](https://www.heroku.com/) was utilized to deploy the app on both web and mobile.  

## Using Flask for Python Web Framework
- [Flask](http://flask.pocoo.org/) is a [WSGI](https://en.wikipedia.org/wiki/Web_Server_Gateway_Interface).   

It is best to use a framework which is **asynchronous** because it can handle **multiple requests** at a time.

In this article, we provide instructions on using the Flask framework that is deployed on Heroku.

### Our Flask Web Application
https://food-img-classifier.herokuapp.com

 
## Heroku Setup
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
 

## HOLD for SCREENSHOTS of WEB APP

 


 

 
 
 

