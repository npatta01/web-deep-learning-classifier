# Training the Model

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

The `model.pth` file may be too large to be included the commit.  Options for dealing with that:  
1.  Store the model on google drive.
2.  Store the model on GitHub releases.
3.  Store the model on bucket in the cloud.  

### Upload model to GitHub repo
If you train the model as in this repo, the model is saved to the `models` folder.  If not, you can ownload the `final.pth` to your local computer.  
