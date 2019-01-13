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

#### Create directories for data
Creates a separate directory for each label of the data:
```
mkdir -p subset/train
ls food-101/images | head | xargs -I {}  cp -r food-101/images/{}  subset/train
```

## Model Analysis on Google Cloud Platform (GCP)
The data was retrieved and analyzed on GCP.  Any cloud platform (such as Paperspace or AWS) is usable, as long as a GPU is available.  Instructions for setting up a GPU working environment will be available from fastai.  The MOOC will be officially released to the public in early 2019.

## Training Time
The model took about an hour to run on GCP.  The GPU type used was Nvidia Tesla P100 with 100 GB of storage.  

## Training the Deep Learning Model
The code used for training the data is available in the repository [npatta01/food-classifier](https://github.com/npatta01/food-classifier).  
The [fastai](https://github.com/fastai) deep learning library, which runs on top of PyTorch, was utilized.  Other libraries, such as Keras or TensorFlow can be used to run your model. 

## Output from the Deep Learning Model
The output of the deep learning model is a file with weights.  The file is called `model.pth` (or `final.pth`) which is stored under "releases" area of the repository because of its size:  https://github.com/npatta01/food-classifier/releases


### Upload model to GitHub repo
This code is run where? on GCP?  what is "np-training-private"?
```
gsutil -m cp -r models/* gs://np-training-private/models/food101/
rm -rf models
mkdir -p models
gsutil -m cp -r gs://np-training-private/models/food101/ models/
```

# Test ? 
```
INSTANCE_NAME=dl
gcloud compute --project np-training ssh --zone=$ZONE ubuntu@$INSTANCE_NAME -- -L 8080:localhost:8080 -L 5000:localhost:5000

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



## Mobile Deployment 
## repo for iOS / Android App
https://github.com/npatta01/food-app

 
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

### Web App
- https://food-img-classifier.herokuapp.com




 

---

# Mobile App

## repo for iOS / Android App
- Docs are stored in this repo:
- https://github.com/npatta01/food-app


This app lets you submit a photo of food and returns the predicted food category.  :pizza:

The model was developed using the food-101 dataset and the fastai deep learning library, which is built on PyTorch.

## Requirements for Running Mobile App

[Xcode](https://developer.apple.com/xcode/)  is an iOS simulator for Mac/iPhone users.  Xcode is a large file, at 10 GB.  [Android Studio](https://developer.android.com/studio/) is useful for Windows/Android users.  
Xcode is only available for Mac, but Androis Studio is available for Mac or Windows.  

These simulators are not required, though they are helpful in developing the app and provide a smoother development experience.  

|                                                       | iOS                       | Android                                    |
|-------------------------------------------------------|---------------------------|--------------------------------------------|
| Can be deployed locally on computer and mobile phone? | yes                       | yes                                        |
| Is [Expo](https://expo.io/) needed?                   | yes                       | yes                                        |
| Can app be run locally on mobile phone by developer?  | yes, on iPhone            | yes, on Android                            |
| Can the developer share unpublished app with others?  | no                        | yes, other users require Expo to be installed and using Android phone |
| What is the cost of publishing to the store for public access? [a]| $100 per year | $30 one-time fee                           |
| Does official store publishing require: screenshots, privacy policy and contact info?  | yes                       | yes       |
| For official store publishing, is a review required?  | Apple will do peer review | no additional review required              |
[a] Cost indicated are in US dollars.


## Once mobile app is running
include HERE:  video on running mobile app


## References
- [Expo](https://expo.io/): is a free and open source toolchain built around React Native to help you build native iOS and Android projects using JavaScript and React.
-[GitHub Help: Distributing Large Binaries] (https://help.github.com/articles/about-releases/) Some projects require distributing large files, such as binaries or installers, in addition to distributing source code.

If you need to distribute large files within your repository, we recommend that you create releases for your projects on GitHub. Releases allow you to include binary files, such as compiled programs. For more information, visit "Creating releases."

[Food-101–mining discriminative components with random forests](https://link.springer.com/chapter/10.1007%2F978-3-319-10599-4_29)
L Bossard, M Guillaumin, L Van Gool
European Conference on Computer Vision, 446-461


 
 

