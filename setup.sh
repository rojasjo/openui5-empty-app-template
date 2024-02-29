#!/bin/bash

if [ "$#" -ne 3 ]; then
    echo "Usage: $0 <module_namespace> <app_title> <app_description>"
    exit 1
fi

module_to_replace="my.openui5.webapp"
title_to_replace="my.openui5.webapp.title"
description_to_replace="my.openui5.webapp.description"

module_replacement="$1"
app_title_replacement="$2"
app_description_replacement="$3"

script_path=$(realpath "$0")

# Find all projects files and substitute the strings
find . \( -type d -name "node_modules" -o -type d -name ".git" -o -path "./$0" \) -prune -o -type f -print | while read -r file; do
    echo "Processing file: $file"

    if [ "$file" = "./setup.sh" ]; then
        continue
    fi

    sed -i "s/$title_to_replace/$app_title_replacement/g" "$file"

    sed -i "s/$description_to_replace/$app_description_replacement/g" "$file"

    sed -i "s/$module_to_replace/$module_replacement/g" "$file"
done