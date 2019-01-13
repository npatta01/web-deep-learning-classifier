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

## Food-101 Dataset
The [Food-101](https://www.vision.ee.ethz.ch/datasets_extra/food-101/) data was used which included 101 food categories with a total of 101K images.  Thus, each class had 1000 images, of which 250 are manually reviewed test images and 750 are training images:    
>On purpose, the training images were not cleaned, and thus still contain some amount of noise. This comes mostly in the form of intense colors and sometimes wrong labels. All images were rescaled to have a maximum side length of 512 pixels.

#### Data Citation
Bossard, Lukas and Guillaumin, Matthieu and Van Gool, Luc, Food-101 -- Mining Discriminative Components with Random Forests, European Conference on Computer Vision, 2014


#### Get data
The dataset size is 5GB and can be retrieved using:  
```bash
wget http://data.vision.ee.ethz.ch/cvl/food-101.tar.gz
```

#### Unzip data
The `tar.gz` file can be opened using:  
```bash
tar xvzf file.tar.gz
```


## Model Analysis on Google Cloud Platform (GCP)
The data was retrieved and analyzed on GCP.  Any cloud platform (such as Paperspace or AWS) is usable, as long as a GPU is available.  Instructions for setting up a GPU working environment will be available from fastai.  The MOOC will be officially released to the public in early 2019.

## Training Time
The model took about an hour to run on GCP.  The GPU type used was Nvidia Tesla P100 with 100 GB of storage.  

## Training the Deep Learning Model
The code used for training the data is available in the repository [npatta01/food-classifier](https://github.com/npatta01/food-classifier).  
The [fastai](https://github.com/fastai) deep learning library, which runs on top of PyTorch, was utilized.  

## Output from the Deep Learning Model
The output of the deep learning model is a file with weights.  The file is called `model.pth` (or `final.pth`) which is stored under "releases" area of the repository because of its size:  https://github.com/npatta01/food-classifier/releases


### Upload model to GitHub repo
If you train the model as in this repo, the model is saved to the `models` folder.  If not, you can ownload the `final.pth` to your local computer.  


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

 


 

 
 
 

