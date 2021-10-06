#!/usr/bin/env bash

# $ rsync -avz --exclude '*.txt' source/ destination/


# copy all files - exclude ts?
rsync -avz --exclude '*.ts' src/ build 

# rsync -avz --exclude '*.ts' src/public build 









# rsync -a src/public/*.html build/public
# rsync -a src/public/*.js build/public
# rsync -a src/public/*.css build/public
# rsync -a src/*.js build