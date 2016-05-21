#!/bin/bash

set -e

# Base directory for this entire project
BASEDIR=$(cd $(dirname $0) && pwd)

# Read the entered command
command=${1:-empty}

if [ $command == install ]
	then

		# -----------------------------------------------------------------
		# (1) install, link with semantic-ui less styles
		# -----------------------------------------------------------------

    printf '%s\n' "Create semantic-ui theme config file @ node_modules/semantic-ui-less/theme.config"

    echo '/* Reference the websemantics/strong-together app config file */
@import "resources/assets/less/semantic/theme.config";
/* End Config */' > "$BASEDIR/node_modules/semantic-ui-less/theme.config"

    printf '%s\n' "All done, .."

elif [ $command == deploy ]
	then

    # ---------------------------------------------------------------------------
		# (2) Deploy, the following bash will deploy this app to the repo gh-page
		# ---------------------------------------------------------------------------

		npm install
		npm run build

    # Create a new Git repo in public folder
    cd "$BASEDIR/public"
    git init

    # Set user details
    git config user.name "iAyeBot"
    git config user.email "iayebot@websemantics.ca"

    # First commit, .. horray!
    git add .
    git commit -m "Deploy to gh-pages"

    # Force push ...
    git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master:gh-pages > /dev/null 2>&1

    printf '%s\n' "All done, .."

  else

		# -----------------------------------------------------------------
		# (3) Nothing, show something .. anything ..
		# -----------------------------------------------------------------

		printf '%s\n%s\n' "Please type a valid command option:" "(1) install or (2) deploy"
fi
