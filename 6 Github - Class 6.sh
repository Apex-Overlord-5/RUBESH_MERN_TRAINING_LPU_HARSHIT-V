#PART A -----  Switching between branches
git checkout -b new1 work-a  # Create and switch to a new branch named 'new1' from 'work-a'
git checkout master           # Switch to the 'master' branch
git checkout -b new1 work-b  # Create and switch to a new branch named 'new1' from 'work-b'

#PART B -----  Committing changes in 'work-a' branch
git checkout work-a          # Switch to the 'work-a' branch
git commit -m "Text"         # Commit changes with the message "Text"

#PART C -----  Committing changes in 'work-b' branch
git checkout work-b          # Switch to the 'work-b' branch
git add .                     # Stage changes
git commit -m "message"       # Commit changes with the message "message"

#PART D -----  Merging branches
git merge work-a              # Merge changes from 'work-a' into the current branch
git branch                    # Display branch information
git checkout work-b           # Switch to the 'work-b' branch
git checkout master           # Switch to the 'master' branch
git merge work-b              # Merge changes from 'work-b' into the current branch

#PART E -----  Switching from one branch to another
git checkout work-a           # Switch from the present branch to 'work-a'

#PART F -----  Deleting branches
git branch -d new1            # Delete the 'new1' branch (we can't delete 'master')
