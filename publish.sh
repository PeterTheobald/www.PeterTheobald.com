#!/bin/sh
hugo
git add -v --all
git commit --all -m "$*"
git push -u origin master
