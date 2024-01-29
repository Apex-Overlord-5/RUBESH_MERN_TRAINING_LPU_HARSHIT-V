
git revert :- #git revert <commit-SHA> creates a new commit undoing changes from a specific commit.
              # It doesn't modify existing commits, maintaining a clear commit history.

git reset TRACK_ID --hard/--soft FLAGS  #:-  `git reset <commit-SHA> --hard` stops changes and moves the branch  to a specific commit, destroying changes in the working directory.
# - git reset <commit-SHA> --soft` resets the branch pointer to a specific commit, keeping changes in the working directory unstaged.
# - <commit-SHA>` is the commit hash or branch to reset to, and `--hard` or `--soft` determines the reset type.

git checkout -b branch  # git checkout -b Rubesh` creates and switches to a new branch named `Rubesh` in a single command.

git checkout branch   #git checkout Rubesh` switches to the existing branch named `Rubesh`.