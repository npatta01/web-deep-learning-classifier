

# Get Data
```
wget http://data.vision.ee.ethz.ch/cvl/food-101.tar.gz
tar -xvf food-101.tar.gz


```



```
mkdir -p subset/train
ls food-101/images | head | xargs -I {}  cp -r food-101/images/{}  subset/train

```