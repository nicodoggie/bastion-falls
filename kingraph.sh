#!/bin/bash

for i in $@; do
  yarn kingraph $i -F svg > ${i%%yaml}svg
done