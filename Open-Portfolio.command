#!/bin/bash
cd "$(dirname "$0")"

# Check if the Vite dev server port 5173 is already in use
if ! lsof -i :5173 > /dev/null ; then
  echo "Starting local portfolio server in the background..."
  # Start the dev server in the background
  npm run dev > /dev/null 2>&1 &
  # Wait 2 seconds for the server to spin up
  sleep 2
fi

# Open the portfolio URL in your default browser
open http://localhost:5173
echo "Portfolio opened in browser!"
