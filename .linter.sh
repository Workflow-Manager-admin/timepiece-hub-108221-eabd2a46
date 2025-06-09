#!/bin/bash
cd /home/kavia/workspace/code-generation/timepiece-hub-108221-eabd2a46/timepiece_hub_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

