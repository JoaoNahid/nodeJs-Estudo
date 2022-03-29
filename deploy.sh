#!/bin/bash
git rm -r --cached .
git add .
git commit -m "alt"
git push -u origin main
