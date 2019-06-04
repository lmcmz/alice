#!/bin/bash

yarn install
git submodule update --init --recursive
cd ios
make boostrap
