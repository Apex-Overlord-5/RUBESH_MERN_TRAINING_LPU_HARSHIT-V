
echo "# testing_github" >> README.md :- # Create a README file with initial content


git init :- # Initialize a new Git repository


git add README.md :- # Add the README file to the staging area


git commit -m "Initial commit" :- # Commit the changes with an initial message


git branch -M main :- # Rename the default branch to 'main'


git remote add origin https://website-url.git :- # Add a remote named 'origin' with the repository URL


git push -u origin main  :- # Push the changes to the 'main' branch on the remote repository
