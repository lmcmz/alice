#!/bin/bash

yarn install
git submodule update --init --recursive
cd ios
pod install --repo-update
