# Training the Model

1.  Deep learning library
2.  Setting up GPU
3.  Getting the data
4.  Training the model 

## Deep learning library:  fastai
The [fastai](https://github.com/fastai) deep learning library, version 1.0 was utilized.  Fastai runs on top of PyTorch.   The MOOC will be officially released to the public in early 2019.

## GPU:  Google Cloud Compute
The data was retrieved and analyzed on Google Cloud Platform[(GCP)](console.cloud.google.com/compute/instances).  Any cloud platform (such as Paperspace or AWS) is usable, as long as a GPU is available.  Instructions for setting up a GPU working environment will be available from fastai.  

For this project, we used the Nvidia Tesla P100 with 100 GB of storage.  

## Dataset:  Food-101
The [Food-101](https://www.vision.ee.ethz.ch/datasets_extra/food-101/) data was used which included 101 food categories with a total of 101K images.  Thus, each class had 1000 images, of which 250 are manually reviewed test images and 750 are training images:    
>On purpose, the training images were not cleaned, and thus still contain some amount of noise. This comes mostly in the form of intense colors and sometimes wrong labels. All images were rescaled to have a maximum side length of 512 pixels.

#### Data Citation
Bossard, Lukas and Guillaumin, Matthieu and Van Gool, Luc, Food-101 -- Mining Discriminative Components with Random Forests, European Conference on Computer Vision, 2014


#### Retrieving the data
The dataset size is 5GB and can be retrieved using:  
```bash
wget http://data.vision.ee.ethz.ch/cvl/food-101.tar.gz
```

#### Unzip data
The `tar.gz` file can be opened using:  
```bash
tar xzf file.tar.gz
```

## Training the data:  Resnet-50 CNN

### Training Time
We used the Resnet-50 CNN architecture.  The model took about an hour to run on GCP. 

### Training the Deep Learning Model
The code used for training the data is available in the repository [npatta01/food-classifier](https://github.com/npatta01/food-classifier) in the notebook [1_train_large.ipynb](https://github.com/npatta01/food-classifier/blob/master/notebooks/1_train_large.ipynb)  

### Output from the Deep Learning Model
The output of the deep learning model is a file with weights.  The file is called `model.pth` (or `final.pth`).  If you train the model as in this repo, the model is saved to the `models` folder.  

The `final.pth` file can be downloaded to your local computer from Jupyter.

The `model.pth` file may be too large to be included in the git commit.  There are various options for proceeding with that size dataset:  
1.  Store the model on google drive.
2.  Store the model on GitHub releases.
3.  Store the model on a bucket in the cloud.  

We stored our final model data file under the "releases" area of the repository:  https://github.com/npatta01/food-classifier/releases

 
